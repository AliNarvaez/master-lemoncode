import { UserProfileContext } from "@/core/providers/user_profile/user-profile.context";
import React from "react";
import "./app.layout.css";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { username } = React.useContext(UserProfileContext);

  return (
    <div className="layout-app-container">
      <div className="layout-app-header">Hi {username}</div>
      {children}
    </div>
  );
};
