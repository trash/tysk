import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import {store} from '../redux/store';

import {ConnectedHomeView} from './Home';

export class MainView extends React.Component<void, {}> {
    heroPic: HTMLImageElement;

    componentDidMount() {
        window.onscroll = () => {
            var scrollValue = 'translateY(' + window.scrollY/2 + 'px)';
            this.heroPic.style['-webkit-transform'] = scrollValue;
        };
    }

	render () {
		return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <div className="header">
                            <img
                                ref={hero => this.heroPic = hero}
                                className="hero-pic"
                                src="images/hero.jpg"
                            />
                        </div>

                        <Route exact path="/" component={ConnectedHomeView}/>
                        <footer>Made with <i className="glyphicon glyphicon-heart"></i> by <a target="_blank" href="http://whats.gd/home">Stefan</a></footer>
                    </div>
                </Router>
            </Provider>
		);
	}
}