import { reactive } from "vue";

let login = "default_login";
let full_name = "default_full_name";

export const User = reactive({
    login: login,
    full_name: full_name
})
