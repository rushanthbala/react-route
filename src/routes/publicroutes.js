import Username from '../pages/username';
import Login from '../pages/login';

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
    }
]

export default publicRoutes;