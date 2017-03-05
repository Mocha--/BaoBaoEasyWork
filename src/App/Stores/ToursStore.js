import { observable, computed } from 'mobx';

export default class ToursStore {
    @observable tours = [];

    append(...tours) {
        this.tours.push(...tours);
    }

    get tours() {
        return this.tours;
    }
}

