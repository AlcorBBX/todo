import { HomePage, TasksPage } from "../pages";

export const publicRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/task/:id",
    Component: TasksPage,
  },
];
