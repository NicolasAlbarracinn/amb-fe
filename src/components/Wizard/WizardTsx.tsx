import { Card, Button } from '@material-ui/core';
import React, { Component, createRef, useCallback, useEffect, useState } from 'react';
import { render } from 'react-dom';

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

const Wizard = ({ steps, color }: IWizProps) => {
  const classes = useStyles();
  const isStepsLegngthDifThanThree = steps.length !== 3 ? '50%' : `${100 / 3}%`;
  const isStepsLengthEqualTwo = steps.length === 2 ? '50%' : `${100 / 3}%`;
  const initialWidth =
    steps.length === 1 ? '100%' : window.innerWidth < 600 ? isStepsLegngthDifThanThree : isStepsLengthEqualTwo;

  const [currentStep, setCurrentStep] = useState(0);
  const [stepColor, setStepColor] = useState(color);
  const [nextButton, setNextButton] = useState(steps.length > 1);
  const [previousButton, setPreviousButton] = useState(steps.length === 1);
  const [finishButton, setFinishButton] = useState(0);
  const [width, setWidth] = useState(initialWidth);
  const [movingTabStyle, setMovingTabStyle] = useState<dinamicObject>({
    transition: 'transform 0s',
  });
  const [allStates, setAllStates] = useState<dinamicObject>({});

  const wizard = createRef<HTMLDivElement>();

  const updateWidth = (): any => {
    refreshAnimation(currentStep);
  };

  useEffect(() => {
    refreshAnimation(0);
    window.addEventListener('resize', updateWidth());
    return () => {
      window.removeEventListener('resize', updateWidth());
    };
  }, [refreshAnimation, updateWidth]);

  const navigationStepChange = key => {
    if (steps) {
      const validationState = true;
      if (key > currentStep) {
        for (var i = currentStep; i < key; i++) {
          if (steps[i].stepId.sendState !== undefined) {
            setAllStates({});
            this.setState({
              allStates: {
                ...this.state.allStates,
                [this.props.steps[i].stepId]: this[this.props.steps[i].stepId].sendState(),
              },
            });
          }
          if (
            this[this.props.steps[i].stepId].isValidated !== undefined &&
            this[this.props.steps[i].stepId].isValidated() === false
          ) {
            validationState = false;
            break;
          }
        }
      }
      if (validationState) {
        this.setState({
          currentStep: key,
          nextButton: this.props.steps.length > key + 1 ? true : false,
          previousButton: key > 0 ? true : false,
          finishButton: this.props.steps.length === key + 1 ? true : false,
        });
        this.refreshAnimation(key);
      }
    }
  };

  const nextButtonClick = () => {
    console.log(this.props);
    if (
      (this.props.validate &&
        ((this[this.props.steps[this.state.currentStep].stepId].isValidated !== undefined &&
          this[this.props.steps[this.state.currentStep].stepId].isValidated()) ||
          this[this.props.steps[this.state.currentStep].stepId].isValidated === undefined)) ||
      this.props.validate === undefined
    ) {
      if (this[this.props.steps[this.state.currentStep].stepId].sendState !== undefined) {
        this.setState({
          allStates: {
            ...this.state.allStates,
            [this.props.steps[this.state.currentStep].stepId]: this[
              this.props.steps[this.state.currentStep].stepId
            ].sendState(),
          },
        });
      }
      var key = this.state.currentStep + 1;
      this.setState({
        currentStep: key,
        nextButton: this.props.steps.length > key + 1 ? true : false,
        previousButton: key > 0 ? true : false,
        finishButton: this.props.steps.length === key + 1 ? true : false,
      });
      this.refreshAnimation(key);
    }
  };

  const previousButtonClick = () => {
    if (this[this.props.steps[this.state.currentStep].stepId].sendState !== undefined) {
      this.setState({
        allStates: {
          ...this.state.allStates,
          [this.props.steps[this.state.currentStep].stepId]: this[
            this.props.steps[this.state.currentStep].stepId
          ].sendState(),
        },
      });
    }
    var key = this.state.currentStep - 1;
    if (key >= 0) {
      this.setState({
        currentStep: key,
        nextButton: this.props.steps.length > key + 1 ? true : false,
        previousButton: key > 0 ? true : false,
        finishButton: this.props.steps.length === key + 1 ? true : false,
      });
      this.refreshAnimation(key);
    }
  };

  const finishButtonClick = () => {
    if (
      (this.props.validate === false && this.props.finishButtonClick !== undefined) ||
      (this.props.validate &&
        ((this[this.props.steps[this.state.currentStep].stepId].isValidated !== undefined &&
          this[this.props.steps[this.state.currentStep].stepId].isValidated()) ||
          this[this.props.steps[this.state.currentStep].stepId].isValidated === undefined) &&
        this.props.finishButtonClick !== undefined)
    ) {
      this.setState(
        {
          allStates: {
            ...this.state.allStates,
            [this.props.steps[this.state.currentStep].stepId]: this[
              this.props.steps[this.state.currentStep].stepId
            ].sendState(),
          },
        },
        () => {
          this.props.finishButtonClick(this.state.allStates);
        },
      );
    }
  };

  const refreshAnimation = useCallback(index => {
    var total = this.props.steps.length;
    var li_width = 100 / total;
    var total_steps = this.props.steps.length;
    //@ts-ignore
    var move_distance = this?.wizard?.current?.children[0].offsetWidth / total_steps;
    var index_temp = index;
    var vertical_level = 0;

    var mobile_device = window.innerWidth < 600 && total > 3;

    if (mobile_device) {
      //@ts-ignore
      move_distance = this?.wizard?.current?.children[0].offsetWidth / 2;
      index_temp = index % 2;
      li_width = 50;
    }

    this.setState({ width: li_width + '%' });

    var step_width = move_distance;
    move_distance = move_distance * index_temp;

    var current = index + 1;

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
    var movingTabStyle = {
      width: step_width,
      transform: 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
      transition: 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)',
    };
    this.setState({ movingTabStyle: movingTabStyle });
  }, []);

  const { classes, title, subtitle, color, steps } = this.props;
  return (
    <div className={classes.wizardContainer} ref={this.wizard}>
      <Card className={classes.card}>
        <div className={classes.wizardHeader}>
          <h3 className={classes.title}>{title}</h3>
          <h5 className={classes.subtitle}>{subtitle}</h5>
        </div>
        <div className={classes.wizardNavigation}>
          <ul className={classes.nav}>
            {steps.map((prop, key) => {
              return (
                <li className={classes.steps} key={key} style={{ width: this.state.width }}>
                  <a
                    href="#pablo"
                    className={classes.stepsAnchor}
                    onClick={e => {
                      e.preventDefault();
                      this.navigationStepChange(key);
                    }}
                  >
                    {prop.stepName}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className={classes.movingTab + ' ' + classes[color]} style={this.state.movingTabStyle}>
            {steps[this.state.currentStep].stepName}
          </div>
        </div>
        <div className={classes.content}>
          {steps.map((prop, key) => {
            const stepContentClasses = cx({
              [classes.stepContentActive]: this.state.currentStep === key,
              [classes.stepContent]: this.state.currentStep !== key,
            });
            return (
              <div className={stepContentClasses} key={key}>
                <prop.stepComponent innerRef={node => (this[prop.stepId] = node)} allStates={this.state.allStates} />
              </div>
            );
          })}
        </div>
        <div className={classes.footer}>
          <div className={classes.left}>
            {this.state.previousButton ? (
              <Button className={this.props.previousButtonClasses} onClick={() => this.previousButtonClick()}>
                {this.props.previousButtonText}
              </Button>
            ) : null}
          </div>
          <div className={classes.right}>
            {this.state.nextButton ? (
              <Button color="rose" className={this.props.nextButtonClasses} onClick={() => this.nextButtonClick()}>
                {this.props.nextButtonText}
              </Button>
            ) : null}
            {this.state.finishButton ? (
              //@ts-ignore
              <Button color="rose" className={this.finishButtonClasses} onClick={() => this.finishButtonClick()}>
                {this.props.finishButtonText}
              </Button>
            ) : null}
          </div>
          <div className={classes.clearfix} />
        </div>
      </Card>
    </div>
  );
};
