// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import Dashboard from 'pages/Dashboard/Dashboard';

const dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard,
    layout: '/app',
  },
  {
    collapse: true,
    name: 'Socios',
    icon: PeopleIcon,
    state: 'pageCollapse',
    views: [
      {
        path: '/new',
        name: 'Crear Socio',
        mini: 'CS',
        component: PeopleIcon,
        layout: '/app/partners',
      },
    ],
  },
];
export default dashRoutes;
