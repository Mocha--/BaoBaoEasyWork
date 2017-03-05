import { observable, } from 'mobx';
import { observer, inject } from 'mobx-react';
import React from 'react';
import TopHeader from './Widgets/TopHeader/TopHeader.js';
import TourList from './Widgets/TourList/TourList.js';
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

    componentDidMount() {
        toursApiService
            .getTourList()
            .then((tours) => {
                this.hasFetchedTours = true;
                this.props.toursStore.append(...tours);
                this.tours = this.props.toursStore.tours;
            })
    }

    topHeaderSearchChangeHander(searchText) {
        const { toursStore } = this.props;
        this.tours = toursStore.tours.filter((tour) => {
            return tour.id.toLowerCase().includes(searchText.toLowerCase());
        });
    }

    topHeaderBackClickHander() {
        const { toursStore } = this.props;
        this.tours = toursStore.tours;
    }

    render() {
        return (
            <div className="app-component">
                <TopHeader onSearchChange={::this.topHeaderSearchChangeHander}
                           onBackIconClick={::this.topHeaderBackClickHander}>
                </TopHeader>
                <main>
                    <Spinner shouldShow={!this.hasFetchedTours}></Spinner>
                    <TourList tours={this.tours}></TourList>
                </main>
            </div>
        )
    }
}
