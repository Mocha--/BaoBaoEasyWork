import axios from 'axios';
import { toursEndPoint } from '../Constants/Api.js';

const postProcessor = {
    getTourList(tours) {
        return tours.map((tour) => {
            const {
                operator,
                phone,
                arriveDate,
                arriveFlightTime,
                arriveFlightNum,
                arriveCity,
                depatureDate,
                depatureFlightTime,
                depatureFlightNum,
                depatureCity,
                tourGuide: guide,
                groupNumber: id,
                touristNum: touristNumber
            } = tour;
            return { operator, phone, arriveDate, arriveFlightTime, arriveFlightNum, arriveCity, depatureDate, depatureFlightTime, depatureFlightNum, depatureCity, guide, id, touristNumber };
        });
    }
}

export default {
    getTourList() {
        return axios
            .request({
                url: toursEndPoint,
                method: 'GET'
            })
            .then(({ data }) => {
                return postProcessor.getTourList(data);
            });
    }
}
