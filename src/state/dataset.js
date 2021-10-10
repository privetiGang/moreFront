import { makeAutoObservable } from "mobx";

class dataset {
    constructor() {
        makeAutoObservable(this)
    }
    detail = null
    dataset = null
    fav = null
    features = { "features": [] }
    stars = []
    setFav(id) {
        fetch(`http://127.0.0.1:8000/favourite-dataset/?id=${+id}`)
            .then(response => {
                debugger
                return
            })
            .then(json => {
                debugger
                return
            })

    }
    deb() {
        debugger
    }
    datasetFetch(hm) {
        debugger
        fetch('http://127.0.0.1:8000/metafields/')
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                this.dataset = json
            })
    }
    detailFetch(hm) {
        debugger
        fetch('http://127.0.0.1:8000/adidas/')
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                this.detail = json
            })
    }
    favFetch() {
        fetch('http://127.0.0.1:8000/favourite-list/')
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                let res = []
                let favId = json.map(el => el['metafields'])
                favId = Array.from(new Set(favId))
                this.fav = favId
                if (this.dataset !== null) {

                    for (let el of this.dataset) {
                        for (let i of favId) {
                            if (el['id'] === i) {
                                res.push({
                                    name: el['name'],
                                    description: el['description']
                                })
                            }
                        }
                    }
                }
                this.fav = res
            })
    }
    fetchFeatch(data) {
        this.features = { "features": [] }
        fetch(`http://127.0.0.1:8000/save-json/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                debugger
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(json => {

                console.log(json);
            })

    }
    fetchBuy(id) {
        debugger
        fetch(`http://127.0.0.1:8000/buy-dataset/?id=${id}`)
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger

            })
    }
    fetchStared() {
        fetch(`http://127.0.0.1:8000/favourite-list/`)
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                this.stars = json.map(el => el['metafields'])
            })
    }
    getFav() {
        debugger

        // let totalFav = favId.filter(el => {

        // })
    }
}

export default new dataset
