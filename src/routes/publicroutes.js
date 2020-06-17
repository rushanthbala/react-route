import Username from '../pages/username';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Completed from'../pages/completed';
import Failed from'../pages/failed';
import ForgetPassword from'../pages/forgetpassword';


const publicRoutes = [
    {
        path:"/username",
        component:Username,
        exact:true
    },
    {
        path:"/login",
        component:Login,
        exact:true
    },
    {
        path:"/profile",
        component:Profile,
        exact:true
    },
     {
        path:"/failed",
        component:Failed,
        exact:true
    },
     {
        path:"/completed",
        component:Completed,
        exact:true
    },
    {
        path:"/ForgetPassword",
        component:ForgetPassword,
        exact:true
    },
]

export default publicRoutes;