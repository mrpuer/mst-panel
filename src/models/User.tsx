import { types } from "mobx-state-tree";
import Name from "./Name";
import Pic from "./Pic";

const User = types.model("User", {
  name: types.optional(Name, {first: "FName", last: "LName"}),
  gender: types.optional(types.string, ""),
  email: types.string,
  dob: types.string,
  phone: types.string,
  picture: types.optional(Pic, {}),
  nat: types.string,
  is_active: false,
  show: false
}).views(self => ({
  status() {
    return self.is_active ? "active" : "inactive";
  }
})).actions(self => ({
  markActive() {
    self.is_active = !self.is_active;
  },
  markShow() {
    self.show = !self.show;
  },
  edit(newData: any) {
    self = newData;
  }
}))

export default User;