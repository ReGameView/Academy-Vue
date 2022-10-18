import { reactive } from "vue";
import { Model } from "@/models/Model";

export const ModelNote = {
    ... Model,
    title: '',
    description: '',
}

export let seederNotes = [
    {
        id: 0,
        title: "Привет",
        description: "Привет описание"
    },
    {
        id: 1,
        title: "QWERTY",
        description: "qwerty"
    },
    {
        id: 2,
        title: "asd",
        description: "gfsgfsdg"
    }
]

export const notes = reactive({
    ModelNote,

    LAST_ID: 5,

    // PRIVATE PROPERTIES
    _data: [ ... seederNotes ],

    async create(new_note = ModelNote)
    {
        // await fetch(`http://localhost:8080/api/v2/${this.ModelNotes._table}/create`, {
        //     method: "POST",
        //     body: {
        //         title: new_note.title,
        //         description: new_note.description,
        //     }
        // })
        new_note.id = this.LAST_ID
        this.LAST_ID++
        this._data.push(new_note);
    },

    async delete(id = -1) {
        // await fetch(`http://localhost:8080/api/v2/${this.ModelNotes._table}/delete`, {
        //     method: "POST",
        //     body: {
        //         id: id
        //     }
        // })
        /** @var ModelNote element */
        for(let i = 0; i <= this._data.length; i++) {
            if (this._data[i].id === id) {
                this._data.splice(i, 1);
                break;
            }
        }
    }
})