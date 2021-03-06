import { observable, } from 'mobx';
import { observer, inject } from 'mobx-react';
import { groupBy } from 'lodash';
import moment from 'moment';
import React from 'react';
import TopHeader from './Widgets/TopHeader/TopHeader.js';
import TourList from './Widgets/TourList/TourList.js';
import TourDetail from './Widgets/TourDetail/TourDetail.js';
import Spinner from './Widgets/Spinner/Spinner.js';
import toursApiService from './Services/ToursApiService.js'
import './App.styl';

@inject('toursStore')
@observer
export default class App extends React.Component {
    static propTypes = {
        toursStore: React.PropTypes.object.isRequired
    }

    static defaultProps = {}

    @observable hasFetchedTours = false;
    @observable tours = [];
    @observable tour = {};
    @observable isTourDetailAcitve = false;

    todayHeader = null;
    setTodayHeader = elm => this.todayHeader = elm;

    componentDidMount() {
        toursApiService
            .getTourList()
            .then((tours) => {
                this.hasFetchedTours = true;
                this.props.toursStore.append(...tours);
                this.tours = this.props.toursStore.tours;
                this.todayHeader.scrollIntoView();
            });
    }

    topHeaderSearchChangeHander(searchText) {
        const { toursStore } = this.props;
        this.tours = toursStore.tours.filter(tour =>
            tour.id.toLowerCase().includes(searchText.toLowerCase()) || tour.guide.toLowerCase().includes(searchText.toLowerCase()));
    }

    topHeaderBackClickHander() {
        const { toursStore } = this.props;
        this.tours = toursStore.tours;
    }

    tourLiClickHander(tour) {
        this.tour = tour;
        this.isTourDetailAcitve = true;
    }

    tourDetailCloseIconClickHandler() {
        this.isTourDetailAcitve = false;
    }

    render() {
        const groupedByArrivedate = groupBy(this.tours, 'arriveDate');
        return (
            <div className="app-component">
                <TopHeader onSearchChange={::this.topHeaderSearchChangeHander}
                           onBackIconClick={::this.topHeaderBackClickHander}>
                </TopHeader>
                <main>
                    <Spinner shouldShow={!this.hasFetchedTours}></Spinner>
                    <article className="all-tours">
                        {Object.keys(groupedByArrivedate).map((arriveDate) => {
                            return (
                                <section key={arriveDate}>
                                    <header ref={moment().isSame(arriveDate, 'day') ? this.setTodayHeader : null}>
                                        <span>{moment(arriveDate, 'YYYY-MM-DD').format('DD/MM/YYYY ddd')}</span>
                                        <span className="today">{moment().isSame(arriveDate, 'day') ? '--Tdoay' : null}</span>
                                    </header>
                                    <TourList tours={groupedByArrivedate[arriveDate]}
                                              onTourClick={::this.tourLiClickHander}>
                                    </TourList>
                                </section>
                            );
                        })}
                    </article>
                </main>
                <TourDetail tour={this.tour}
                            isActive={this.isTourDetailAcitve}
                            onCloseIconClick={::this.tourDetailCloseIconClickHandler}>
                </TourDetail>
            </div>
        )
    }
}
