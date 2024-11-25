import React from "react";
import { Member } from "./member-list.vm";
import { MemberList } from "./member-list.component";
import { getMembers } from "./member-list.repository";
import { mapMemberListToVM } from "./member-list.mappers";
import { OrganizationContext } from "@/core/providers/organization/organization.context";

interface Props {
  onSelect: (member: string) => void;
}
export const MemberListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [members, setMembers] = React.useState<Member[]>([]);
  const { organization } = React.useContext(OrganizationContext);

  const handleSearch = () => {
    getMembers(organization)
    .then(setMembers)
    .catch(() => {
      setMembers([]);
    });
  };

  React.useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <MemberList members={members} onSelect={onSelect} handleSearch={handleSearch} />
    </div>
  );
};

