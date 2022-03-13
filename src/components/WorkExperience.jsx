import React from "react";

const WorkExperience = (props) => {
    return (
        <div className="item">
            <div>
                <div className="company">{props.company}</div>
                <div className="years">{props.years}</div>
            </div>
            <div>
                <h3>{props.position}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default WorkExperience;
