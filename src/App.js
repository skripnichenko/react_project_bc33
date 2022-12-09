import React, { lazy, Suspense, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { CitiesApi } from "./API/api";
import { useDispatch } from "react-redux";
import { getCities } from "./redux/SliceCity/operationCity";

const UniversityPage = lazy(() => import("./pages/UniversityPage"));
const FacultiesPage = lazy(() => import("./pages/FacultiesPage"));
const SingleFaculty = lazy(() => import("./pages/SingleFaculty"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Suspense>
        <Routes>
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/faculties" element={<FacultiesPage />} />
          <Route path="/faculties/:id" element={<SingleFaculty />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
