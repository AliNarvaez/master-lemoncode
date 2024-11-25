import React, { useContext } from "react";
import { Member } from "./member-list.vm";
import { MemberListHeader, MemberRow } from "./components";
import { OrganizationContext } from "@/core/providers/organization/organization.context";
import { Button, TextField } from "@mui/material";


interface Props {
  members: Member[];
  onSelect: (member: string) => void;
  handleSearch: () => void;
}

export const MemberList: React.FC<Props> = (props) => {
  const { members, onSelect, handleSearch } = props;
  const { organization, setOrganization } = React.useContext(OrganizationContext);

  return (
    <>
      <div className="search-container">
        <TextField variant="outlined"
          className="search-container-input"
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Introduce una organización"/>
        <Button onClick={handleSearch} variant="contained" size="large">
          Search
        </Button>
      </div>

      {members.length === 0 ? (
        <div>No existen miembros en Github para esta organización.</div>
      ) : (
        <div className="list-user-list-container">
          <MemberListHeader />
          {members.map((member) => (
            <MemberRow key={member.id} member={member} onClick={() => onSelect(member.login)} />
          ))}
        </div>
      )}
    </>
  );
};
