/* eslint-disable react/prop-types */
import { lazy, Suspense } from "react";

import SearchPage from "./pages/Search"; // import estático
import Page404 from "./pages/404";

import { Router } from "./components/Router";
import { Route } from "./components/Route";

const LazyAboutPage = lazy(() => import("./pages/About")); // import dinámico
const LazyHomePage = lazy(() => import("./pages/Home"));

const routes = [
  {
    path: "/:lang/about",
    Component: LazyAboutPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
