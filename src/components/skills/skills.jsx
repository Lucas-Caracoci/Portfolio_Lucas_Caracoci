import React, { useEffect, useRef } from 'react';
import './skills.css'
import { useTranslation } from "react-i18next"
import scrollRevealConfig from './skills-reveal.js';
import Skillbar from './skill-bar';
const Skills = () => {
    const [t, i18n] = useTranslation("global");

  
    function changeDiv() {
        const btnLearned = document.getElementById("btn-learned")
        const btnLearning = document.getElementById("btn-learning")
        const learned = document.getElementById("skills-bars")
        const learning = document.getElementById("learning-skills")
        learned.classList.add("learned-trans")
        learning.classList.add("learning-trans")
        btnLearning.classList.add("btn-selected")
        btnLearned.classList.remove("btn-selected")
    }
    function returnDiv() {
        const btnLearning = document.getElementById("btn-learning")
        const btnLearned = document.getElementById("btn-learned")
        const learned = document.getElementById("skills-bars")
        const learning = document.getElementById("learning-skills")
        learned.classList.remove("learned-trans")
        learning.classList.remove("learning-trans")
        btnLearning.classList.remove("btn-selected")
        btnLearned.classList.add("btn-selected")
    }
    useEffect(() => {
        scrollRevealConfig();
      }, []);
      
    return (
        <section className='skills-page' id='skills'>
            
            <h2 className='titulo-reveal'>{t("skills.title")}</h2>
            <div className='change-div'>
                <button onClick={returnDiv} id='btn-learned' className='btn-learned btn-selected'>
                    <p className="line-button"><span>{t("skills.btn-1")}</span></p>
                </button>
                <button onClick={changeDiv} id='btn-learning' className='btn-learning'>
                    <p className="line-button"><span>{t("skills.btn-2")}</span></p>
                </button>
            </div>
            <div className='skills-area'>

                <div id='skills-bars' className='skills-bars'><Skillbar></Skillbar></div>

                <div className='learning-skill' id='learning-skills'>
                    <div className='learning-item' tabIndex="0">
                        <span className="tooltiptext">SASS</span>
                        <img src='\imgs\sass.png' alt='' className='icon-skill'  />
                    </div>
                        <div className='learning-item'  tabIndex="0">
                    <span className="tooltiptext">Git</span>
                        <img src='\imgs\Git.png' alt='' className='icon-skill' />
                    </div>
                        <div className='learning-item'  tabIndex="0">
                    <span className="tooltiptext">Next.JS</span>
                        <img src='\imgs\next.png' alt='' className='icon-skill' />
                    </div>
                    <div className='learning-item'  tabIndex="0">
                        <span className="tooltiptext">TypeScript</span>
                        <img src='\imgs\ts.png' alt='' className='icon-skill' />
                    </div>
                    <div className='learning-item'  tabIndex="0">
                        <span className="tooltiptext">Jquery</span>
                        <img src='\imgs\jquery.png' alt='' className='icon-skill' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
