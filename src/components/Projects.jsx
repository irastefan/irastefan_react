import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = (props) => {
    return (
        <div className='project'  data-aos='zoom-in'>
              <div className='img-project'>
                <img src={props.img} alt={props.name} />
              </div>
              <div className="project-links">
                <a className='link-project' 
                  href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink} /></a>
                <a className='link-project tooltip' 
                  href='#'><FontAwesomeIcon icon={faCode} />
                  <span className="tags tooltiptext">{
                      props.tags && props.tags.join(', ')
                    }</span>
                </a>
                {props.github && <a className='link-project' 
                  href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>}
              </div>
          </div>
    )
}

export default Project;