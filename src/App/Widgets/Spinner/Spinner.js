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
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
        )
    }
}
