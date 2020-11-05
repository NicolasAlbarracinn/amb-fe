import React, { createRef, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import cx from 'classnames';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import AdminNavbar from 'components/AdminNavbar/AdminNavbar';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';

import routes from 'routes';

import image from 'assets/img/sidebar-2.jpg';
import logo from 'assets/img/amebo-logo-short.png';

import { useStyles } from './adminLayoutStyles';

let ps;

const AdminLayout = props => {
  const { ...rest } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniActive, setMiniActive] = useState(false);
  const [activeRoute, setActiveRoute] = useState('');
  const classes = useStyles();
  const location = useLocation();
  const mainPanelClasses =
    classes.mainPanel +
    ' ' +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]: navigator.platform.indexOf('Win') > -1,
    });
  // ref for main panel div
  const mainPanel = createRef<HTMLDivElement>();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      //@ts-ignore
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getActiveRoute = routes => {
    let activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    if (location.pathname.includes('profile')) {
      return 'Editar Perfil';
    }
    return activeRoute;
  };

  useEffect(() => {
    setActiveRoute(getActiveRoute(routes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, props]);

  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={'AMEBO'}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="blue"
        bgColor="black"
        miniActive={miniActive}
        {...rest}
      />
      <div className={mainPanelClasses} ref={mainPanel}>
        <AdminNavbar
          //@ts-ignore
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={activeRoute}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>{props.children}</div>
        </div>
        <Footer fluid />
      </div>
    </div>
  );
};

export default AdminLayout;
