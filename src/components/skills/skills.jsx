import React, { useState, useEffect } from 'react';
import './skills.css';
import { useTranslation } from "react-i18next";
import scrollRevealConfig from './skills-reveal.js';
import Skillbar from './skill-bar';

const Skills = () => {
    const [t] = useTranslation("global");
    const [isLearning, setIsLearning] = useState(false); 

    useEffect(() => {
        scrollRevealConfig();
    }, []);

   
    const handleLearnedClick = () => setIsLearning(false);
    const handleLearningClick = () => setIsLearning(true);

    return (
        <section className='skills-page' id='skills'>
            <h2 className='titulo-reveal'>{t("skills.title")}</h2>
            <div className='change-div'>
                <button
                    onClick={handleLearnedClick}
                    id='btn-learned'
                    className={`btn-learned ${!isLearning ? 'btn-selected' : ''}`}
                >
                    <p className="line-button"><span>{t("skills.btn-1")}</span></p>
                </button>
                <button
                    onClick={handleLearningClick}
                    id='btn-learning'
                    className={`btn-learning ${isLearning ? 'btn-selected' : ''}`}
                >
                    <p className="line-button"><span>{t("skills.btn-2")}</span></p>
                </button>
            </div>
            <div className='skills-area'>
                <div
                    id='skills-bars'
                    className={`skills-bars ${isLearning ? 'learned-trans' : ''}`}
                >
                    <Skillbar />
                </div>
                <div
                    id='learning-skills'
                    className={`learning-skill ${isLearning ? 'learning-trans' : ''}`}
                >
                    {["SASS", "Git", "Next.JS", "TypeScript", "Jquery"].map(skill => (
                        <div className='learning-item' key={skill} tabIndex="0">
                            <span className="tooltiptext">{skill}</span>
                            <img src={`\\imgs\\${skill.toLowerCase()}.png`} alt={skill} className='icon-skill' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
