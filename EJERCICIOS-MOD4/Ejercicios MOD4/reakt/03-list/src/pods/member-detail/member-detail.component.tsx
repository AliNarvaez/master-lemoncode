import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MemberDetailEntity } from "./member-detail.vm";

interface Props {
        member: MemberDetailEntity;
    }

export const MemberDetail: React.FC<Props> = (props) => {
    const { member } = props;
     const navigate = useNavigate();
     console.log(member)

    return <>
          {member ? (
        <>
          <img src={member.avatar_url} alt="" />
          <h3>{member.login}</h3>
          <h4>ID: {member.id}</h4>
          <h4>Company: {member.company}</h4>
          <h4>{member.bio}</h4>
        </>
      ) : (
        <div>loading...</div>
      )}

      <Button variant="outlined"
        onClick={() => {
          navigate(-1);
        }}>
        Back
        </Button>

    </>;
}