import React from 'react';
import './Spinner.styl';
import classNames from 'classnames';

export default class Spinner extends React.Component {
    static propTypes = {
        shouldShow: React.PropTypes.bool
    }

    static defaultProps = {
        shouldShow: true
    }

    render() {
        const { shouldShow } = this.props;
        return (
            <div className={classNames('spinner', {'react-hide': !shouldShow})}>
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>
        )
    }
}
