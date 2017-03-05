import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import './TourDetail.styl';

@observer
export default class TourDetail extends React.Component {
    static propTypes = {
        tour: React.PropTypes.object.isRequired,
        isActive: React.PropTypes.bool.isRequired,
        onCloseIconClick: React.PropTypes.func.isRequired
    }

    static defaultProps = {}

    @observable isArriveTabAcitve = true;

    closeIconClickHander() {
        this.props.onCloseIconClick();
    }

    arriveTabClickHandler() {
        this.isArriveTabAcitve = true;
    }

    depatureTabClickHander() {
        this.isArriveTabAcitve = false;
    }

    render() {
        const { tour, isActive } = this.props;
        const { id, guide, phone, touristNumber, operator, arriveDate, arriveCity, arriveFlightTime, arriveFlightNum, depatureDate, depatureCity, depatureFlightTime, depatureFlightNum } = tour;
        return (
            <article className={classNames('tour-detail', {active: isActive})}>
                <header>
                    <i className="zmdi zmdi-close" onClick={::this.closeIconClickHander}></i>
                </header>
                <h3 className="guide">{guide}</h3>
                <h5 className="phone">{phone}</h5>
                <h5 className="operator">{operator}</h5>
                <h1 className="tour-id">
                    {id}
                </h1>
                <section className="tabs">
                    <button type="button" className="arrive" onClick={::this.arriveTabClickHandler}>Arrive</button>
                    <button type="button" className="depature" onClick={::this.depatureTabClickHander}>Depature</button>
                    <hr className={classNames({left: this.isArriveTabAcitve, right: !this.isArriveTabAcitve})}/>
                </section>
                <ul className="tab-contents">
                    <li className={classNames('arrive', {active: this.isArriveTabAcitve})}>
                        <p>
                            <strong>Flight Number</strong><span>{arriveFlightNum}</span>
                        </p>
                        <p>
                            <strong>Flight Date</strong><span>{arriveDate}</span>
                        </p>
                        <p>
                            <strong>Flight Time</strong><span>{arriveFlightTime}</span>
                        </p>
                        <p>
                            <strong>City</strong><span>{arriveCity}</span>
                        </p>
                    </li>
                    <li className={classNames('depature', {active: !this.isArriveTabAcitve})}>
                        <p>
                            <strong>Flight Number</strong><span>{depatureFlightNum}</span>
                        </p>
                        <p>
                            <strong>Flight Date</strong><span>{depatureDate}</span>
                        </p>
                        <p>
                            <strong>Flight Time</strong><span>{depatureFlightTime}</span>
                        </p>
                        <p>
                            <strong>City</strong><span>{depatureCity}</span>
                        </p>
                    </li>
                </ul>
            </article>
        )
    }
}
