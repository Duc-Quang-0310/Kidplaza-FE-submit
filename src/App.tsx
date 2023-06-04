import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";

import { ROUTES, ROUTE_PATH } from "./constants/Route.const";
import ErrorBoundary from "./components/ErrBoundary/ErrBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTE_PATH.home}
            element={<Navigate to={ROUTE_PATH.signIn} />}
          />
          {ROUTES.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
