import { reactive } from 'vue'
import { User } from "@/user";


export const store = reactive({
  shadowBoxHidden: true,
  Notes: [
    {
      title: "Строка",
      description: "Описание",
      user: User
    }
  ],
  User: {

  }
})
