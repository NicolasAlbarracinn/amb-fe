import React from 'react';
import cx from 'classnames';

// @material-ui/core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { useStyles } from './styles';
const Footer = props => {
  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={block}>
                {rtlActive ? 'الصفحة الرئيسية' : 'Inicio'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={block}>
                {rtlActive ? 'شركة' : 'Nosotros'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={block}>
                {rtlActive ? 'بعدسة' : 'Amebo'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={block}>
                {rtlActive ? 'مدونة' : 'Contacto'}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>&copy; Amebo</p>
      </div>
    </footer>
  );
};

export default Footer;
