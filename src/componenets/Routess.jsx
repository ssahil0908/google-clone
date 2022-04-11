import React from "react";
import { Routes, Navigate, Route, Router } from 'react-router-dom';
import { Results } from "./Results";
export const Routess = () => {
  return (

    <div className="p-4">

      <Routes>

        <Route path="/" Navigate to="/search" replace />


        <Route path="/search" caseSensitive={false} element={<Results />} />
        <Route path="/image" caseSensitive={false} element={<Results />} />
        <Route path="/news" caseSensitive={false} element={<Results />} />
        <Route path="/videos" caseSensitive={false} element={<Results />} />

      </Routes>


    </div>
  );
}