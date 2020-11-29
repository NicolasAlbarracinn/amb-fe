// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';
import AllOut from '@material-ui/icons/AllOut';
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
      {
        path: '/list',
        name: 'Listado de Socios',
        mini: 'LS',
        component: ListIcon,
        layout: '/app/partners',
      },
    ],
  },
  {
    collapse: true,
    name: 'Prestaciones',
    icon: AllOut,
    state: 'pageCollapse',
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
