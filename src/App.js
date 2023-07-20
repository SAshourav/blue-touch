import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/User/Home/Home';
import About from './Component/User/About/About';
import Facebook from './Component/User/Services/Facebook';
import Instagram from './Component/User/Services/Instagram/Instagram';
import Linkedin from './Component/User/Services/LinkedIn/Linkedin';
import AMain from './Layout/AMain'
import AdminHome from './Component/Admin/AdminHome';
import Ongoing from './Component/Admin/Pages/Ongoing/Ongoing';
import Twitter from './Component/User/Services/Twitter/Twitter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/Facebook',
        element: <Facebook></Facebook>
      },
      {
        path: '/Instagram',
        element: <Instagram></Instagram>
      },
      {
        path: '/Twitter',
        element: <Twitter></Twitter>
      },
      {
        path: '/LinkedIn',
        element: <Linkedin></Linkedin>
      },
    ]
  },
  {
    path: '/admin',
    element: <AMain></AMain>,
    children: [
      {
        path: '/admin',
        element: <AdminHome></AdminHome>
      },
      {
        path: '/admin/ongoing',
        element: <Ongoing></Ongoing>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
