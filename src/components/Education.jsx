import React from "react";

const Education = (props) => {
    return (
        <div className="item" data-aos='zoom-in' data-aos-once='true'>
            <div>
            <div className="years">{props.years}</div>
            </div>
            <div>
            <h3>{props.company}</h3>
            <h4 dangerouslySetInnerHTML={{ __html: props.position}} />
            </div>
        </div>
    )
}

export default Education;
