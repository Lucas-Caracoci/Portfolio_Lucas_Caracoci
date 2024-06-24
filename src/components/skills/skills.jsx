import React, { useEffect, useRef } from 'react';
import './skills.css'
import { useTranslation } from "react-i18next"
import scrollRevealConfig from './skills-reveal.js';
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
                
                <div className='skills-bars'id='skills-bars'>
                    <div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-name html">HTML</div>
                                <div className="skill-bar html-bar">
                                    <div className="skill-per" per="90%" style={{ maxWidth: '90%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-name css">CSS</div>
                                <div className="skill-bar css-bar">
                                    <div className="skill-per" per="70%" style={{ maxWidth: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-name js">JS</div>
                                <div className="skill-bar js-bar">
                                    <div className="skill-per" per="60%" style={{ maxWidth: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="skills">
                            <div className="skill">
                                <div className="skill-name react">REACT.JS</div>
                                <div className="skill-bar react-bar">
                                    <div className="skill-per" per="50%" style={{ maxWidth: '50%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='learning-skill' id='learning-skills'>
                    <div className='learning-item' tabIndex="0">
                        <span className="tooltiptext">SASS</span>
                        <img src='\src\assets\imgs\sass.png' alt='' className='icon-skill'  />
                    </div>
                        <div className='learning-item'  tabIndex="0">
                    <span className="tooltiptext">Git</span>
                        <img src='\src\assets\imgs\git.png' alt='' className='icon-skill' />
                    </div>
                        <div className='learning-item'  tabIndex="0">
                    <span className="tooltiptext">Next.JS</span>
                        <img src='\src\assets\imgs\next.png' alt='' className='icon-skill' />
                    </div>
                    <div className='learning-item'  tabIndex="0">
                        <span className="tooltiptext">TypeScript</span>
                        <img src='\src\assets\imgs\ts.png' alt='' className='icon-skill' />
                    </div>
                    <div className='learning-item'  tabIndex="0">
                        <span className="tooltiptext">Jquery</span>
                        <img src='\src\assets\imgs\jquery.png' alt='' className='icon-skill' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
