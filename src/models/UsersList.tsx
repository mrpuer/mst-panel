import { types } from "mobx-state-tree";
import User from "./User";

const UsersList = types.model("UsersList", {
  users: types.array(User)
}).actions(self => ({
  add(item: any) {
    self.users.push(item);
  },
  remove(item: any) {
    self.users.splice(self.users.indexOf(item), 1);
  },
  fetch(json: any) {
    json.forEach((user: any) => {
      self.users.push(user);
    })
  }
  })
)

export default UsersList;