import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Project = (props) => {
    return (
        <div className='project'>
              <div className='img-project'>
                <img src={props.img} alt={props.name} />
              </div>
              <a className='link-project' href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a>
          </div>
    )
}

export default Project;