import { types } from "mobx-state-tree";
import UsersList from "./UsersList";

const RootStore = types.model("RootStore", {
  usersList: types.optional(UsersList, { users: [] }),
  isLogged: true,
  isError: false
}).actions(self => ({
  loginSuccess() {
    fetch("https://randomuser.me/api/?results=10&inc=gender,name,email,dob,phone,picture,nat")
    .then(response => response.json())
    .then(data => {
      self.usersList.fetch(data.results);
    }).catch(error => console.log(error));
    self.isLogged = true;
  },
  showError() {
    self.isError = true;
  },
  hideError() {
    self.isError = false;
  }
}))

export default RootStore;