import React from "react";

const Picture = (props) => {
    return (
        <div className="picture-resume" data-aos={props.dataAos} data-aos-once='true'>
			<div className="circle-1"></div>
			<div className="circle-2"></div>
			<img src={props.src} alt="Logo" />
	  	</div>
    )
}

export default Picture;