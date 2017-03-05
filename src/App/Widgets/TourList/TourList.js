import React from 'react';
import './TourList.styl';

export default class TourList extends React.Component {
    //static propTypes = {
        //tours: React.PropTypes.array
    //}

    //static defaultProps = {
        //tours: []
    //}

    render() {
        const { tours } = this.props;
        return (
            <ul className="tour-list">
                {tours.map((tour) => {
                    const { id, guide, touristNumber } = tour;
                    return (
                        <li key={id}>
                            <span className="tourist-number">{touristNumber}</span>
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
