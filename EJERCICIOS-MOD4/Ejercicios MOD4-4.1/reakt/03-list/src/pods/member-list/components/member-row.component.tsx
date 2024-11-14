import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "../member-list.vm";

interface Props {
    member: Member;
    onClick: () => void;
}

export const MemberRow: React.FC<Props> = (props) => {
    const {member, onClick} = props;
    return (
    <>
    <img src={member.avatar_url} alt="" />
    <div>{member.id}</div>
    <div>
      <div onClick={onClick}>{member.login}</div>
    </div>
    </>
    );
}

//  HACER LO MISMO CON EL MEMBER DETAIL
// NO OLVIDAR