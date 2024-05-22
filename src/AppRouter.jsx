import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* list the steps to create another route 
  1. Create the route and export it
  2. Lazy load the the import file inside the AppRouter
  3. setup the route for the product
  */}
        <Route path="/" element={<Home />} />
        {/* children here are nested routes */}
        <Route path="/repo/:repo_name" element={<About />} />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
