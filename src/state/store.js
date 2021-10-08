import { makeAutoObservable } from "mobx";

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    formData = {}
    items = null
    type = null
    fetchItems() {
        if (this.type === 'get') {
            this.ifGet()
        }
        if (this.type === 'post') {
            this.ifPost()
        }
        if (this.type === 'delete') {
            this.ifDel()
        }
    }
    ifGet() {
        fetch('http://127.0.0.1:8000/api/create')
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                this.items = json
                console.log(json);
            })
    }
    ifPost() {
        let posty = {
            key: 1,
            value: "newnewnew"
        }
        fetch(`http://127.0.0.1:8000/api/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(posty)
        })
            .then(response => {
                debugger
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(json => {
                debugger
                this.items = json
                console.log(json);
            })

    }
    ifDel() {
        debugger
        let id = this.formData['key']
        console.log(this.formData);
        console.log(id);
        fetch(`http://127.0.0.1:8000/api/delete/1`, {
            method: "DELETE"
        })
            .then(response => {
                debugger
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(json => {
                debugger
                this.items = json
                console.log(json);
            })
    }
}

export default new MainStore
