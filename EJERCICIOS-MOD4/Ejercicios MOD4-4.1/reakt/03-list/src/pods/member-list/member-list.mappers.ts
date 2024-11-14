import * as am from "./api/api.model";
import * as vm from "./member-list.vm";

export const mapMemberListToVM = (data: am.Member[]): vm.Member[] =>
  data.map((item) => mapMemberToVM(item));

const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
});
