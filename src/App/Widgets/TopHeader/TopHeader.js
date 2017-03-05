import React from 'react';
import classNames from 'classnames';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import './TopHeader.styl';

@observer
export default class TopHeader extends React.Component {
    static propTypes = {
        onSearchChange: React.PropTypes.func.isRequired,
        onBackIconClick: React.PropTypes.func.isRequired
    }

    static defaultProps = {}

    @observable isSearchContainerActive = false;
    @observable searchText = '';

    searchIconClickHandler() {
        this.isSearchContainerActive = true;
    }

    backIconClickHander() {
        this.isSearchContainerActive = false;
        this.searchText = '';
        this.props.onBackIconClick();
    }

    searchChangeHandler(evt) {
        this.searchText = evt.target.value;
        this.props.onSearchChange(this.searchText);
    }

    render() {
        return (
            <header className="top-header">
                <section className="icons-container">
                    <i className={classNames('zmdi', 'zmdi-menu', {'rotate-360': this.isSearchContainerActive})}></i>
                    <span className="title">Tours</span>
                    <i onClick={::this.searchIconClickHandler} className="zmdi zmdi-search"></i>
                </section>
                <section className={classNames('search-container', {active: this.isSearchContainerActive})}>
                    <i onClick={::this.backIconClickHander} className="zmdi zmdi-arrow-left"></i>
                    <input type="text"
                           placeholder="Search"
                           value={this.searchText}
                           onChange={::this.searchChangeHandler}/>
                </section>
            </header>
        )
    }
}
