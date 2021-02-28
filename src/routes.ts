// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AllOut from '@material-ui/icons/AllOut';
import Dashboard from 'features/dashboard';

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
  {
    collapse: true,
    name: 'Prestaciones',
    icon: AllOut,
    state: 'benefitsCollapse',
    views: [
      {
        path: '/new',
        name: 'Crear Prestacion',
        mini: 'CP',
        component: AllOut,
        layout: '/app/benefits',
      },
    ],
  },
];
export default dashRoutes;
