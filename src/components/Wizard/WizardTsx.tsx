import { Card } from '@material-ui/core';

import cx from 'classnames';
import React, { useRef, memo, useCallback, useEffect, useState } from 'react';

import Button from 'components/CustomButtons/Button';

import { useStyles } from './styles';

type dinamicObject = { [key: string]: any };
type colors = 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';

interface ISteps {
  stepName: string;
  stepComponent: object;
  stepId: string;
}

interface IWizProps {
  classes: dinamicObject;
  steps: any;
  color: colors;
  title?: string;
  subtitle?: string;
  previousButtonClasses?: string;
  previousButtonText?: string;
  nextButtonClasses?: string;
  nextButtonText?: string;
  finishButtonClasses?: string;
  finishButtonText?: string;
  finishButtonClick?: Function;
  validate?: boolean;
}

const Wizard = memo(
  ({
    steps,
    color,
    title,
    subtitle,
    previousButtonClasses,
    previousButtonText,
    nextButtonClasses,
    nextButtonText,
  }: any) => {
    const classes = useStyles();
    const isStepsLegngthDifThanThree = steps.length !== 3 ? '50%' : `${100 / 3}%`;
    const isStepsLengthEqualTwo = steps.length === 2 ? '50%' : `${100 / 3}%`;
    const initialWidth =
      steps.length === 1 ? '100%' : window.innerWidth < 600 ? isStepsLegngthDifThanThree : isStepsLengthEqualTwo;

    const [currentStep, setCurrentStep] = useState(0);
    const [stepColor, setStepColor] = useState(color);
    const [nextButton, setNextButton] = useState(true);
    const [previousButton, setPreviousButton] = useState(false);
    const [finishButton, setFinishButton] = useState(0);
    const [width, setWidth] = useState(initialWidth);
    const [movingTabStyle, setMovingTabStyle] = useState<dinamicObject>({
      transition: 'transform 0s',
    });
    const [allStates, setAllStates] = useState<dinamicObject>({});

    const wizard = useRef<any>();

    const refreshAnimation = useCallback(
      index => {
        const total = steps.length;
        const total_steps = steps.length;
        const mobile_device = window.innerWidth < 600 && total > 3;

        let vertical_level = 0;
        let index_temp = index;
        let li_width = 100 / total;
        let move_distance = wizard?.current?.children[0].offsetWidth / total_steps;

        if (mobile_device) {
          move_distance = wizard?.current?.children[0].offsetWidth / 2;
          index_temp = index % 2;
          li_width = 50;
        }

        setWidth(li_width + '%');

        const step_width = move_distance;
        move_distance = move_distance * index_temp;

        const current = index + 1;

        if (current === 1 || (mobile_device === true && index % 2 === 0)) {
          move_distance -= 8;
        } else if (current === total_steps || (mobile_device === true && index % 2 === 1)) {
          move_distance += 8;
        }

        if (mobile_device) {
          //@ts-ignore
          vertical_level = parseInt(index / 2, 10);
          vertical_level = vertical_level * 38;
        }
        const movingTabStyle = {
          width: step_width,
          transform: 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          transition: 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)',
        };
        setMovingTabStyle(movingTabStyle);
      },
      [steps.length, wizard],
    );

    const updateWidth = useCallback((): any => {
      refreshAnimation(currentStep);
    }, [currentStep, refreshAnimation]);

    useEffect(() => {
      refreshAnimation(0);
      window.addEventListener('resize', updateWidth);
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigationStepChange = key => {
      setCurrentStep(key);
      refreshAnimation(key);
    };

    const nextButtonClick = () => {
      setCurrentStep(currentStep + 1);
      refreshAnimation(currentStep + 1);
    };

    const previousButtonClick = () => {
      setCurrentStep(currentStep - 1);
      refreshAnimation(currentStep - 1);
    };

    return (
      <div className={classes.wizardContainer} ref={wizard}>
        <Card className={classes.card}>
          <div className={classes.wizardHeader}>
            <h3 className={classes.title}>{title}</h3>
            <h5 className={classes.subtitle}>{subtitle}</h5>
          </div>
          <div className={classes.wizardNavigation}>
            <ul className={classes.nav}>
              {steps.map((prop, key) => {
                return (
                  <li className={classes.steps} key={key} style={{ width: width }}>
                    <a
                      href="#step"
                      className={classes.stepsAnchor}
                      onClick={e => {
                        e.preventDefault();
                        navigationStepChange(key);
                      }}
                    >
                      {prop.stepName}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/*TODO: Styles are not working properly */}
            <div className={classes.movingTab + ' ' + classes[color]} style={movingTabStyle}>
              {steps[currentStep].stepName}
            </div>
          </div>
          <div className={classes.content}>
            {steps.map((prop, key) => {
              const stepContentClasses = cx({
                [classes.stepContentActive]: currentStep === key,
                [classes.stepContent]: currentStep !== key,
              });
              return (
                <div className={stepContentClasses} key={key}>
                  <prop.stepComponent innerRef={node => node} allStates={allStates} />
                </div>
              );
            })}
          </div>
          <div className={classes.footer}>
            <div className={classes.left}>
              {previousButton ? (
                <Button color="rose" className={previousButtonClasses} onClick={previousButtonClick}>
                  {previousButtonText}
                </Button>
              ) : null}
            </div>
            <div className={classes.right}>
              {nextButton ? (
                <Button color="rose" className={nextButtonClasses} onClick={nextButtonClick}>
                  {nextButtonText}
                </Button>
              ) : null}
            </div>
            <div className={classes.clearfix} />
          </div>
        </Card>
      </div>
    );
  },
);

export default Wizard;
