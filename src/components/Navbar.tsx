import * as React from 'react';
import {connect} from 'react-redux';

import {Tab} from '../models/common';
import {updateTab} from '../redux/actions';
import {store, StoreState} from '../redux/store';

interface NavbarProps {
    tab: Tab;
}

export class Navbar extends React.Component<NavbarProps, {}> {
    selectTab(tab: Tab): void {
        store.dispatch(updateTab(tab));
    }

    render() {
        const tabActiveClass = (tab: Tab): string => {
            return tab === this.props.tab
                ? 'active'
                : '';
        }
        return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                            <ul className="nav navbar-nav">
                                <li className={tabActiveClass('about')}>
                                    <a onClick={() => this.selectTab('about')}>About</a>
                                </li>
                                <li className={tabActiveClass('team')}>
                                    <a onClick={() => this.selectTab('team')}>The Team</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
}

export const ConnectedNavbar = connect((state: StoreState) => {
    return {
        tab: state.tab
    };
})(Navbar);