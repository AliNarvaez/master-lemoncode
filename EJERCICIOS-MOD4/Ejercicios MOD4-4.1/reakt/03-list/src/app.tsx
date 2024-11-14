import React from "react";
import { UserProfileProvider } from "./core/providers/user_profile/user.profile.provider";
import { AppRouter } from "./router/app.router";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

interface MembersContextModel {
  members: MemberEntity[];
  clear: () => void;
}

export const MembersContext = React.createContext<MembersContextModel>(null);

const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMembers);
  }, []);

  const clear = () => {
    setMembers([]);
  };

  // const loadMembers = (org: string) => {}; para filtrar por mas org SESION 4 2:30

  return (
    <MembersContext.Provider value={{ members, clear }}>
      {children}
    </MembersContext.Provider>
  );
};

export const App = () => {
  return (
    <>
      <h2 style={{ backgroundColor: "darkorange" }}>Lemoncoders Members</h2>

      <UserProfileProvider>
          <MembersProvider>
            <AppRouter />
          </MembersProvider>
      </UserProfileProvider>
    </>
  );
};
