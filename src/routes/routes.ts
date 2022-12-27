import { HomePage, TasksPage } from "../pages";
import { NotFound } from "../pages/404";

export const publicRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/task/:id",
    Component: TasksPage,
  },
  {
    path: "/404/not-found",
    Component: NotFound,
  },
];
