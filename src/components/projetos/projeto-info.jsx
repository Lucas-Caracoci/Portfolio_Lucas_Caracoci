import React from 'react'
import { useTranslation } from "react-i18next"

function Projetoinfo() {
    const [t, i18n] = useTranslation("global");
    function ProjectInfo({ title, description, t, img, projectLink, gitLink, index}) {

        return (
            <div className={`single ${(index % 2) === 0  ? "single-first" : "reverse"} `}>
                <div className={`single-img ${(index % 2) === 0 ? 'img-reverse-reveal' : ''}`}>
                    <img src={img} alt="" />
                </div>
                <div className="single-detail">
                    <h3 className='projeto-titulo-reveal'>{title}</h3>
                    <p className='projeto-p-reveal'>
                        {t(`projects.description-${title}`)}<span>{description}</span>
                    </p>
                    <div className="button-wrap">
                        <a href={projectLink} target='_blank'><button className="btn-project visit">{t("projects.project-button-visit")}</button></a>
                        <a href={gitLink} target='_blank'><button className="btn-project code" >{t("projects.project-button-code")}</button></a>
                    </div>
                </div>
            </div>
        )
    }
    
    const project = [
        {
            id: 1,
            title: 'restaurant',
            description: 'props, hooks e array filters.',
            img: "/imgs/restaurant.png",
            projectLink: 'https://restaurante-alpha-silk.vercel.app',
            gitLink: 'https://github.com/Lucas-Caracoci/Restaurante',
        },
        {
            id: 2,
            title: 'movie',
            description: 'API, props, hooks e .map().',
            img: "/imgs/movies.png",
            projectLink: 'https://movies-api-seven-navy.vercel.app',
            gitLink: 'https://github.com/Lucas-Caracoci/movies-api'
        },
        {
            id: 3,
            title: 'slider',
            description: 'React, CSS e JavaScript.',
            img: "/imgs/slider.png",
            projectLink: 'https://slider-xlow.vercel.app',
            gitLink: 'https://github.com/Lucas-Caracoci/slider_xlow'
        },
        {
            id: 4,
            title: 'vitrine',
            description: 'HTML5, CSS3, JavaScript , Fetch API, API REST.',
            img: "/imgs/vitrine.png",
            projectLink: 'https://vitrine-xlow.vercel.app',
            gitLink: 'https://github.com/Lucas-Caracoci/vitrine_xlow'
        },
    ]
    
  return (
    <div>
         {project.map((item, index)=> {
                    return (
                        <ProjectInfo key={item.id} img={item.img} t={t} description={item.description} title={item.title} index={index} />
                    )
                })}
    </div>
  )
}

export default Projetoinfo
