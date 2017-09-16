import * as React from 'react';

export class TeamView extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div className="person col-md-6">
                    <img className="person-pic" src="images/ross.jpg"/>
                    <div className="person-details">
                        <div className="name-tag">
                            <h3 className="person-name">Ross Davis</h3>
                            <h3 className="person-title">The Talent</h3>
                        </div>
                        <div className="person-description">
                            <p>
                                People are pretty smart. And when it really matters, they can understand the things that influence their lives. The problem is that the important things don't tend to come with a handbook. That's where we fit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="person col-md-6">
                    <img className="person-pic" src="images/sam.png"/>
                    <div className="person-details">
                        <div className="name-tag">
                            <h3 className="person-name">Sam Plasmati</h3>
                            <h3 className="person-title">The Creator</h3>
                        </div>
                        <div className="person-description">
                            <p>
                                Ross may be the science guy, but I've always been more of a history buff. And it got me thinking... there are so many awesome stories and pieces of information in this world, just not enough storytellers. We want to be those storytellers – explaining the things you see, do, and hear about every day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}