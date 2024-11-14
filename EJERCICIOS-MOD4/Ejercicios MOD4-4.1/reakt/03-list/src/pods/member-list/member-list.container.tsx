import React from "react";
import { Member } from "./member-list.vm";
import { MemberList } from "./member-list.component";
import { getMembers } from "./api/api";
import { mapMemberListToVM } from "./member-list.mappers";


interface Props {
  onSelect: (member: string) => void;
}
export const MemberListContainer: React.FC<Props> = (props) => {
  const {onSelect} = props;
    const [members, setMembers] = React.useState<Member[]>([]);

    React.useEffect(() => {
      getMembers("lemoncode")
      .then(mapMemberListToVM)
      .then(setMembers);
    }, []);
    
    return <MemberList members={members} onSelect={onSelect} />
}