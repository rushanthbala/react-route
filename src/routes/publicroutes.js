import Username from '../pages/username';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Completed from'../pages/completed';
import Failed from'../pages/failed';
import ForgetPassword from'../pages/forgetPassword';
import ConfirmationEmail from'../pages/confirmationEmail';
import ChangePassword from'../pages/changePassword';



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
        path:"/forgetpassword",
        component:ForgetPassword,
        exact:true
    },
    {
        path:"/confirmationemail",
        component:ConfirmationEmail,
        exact:true
    },
    {
        path:"/changepassword",
        component:ChangePassword,
        exact:true
    },
]

export default publicRoutes;