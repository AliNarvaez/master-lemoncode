import { Member } from "./api.model";

export const getMembers = (orgs: string): Promise<Member[]> => {
    return fetch(`https://api.github.com/orgs/${orgs}/members`)
    .then((response) => response.json()
    );
}


// export const getMembers = (orgs: string): Promise<Member[]> => {
   // return fetch(`https://rickandmortyapi.com`)
   // .then((response) => response.json()
  //  );
//}

//mv de member detail y despues member detail