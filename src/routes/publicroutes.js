import Username from '../pages/username';
import Login from '../pages/login';
import Profile from '../pages/profile';
import Completed from'../pages/completed'

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
    //  {
    //     path:"/changeprofile",
    //     component:ChangeProfile,
    //     exact:true
    // },
     {
        path:"/completed",
        component:Completed,
        exact:true
    },
]

export default publicRoutes;