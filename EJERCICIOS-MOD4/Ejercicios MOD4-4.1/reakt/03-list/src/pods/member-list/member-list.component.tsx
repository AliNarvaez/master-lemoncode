import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "./member-list.vm";
import { MemberListHeader, MemberRow } from "./components";
interface Props {
  members: Member[];
  onSelect: (member: string) => void;
}

export const MemberList: React.FC<Props> = (props) => {
  const { members, onSelect } = props;
  const [filter, setFilter] = React.useState("");

  return (
    <>
      {/* <input
        // ref={inputRef}
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      /> */}
      <div className="list-user-list-container">
        <MemberListHeader />
        {members.map((member) => (
          <MemberRow key={member.id} member={member} onClick={() => onSelect(member.login)} />
        ))}
      </div>
    </>
  );
};
