import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryBrowserRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./redux/config";

const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const HomeTemplate = lazy(
  () => import("./templates/HomeTemplate/HomeTemplate")
);
const Project = lazy(() => import("./pages/Home/Project"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Users = lazy(() => import("./pages/Users/Users"));
const Task = lazy(() => import("./pages/Task/Task"));
const Comment = lazy(() => import("./pages/Comment/Comment"));
const AddPropject = lazy(() => import("./pages/Project/AddProject"));
const ProjectDetail = lazy(() => import("./pages/Project/ProjectDetail"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const history: any = createBrowserHistory();

root.render(
  <Provider store={store}>
    <HistoryBrowserRouter history={history}>
      <Suspense>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Project />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="add-project" element={<AddPropject />}></Route>
            <Route path="project-detail" element={<ProjectDetail />}></Route>
            <Route path="user" element={<Users />}></Route>
            <Route path="task" element={<Task />}></Route>
            <Route path="comment" element={<Comment />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </HistoryBrowserRouter>
  </Provider>
);
