import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { MemberDetailScene, MemberListScene } from "@/scenes";
import { SwitchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SwitchRoutes.root} element={<MemberListScene />} />
        <Route path={SwitchRoutes.detail} element={<MemberDetailScene />} />
        <Route path="*" element={<div>404 Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
