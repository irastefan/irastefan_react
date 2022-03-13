import React from "react";

const Education = (props) => {
    return (
        <div className="item">
            <div>
            <div className="years">{props.years}</div>
            </div>
            <div>
            <h3>{props.company}</h3>
            <h4>{props.position}</h4>
            </div>
        </div>
    )
}

export default Education;
