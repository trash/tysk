import * as React from 'react';

export class AboutView extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-6">
                        <h1>Dynamic business solutions for dynamic businesses.</h1>
                        <p>With an expertise in cutting edge technologies forged across a wide array of startups, software companies, and higher education organizations,
                         we know how to leverage software to solve problems for companies that couldn't be solved any other way.</p>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <h1>Contact Us</h1>
                        <div className="email">
                            <a href="mailto:tysktechnologies@gmail.com"><i className="glyphicon glyphicon-envelope"></i> tysktechnologies@gmail.com</a>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <div className="col-md-12">
                        <h1>Our Experience</h1>
                        <div className="companies-container">
                            <a href="https://hhi.harvard.edu/">
                                <img src="/images/logos/harvard.png"/>
                            </a>
                            <a href="https://www.runkeeper.com/">
                                <img src="/images/logos/runkeeper.png"/>
                            </a>
                            <a href="https://www.rev.com/">
                                <img src="/images/logos/rev.png"/>
                            </a>
                            <a href="http://www.predictiveindex.com/">
                                <img src="/images/logos/predictive-index.svg"/>
                            </a>
                            <a href="https://www.masterpoint.io/">
                                <img src="/images/logos/masterpoint.png"/>
                            </a>
                            <a href="https://www.stream.me/">
                                <img src="/images/logos/streamme.png"/>
                            </a>
                            <a href="https://www.rediker.com">
                                <img src="/images/logos/rediker.jpg"/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}