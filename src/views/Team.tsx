import * as React from 'react';

export class TeamView extends React.Component<{}, {}> {
    render() {
        return (
            <div className="team-section">
                <div className="person">
                    <div className="person-pic">
                        <img src="images/sam.png"/>
                        <div className="name-tag">
                            <h3 className="person-name">Sam Plasmati</h3>
                            <h3 className="person-title">Product</h3>
                        </div>
                    </div>
                    <div className="person-details">
                        <a target="_blank" href="https://www.linkedin.com/in/samuelplasmati/">
                            <i className="fa fa-linkedin-square"></i> Samuel Plasmati
                        </a>
                    </div>
                </div>
                <div className="person">
                    <div className="person-pic">
                        <img src="images/alex.jpg"/>
                        <div className="name-tag">
                            <h3 className="person-name">Alex Sullivan</h3>
                            <h3 className="person-title">Mobile & Backend Development</h3>
                        </div>
                    </div>
                    <div className="person-details">
                        <a target="_blank" href="https://www.linkedin.com/in/alex-sullivan-25725329/">
                            <i className="fa fa-linkedin-square"></i> Alex Sullivan
                        </a>
                    </div>
                </div>
                <div className="person">
                    <div className="person-pic">
                        <img src="images/stefan.jpg"/>
                        <div className="name-tag">
                            <h3 className="person-name">Stefan Valentin</h3>
                            <h3 className="person-title">Product & Frontend Development</h3>
                        </div>
                    </div>
                    <div className="person-details">
                        <a target="_blank" href="https://www.linkedin.com/in/stefan-valentin-00234150">
                            <i className="fa fa-linkedin-square"></i> Stefan Valentin
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}