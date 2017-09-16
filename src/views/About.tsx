import * as React from 'react';

export class AboutView extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <section className="row">
                    <div className="col-md-12">
                        <h1>What we do</h1>
                        <p>Accessible content that spreads knowledge. Practically.</p>
                    </div>
                </section>
                <section className="row">
                    <div className="col-md-12">
                        <h1>Our work</h1>
                        <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158602014&amp;color=3376dc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                        <div className="video-container-wrap">
                            <div className="video-container">
                                <div className="video-wrap">
                                    <div className="thumbnail">
                                        <iframe width="100%" height="360" src="//www.youtube.com/embed/7V0WmFTVnnQ" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="video-wrap">
                                    <div className="thumbnail">
                                        <iframe width="100%" height="360" src="//www.youtube.com/embed/0akfShdgQpQ" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="video-wrap">
                                    <div className="thumbnail">
                                        <iframe width="100%" height="360"  src="//www.youtube.com/embed/Io3oFTb6Ugk" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="video-wrap">
                                    <div className="thumbnail">
                                        <iframe width="100%" height="360" src="//www.youtube.com/embed/-FNfrC3EX6c" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="video-wrap">
                                    <div className="thumbnail">
                                        <iframe width="100%" height="360" src="//www.youtube.com/embed/Kckjc_T-pBg" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <div className="col-md-12">
                        <h1>Contact Us</h1>
                        <div className="email">
                            <a href="mailto:tyskllc@gmail.com"><i className="glyphicon glyphicon-envelope"></i> tyskllc@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}