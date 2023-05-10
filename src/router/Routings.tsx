import Page404 from "../pages/Page404";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Routings = () => {
  return (
    <Routes>
      {routes.map((routeProps) => (
        <Route {...routeProps} key={routeProps.path as string} />
      ))}

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routings;
