import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// @material-ui/icons
import ExpandMore from '@material-ui/icons/ExpandMore';

import { useStyles } from './styles';

interface ICollapse {
  title: string;
  content: React.ReactNode;
}

interface IAccordionProps {
  defaultTab?: number;
  collapses: Array<ICollapse>;
}

export default function Accordion({ defaultTab = -1, collapses }: IAccordionProps) {
  const classes = useStyles();
  const [active, setActive] = React.useState(defaultTab);

  const handleChange = panel => (event, expanded) => {
    setActive(expanded ? panel : -1);
  };

  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => {
        return (
          <ExpansionPanel
            expanded={active === key}
            onChange={handleChange(key)}
            key={key}
            classes={{
              root: classes.expansionPanel,
              expanded: classes.expansionPanelExpanded,
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMore />}
              classes={{
                root: classes.expansionPanelSummary,
                expanded: classes.expansionPanelSummaryExpaned,
                content: classes.expansionPanelSummaryContent,
                expandIcon: classes.expansionPanelSummaryExpandIcon,
              }}
            >
              <h4 className={classes.title}>{prop.title}</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>{prop.content}</ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}
