import { makeAutoObservable } from "mobx";
import dataset from "./dataset";
class datasetheader {
    constructor() {
        makeAutoObservable(this)
    }
    URL = ''
    data = {}
    createRequest(name = '', quality = '', type = '', date_start = '', date_finish = '') {
        let URL = 'http://127.0.0.1:8000/metafields-filter/?'
        if (name !== '') (URL += `name=${name}&`);
        if (quality !== '') (URL += `quality=${quality}&`);
        if (type !== '') (URL += `type=${type}&`);
        if (date_start !== '') (URL += `date_start=${date_start}&`);
        if (date_finish !== '') (URL += `date_finish=${date_finish}&`);
        return URL
    }
    fetchData(formData) {
        debugger

        fetch(this.createRequest(formData['name'], formData['quality'], formData['type'], formData['date_start'], formData['date_finish']))
            .then(response => {
                debugger
                return response.json()
            })
            .then(json => {
                debugger
                dataset.dataset = json
            })
    }
}

export default new datasetheader
