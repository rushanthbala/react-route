import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import UserName from '../pages/UserName'
import ImageUpload from '../pages/ImageUpload'
import UserNameVadidate from '../pages/Test'
import Moment from '../pages/Moment'

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
},{
  path:"/image-upload",
  component:ImageUpload,
  exact:true
},{
  path:"/lodash",
  component:UserNameVadidate,
  exact:true
},{
  path:"/moment",
  component:Moment,
  exact:true
},
];

export default publicRoutes;
