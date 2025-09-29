import { HomePage, TasksPage, ProfilePage, GridPage } from "./pages";
import { withNavigationWatcher } from "./contexts/navigation-hooks";
import StepperForm from "./components/Stepper/StepperForm";

const routeData = [
  {
    path: "/tasks",
    element: TasksPage,
  },
  {
    path: "/profile",
    element: ProfilePage,
  },
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/stepper-form",
    element: StepperForm,
  },
  {
    path: "/pivot-grid",
    element: GridPage,
  }
];

export const routes = routeData.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
