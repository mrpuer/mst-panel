import { types } from "mobx-state-tree";

const Admin = types.model("Admin", {
  login: types.string,
  password: types.string
})

export default Admin;