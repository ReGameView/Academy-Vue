export const Model = {
    id: "Индификатор",
    created_at: "Дата Создания",
    updated_at: "Дата Обновления"
}

export const BaseUrl = "http://academy/api";

export const BaseMethod = {
    async fetch(url, method = 'GET') {
        return await fetch(BaseUrl + url,
            {
                method: method
            }
        ).then((response) => {
            return response.json()
        })
    }
}