import { types } from "mobx-state-tree";

const Name = types.model("Name", {
  title: types.optional(types.string, ""),
  first: types.string,
  last: types.string
})

export default Name;