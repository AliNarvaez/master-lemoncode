import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "../member-list.vm";
import { Button } from "@mui/material";

interface Props {
    member: Member;
    onClick: () => void;
}

export const MemberRow: React.FC<Props> = (props) => {
    const {member, onClick} = props;
    return (
    <>
    <img src={member.avatarUrl} alt="" />
    <div>{member.id}</div>
    <div>
      <Button variant="outlined" onClick={onClick}>{member.login}</Button>
    </div>
    </>
    );
}

//  HACER LO MISMO CON EL MEMBER DETAIL
// NO OLVIDAR