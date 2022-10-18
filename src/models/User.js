import {reactive} from 'vue';
import {Model, BaseMethod} from "@/models/Model";

export let UserStructure = {
    ...Model,
    name: "Имя",
    email: "Email",
}

export let UserMethods = {
    async index() {
        let response = await BaseMethod.fetch('/user');
        User.List = [];
        if (response.Status === 'Success') {
            User.isError = false;

            response.Data.forEach((element) => {
                let structure = this._setter(element);
                User.List.push(structure);
            })
        } else {
            User.isError = true;
        }
    },

    async get(id) {
        let response = await BaseMethod.fetch('/user/' + id);
        if (response.Status === "Success") {
            User.isError = false;
            User.Current = this._setter(response.Data);
        } else {
            User.isError = true;
        }
    },

    _setter(element)
    {
        let structure = {...UserStructure};
        structure.email = element.email;
        structure.name = element.name;
        structure.id = element.id;
        structure.created_at = element.created_at;
        structure.updated_at = element.updated_at;
        return structure;
    }


}
export const CurrentUser = reactive({});

export const User = reactive({
    Structure: UserStructure,
    Methods: UserMethods,
    Current: UserStructure,
    List: [],
    isError: false
})

