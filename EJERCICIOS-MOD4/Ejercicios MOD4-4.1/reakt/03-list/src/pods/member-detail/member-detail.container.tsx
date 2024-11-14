import React from "react";
import { useParams } from "react-router-dom";
import { MemberDetail } from "./member-detail.component";
import { MemberDetailEntity } from "./member-detail.vm";


interface Props{
login: string;

}


export const MemberDetailContainer: React.FC<Props> = (props) => {
  const { login } = props;
    const [member, setMember] = React.useState<MemberDetailEntity>();
    

    React.useEffect(() => {
      fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setMember);
    }, [login]);
    
    return <MemberDetail member={member} />
}