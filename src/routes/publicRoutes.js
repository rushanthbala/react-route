import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import UserName from '../pages/UserName'

const publicRoutes = [
  {
    path: '/',
    component: Welcome,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path:"/username",
    component:UserName,
    exact:true
},
];

export default publicRoutes;
