import * as React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router';
import {History} from 'history';
import * as classNames from 'classnames';

import {store, StoreState} from '../redux/store';

import {Tab} from '../models/common';

import {AboutView} from './About';
import {TeamView} from './Team';

import {ConnectedNavbar} from '../components/Navbar';

interface HomeViewProps {
    tab: Tab;
    history: History;
}

export class HomeView extends React.Component<HomeViewProps, {}> {
    render() {
        const tabClasses = (tab: Tab): string => {
            return classNames('slide', {
                in: tab === this.props.tab,
                'left about': tab === 'about',
                'right': tab === 'team'
            });
        }
        return (
            <div className="row">
                <section className="body-content container col-md-12">
                    <AboutView/>
                </section>
            </div>
        );
    }
}

export const ConnectedHomeView = connect((state: StoreState) => {
    return {
        tab: state.tab
    };
})(HomeView);