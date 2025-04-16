import "./App.css";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Chrome from "./Pages/Chrome";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Login from "./Pages/Login";
import ContactLayout from "./Layout/ContactLayout";
import Info from "./Components/Info";
import Form from "./Components/Form";
import NotFound from "./Pages/NotFound";
import UserLayout from "./Layout/UserLayout";
import Users from "./Pages/users";
import { userLoader, userSingleLoader } from "./utils/userloader";
import User from "./Components/User";
import ErrorPage from "./Components/Errorpage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

        <Route index element={<Home />} />


        <Route path="product" element={<Product />} />


        <Route path="about" element={<About />} />

        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<Info />} />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="chrome" element={<Chrome />} />
        <Route path="login" element={<Login />} />


        <Route path="users" element={<UserLayout />} errorElement={<ErrorPage />}>
          <Route index element={<Users />} loader={userLoader} />
          <Route path=":id" element={<User />} loader={userSingleLoader} />
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
