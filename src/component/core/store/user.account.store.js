import {create} from "zustand";

const userLoginStore = create((UserAccount) => ({
    loginDetail: '',
    addLoginDetail:(details) => UserAccount((state) => ({loginDetail:details})),
}))

export default userLoginStore