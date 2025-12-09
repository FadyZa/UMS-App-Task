import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authlayout from "./layouts/Authlayout/Authlayout";
import Login from "./pages/Login/Login";
import Mainlayout from "./layouts/Mainlayout/Mainlayout";
import Userlist from "./pages/Userlist/Userlist";
import Userdata from "./pages/Userdata/Userdata";
import Notfound from "./pages/Errors-pages/Notfound";
import { Slide, ToastContainer } from "react-toastify";
import UserProvider from "./context/UserProvider";
import ProtectedRoute from "./protectedRoutes/ProtectedRoutes";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Authlayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
      ],
    },

    {
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Userlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "/userslist",
          element: (
            <ProtectedRoute>
              <Userlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "/userslist/edit/:userId",
          element: (
            <ProtectedRoute requiredRole="admin">
              <Userdata key="edit" mode="edit" />
            </ProtectedRoute>
          ),
        },
        {
          path: "/userdata",
          element: (
            <ProtectedRoute requiredRole="admin">
              <Userdata key="add" mode="add" />
            </ProtectedRoute>
          ),
        },
        {
          path: "/userprofile",
          element: (
            <ProtectedRoute>
              <Userdata key="profile" mode="profile" />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <>
      <UserProvider>
        <RouterProvider router={routers}></RouterProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
      </UserProvider>
    </>
  );
}

export default App;
