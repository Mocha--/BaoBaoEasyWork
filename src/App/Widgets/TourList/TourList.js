import React from 'react';
import './TourList.styl';

const EXTENAL_LINK_PREFIX = 'http://nzsystem.yinzisoft.com/aus/order/orderinfo.asp?orderid=';

export default class TourList extends React.Component {
    static propTypes = {
        //tours: React.PropTypes.array,
        onTourClick: React.PropTypes.func
    }

    //static defaultProps = {
        //tours: []
    //}

    tourClickHander(tour, evt) {
        this.props.onTourClick(tour);
    }

    externalLinkClickHander(evt) {
        evt.stopPropagation();
    }

    render() {
        const { tours } = this.props;
        return (
            <ul className="tour-list">
                {tours.map((tour) => {
                    const { id, guide, touristNumber } = tour;
                    return (
                        <li key={id} onClick={this.tourClickHander.bind(this, tour)}>
                            <a className="tourist-number"
                               onClick={::this.externalLinkClickHander}
                               href={`${EXTENAL_LINK_PREFIX}${id}`}
                               target="_blank">
                               {touristNumber}
                            </a>
                            <section className="tour-info">
                                <p className="tour-id">{id}</p>
                                <p className="tour-guide">{guide}</p>
                            </section>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
