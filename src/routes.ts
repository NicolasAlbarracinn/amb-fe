// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard';
// import PeopleIcon from '@material-ui/icons/People';
import AllOut from '@material-ui/icons/AllOut';
import ListIcon from '@material-ui/icons/List';
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
    name: 'Socios',
    icon: AllOut,
    state: 'pageCollapse',
    views: [
      {
        path: '/new',
        name: 'Crear Socio',
        mini: 'SP',
        component: AllOut,
        layout: '/app/partners',
      },
      {
        path: '/list',
        name: 'Lista de Socios',
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
    state: 'benefitsCollapse',
    views: [
      {
        path: '/new',
        name: 'Crear Prestacion',
        mini: 'CP',
        component: AllOut,
        layout: '/app/benefits',
      },
      {
        path: '/list',
        name: 'Listado de prestaciones',
        mini: 'LP',
        component: ListIcon,
        layout: '/app/benefits',
      },
    ],
  },
  {
    collapse: true,
    name: 'Fondeadores',
    icon: AllOut,
    state: 'lenderCollapse',
    views: [
      {
        path: '/new',
        name: 'Cargar Fondeador',
        mini: 'CF',
        component: AllOut,
        layout: '/app/lender',
      },
    ],
  },
  {
    collapse: true,
    name: 'Planes',
    icon: AllOut,
    state: 'portfolioCollapse',
    views: [
      {
        path: '/new',
        name: 'Crear plan',
        mini: 'CPL',
        component: AllOut,
        layout: '/app/portfolio',
      },
    ],
  },
];
export default dashRoutes;
