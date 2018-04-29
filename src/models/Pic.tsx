import { types } from "mobx-state-tree";

const Pic = types.model("Pic", {
  large: types.optional(types.string, "https://www.oblgazeta.ru/static/3/img/no-avatar.png"),
  medium: types.optional(types.string, "https://www.oblgazeta.ru/static/3/img/no-avatar.png"),
  thumbnail: types.optional(types.string, "https://www.oblgazeta.ru/static/3/img/no-avatar.png")
})

export default Pic;