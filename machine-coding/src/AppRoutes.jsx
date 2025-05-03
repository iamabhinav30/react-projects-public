import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/common/Loading";

// Lazy load pages and components
const Home = lazy(() => import("./Pages/Home"));
const Easy = lazy(() => import("./Pages/Easy"));
const Medium = lazy(() => import("./Pages/Medium"));
const Hard = lazy(() => import("./Pages/Hard"));
const ProblemRenderer = lazy(() => import("./components/ProblemRenderer"));

export const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/easy' element={<Easy />}>
        <Route path=":problemId" element={<ProblemRenderer />} />
      </Route>

      <Route path='/medium' element={<Medium />}>
        <Route path=":problemId" element={<ProblemRenderer />} />
      </Route>

      <Route path='/hard' element={<Hard />}>
        <Route path=":problemId" element={<ProblemRenderer />} />
      </Route>
    </Routes>
  </Suspense>
);
