import { makeAutoObservable } from "mobx";

class signin {
    constructor() {
        makeAutoObservable(this)
    }
    formData = {}
    fetchData(hm) {
        debugger
        fetch("http://127.0.0.1:8000/api/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.formData)
        })
            .then(response => {
                return response.json()
            })
            .then(json => {
                debugger
            })
    }
}

export default new signin
