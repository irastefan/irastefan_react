import React from "react";

const WorkExperience = (props) => {
    return (
        <div className="item"  data-aos='zoom-in' data-aos-once='true'>
            <div>
                <div className="company">{props.company}</div>
                <div className="years">{props.years}</div>
            </div>
            <div>
                <h3>{props.position}</h3>
                <p dangerouslySetInnerHTML={{ __html: props.description}} />
            </div>
        </div>
    )
}

export default WorkExperience;
