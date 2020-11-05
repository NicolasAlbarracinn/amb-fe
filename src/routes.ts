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
    name: 'Afiliados',
    icon: PeopleIcon,
    state: 'pageCollapse',
    views: [
      {
        path: '/new',
        name: 'Crear Afiliado',
        mini: 'PP',
        component: PeopleIcon,
        layout: '/app/affiliates',
      },
    ],
  },
];
export default dashRoutes;
