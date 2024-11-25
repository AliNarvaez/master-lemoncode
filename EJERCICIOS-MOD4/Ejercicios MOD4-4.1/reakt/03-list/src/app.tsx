import React from "react";
import { OrganizationProvider } from "./core/providers/organization/organization.provider";
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

  return <MembersContext.Provider value={{ members, clear }}>{children}</MembersContext.Provider>;
};

export const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>OrgiFinder</h1>
      <h2 className="page-subtitle">Your favourite Github organization members finder</h2>

      <UserProfileProvider>
        <MembersProvider>
          <OrganizationProvider>
            <AppRouter />
          </OrganizationProvider>
        </MembersProvider>
      </UserProfileProvider>
    </>
  );
};
