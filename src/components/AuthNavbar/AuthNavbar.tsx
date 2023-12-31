import React, { useState } from 'react';
import cx from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/icons/Menu';

import Button from 'components/CustomButtons/Button';

import logo from 'assets/img/amebo-logo.png';

import { useStyles } from './styles';

export default function AuthNavbar(props) {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  const { color } = props;
  const appBarClasses = cx({
    [' ' + classes[color]]: color,
  });
  /*var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to={'/admin/dashboard'} className={classes.navLink}>
          <Dashboard className={classes.listItemIcon} />
          <ListItemText primary={'Dashboard'} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={'/auth/pricing-page'}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute('/auth/pricing-page'),
          })}
        >
          <MonetizationOn className={classes.listItemIcon} />
          <ListItemText primary={'Pricing'} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={'/auth/register-page'}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute('/auth/register-page'),
          })}
        >
          <PersonAdd className={classes.listItemIcon} />
          <ListItemText primary={'Register'} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={'/auth/login-page'}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute('/auth/login-page'),
          })}
        >
          <Fingerprint className={classes.listItemIcon} />
          <ListItemText primary={'Login'} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={'/auth/lock-screen-page'}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute('/auth/lock-screen-page'),
          })}
        >
          <LockOpen className={classes.listItemIcon} />
          <ListItemText primary={'Lock'} disableTypography={true} className={classes.listItemText} />
        </NavLink>
      </ListItem>
    </List>
  );*/
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <img src={logo} className={classes.logo} alt="amebo" title="amebo logo" />
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              Amebo
            </Button>
          </div>
        </Hidden>
        {/*<Hidden smDown>{list}</Hidden> */}
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        {/* <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={'right'}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
            </Hidden> */}
      </Toolbar>
    </AppBar>
  );
}
