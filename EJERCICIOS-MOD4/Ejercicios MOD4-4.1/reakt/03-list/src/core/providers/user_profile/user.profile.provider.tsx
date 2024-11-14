import { LoginScene } from "@/scenes";
import React from "react";
import { UserProfileContext } from "./user-profile.context";

export const UserProfileProvider: React.FC<React.PropsWithChildren> = ({ 
    children, 
}) => {
  const [username, setUsername] = React.useState<string>("");
  
  // //////////////esto lo quiero? (abajo) el bueno estaria en la sesion 5 los dos ultimos 10-15 min

//   React.useEffect(() => {
//     fetch("/me")
//       .then(() => "Víctor")
//       .then(setUsername);
//   }, []);
  
  return (
    <UserProfileContext.Provider value={{ username, setUsername }}>
      {username === null ? (
        <>Loading</>
      ) : username ? (
        <>{children}</>
      ) : (
        <LoginScene />
      )}
    </UserProfileContext.Provider>
  );
};
