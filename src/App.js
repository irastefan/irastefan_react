import React, { useState, useEffect } from 'react';
import './styles/css/main.css';
import './styles/style.css';
import logo from './images/82.JPG';
import ellipse from './images/ellipse.png';
import { CSSTransition } from 'react-transition-group';
import LANG from './lang';

import Picture from './components/Picture';
import Contacts from './components/Contacts';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Projects';

function App() {
  const [inProp, setInProp] = useState(false);

  const [langId, setLangId] = useState('en');
  
  useEffect(() => {
    setInProp(true); 
  }, [langId]);

   return (
     
    <div className="app" id={langId}>
     <CSSTransition in={inProp} timeout={1000} classNames="my-node"> 
      <div className="sidebar">

        <Picture src={logo} />
		    <h1>{LANG[langId].fullName}</h1>
        <Contacts 
          phone={LANG.phone} 
          email={LANG.email} 
          github={LANG.github} 
          linkedin={LANG.linkedin} 
        />

	    </div>
     </CSSTransition>
     <CSSTransition in={inProp} timeout={1000} classNames="my-node"> 
      <main>
      <button className="langbutton" onClick={() => {
          langId === 'en' ? setLangId('he') : setLangId('en');
          setInProp(false);
          
        }} >{LANG[langId].textButton}</button>

        <img src={ellipse} alt="Logo" className="ellipse" />

        <h2>{LANG[langId].experience.title}</h2>
        <div>
        {LANG[langId].experience.items.map((item, index) => 
          <WorkExperience 
            company={item.company}  
            years={item.years}
            position={item.position}
            description={item.description}
            key={index}
          /> )}
          </div>
          
          <h2>{LANG[langId].education.title}</h2>
          <div>
            {LANG[langId].education.items.map((item, index) => 
              <Education 
                company={item.company}  
                years={item.years}
                position={item.position}
                key={index}
              /> )}
          </div>

        <h2>{LANG.title}</h2>
        <Skills />

        <h2>{LANG.title}</h2>
        <div className='projects'>
            {LANG.projects.items.map((item, index) => 
              <Project 
                name={item.name}  
                link={item.link}
                img={item.img} 
                tags={item.tags} 
                github={item.github} 
                key={index}
              /> )}
        </div>

      </main>
      </CSSTransition>
    </div>
  );
  /*return (
    <Loader />
  )*/
}

export default App;
