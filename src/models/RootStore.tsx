import { types } from "mobx-state-tree";
import UsersList from "./UsersList";
import Admin from "./Admin";

const RootStore = types.model("RootStore", {
  admin: types.optional(Admin, {login: process.env.ADMIN_LOGIN, password: process.env.ADMIN_PASSWORD}),
  usersList: types.optional(UsersList, { users: [] }),
  isLogged: false
})

export default RootStore;