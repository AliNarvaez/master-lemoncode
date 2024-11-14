import React from "react";
import { AppLayout } from "@/layouts";
import { MemberListContainer } from "@/pods/member-list/member-list.container";
import { MemberDetailContainer } from "@/pods/member-detail";
//import {useDebounce} from "use-debounce";

export const MemberListScene: React.FC = () => {
    // ESTO SE QUITA SI QUIERES
    const [selectedLogin, setSelectedLogin] = React.useState<string>();
// HASTA AQUI (CREO)

  const handleSelect = (login: string) => {
    setSelectedLogin(login);

  };


  return (
    <AppLayout>
      <div style={{ display: "flex" }}>
        <div>
          <MemberListContainer onSelect={handleSelect} />
        </div>
       ESTOSEQUITA SI QUIERES <div>{selectedLogin && <MemberDetailContainer login={selectedLogin} />}</div>
      </div>
    </AppLayout>
  );
};

//   const { members, clear } = React.useContext(MembersContext);

//   const [filter, setFilter] = React.useState(""); 
//   const [members, setMembers] = React.useState<MemberEntity[]>([]);
//   const [debouncedFilter] = useDebounce(filter, 900);
//   //const inputRef = React.useRef<HTMLInputElement>();

//   //inputRef.current?.focus();

//   React.useEffect(() => {
//     //setMembers([{ id: "2", login: "a/b", avatar_url: "" }]);
//     fetch(`https://api.github.com/orgs/lemoncode/members`)
//       .then((response) => response.json())
//       .then(setMembers);
//   }, [debouncedFilter]);

//   return (
//     <>
//       <input
//      // ref={inputRef}
//       value={filter}
//       onChange={(e) => {
//         setFilter(e.target.value);
//       }}
//       />
//       {/* TODO COMPONETIZAR */}
//       <h2>Hello from List page</h2>+{" "}
//       {/* MEMBER TABLE */}
//       <div className="list-user-list-container">
//         {/* MEMBER HEADER */}
//         <span className="list-header">Avatar</span>
//         <span className="list-header">Id</span>
//         <span className="list-header">Name</span>
//         {/* FIN MEMBER HEADER */}
//         {members.map((member) => (
//           <React.Fragment key={member.id}>
//             {/* // CADA UNA DE ESTAS FILAS ES UN MEMBER ROW */}
//             <img src={member.avatar_url} alt="User's avatar" />
//             <span>{member.id}</span>
//             <Link to={generatePath("/detail/:login",{login: member.login})}>{member.login}</Link>
//           </React.Fragment>
//         ))}
//       </div>
//       {/* FIN MEMBER TABLE */}
//       <Link to="/detail">Navigate to detail page</Link>
//     </>
//   );
// };
