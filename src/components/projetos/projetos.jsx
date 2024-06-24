import React, { useEffect} from 'react';
import './projetos.css'
import { useTranslation } from "react-i18next"
import scrollRevealConfig from './projetos-reveal.js';
const Projetos = () => {
    const [t, i18n] = useTranslation("global");
    useEffect(() => {
        scrollRevealConfig();
      }, []);
    return (
        <section className='projetos' id='projetos'>
            <h2 className='titulo-reveal'>{t("projects.title")}</h2>
            <div className='projetos-container'>
                <div className="single single-first">
                    <div className="single-img">
                        <img src="/imgs/restaurant.png" alt="" />
                    </div>
                    <div className="single-detail">
                        <h3 className='projeto-titulo-reveal'>Restaurant</h3>
                        <p className='projeto-p-reveal'>
                        {t("projects.description-restaurant")}<span>props, hooks e array filters.</span>
                        </p>
                        <div className="button-wrap">
                            <a href='https://restaurante-alpha-silk.vercel.app' target='_blank'><button className="btn-project visit">{t("projects.project-button-visit")}</button></a>
                            <a href='https://github.com/Lucas-Caracoci/Restaurante' target='_blank'><button className="btn-project code" >{t("projects.project-button-code")}</button></a>
                        </div>
                    </div>
                </div>
                <div className="single reverse">
                    <div className="single-img img-reverse-reveal">
                        <img src="/imgs/movies.png" alt="" />
                    </div>
                    <div className="single-detail">
                        <h3 className='titulo-reverse-reveal'>Movie Lib</h3>
                        <p className='p-reverse-reveal'>
                        {t("projects.description-movie")} <span>API, props, hooks e .map().</span>
                        </p>
                        <div className="button-wrap button-reverse-reveal">
                            <a href='https://movies-api-seven-navy.vercel.app' target='_blank'><button className="btn-project visit"  >{t("projects.project-button-visit")}</button></a>
                            <a href='https://github.com/Lucas-Caracoci/movies-api' target='_blank'><button className="btn-project code" >{t("projects.project-button-code")}</button></a>
                        </div>
                    </div>
                </div>
                <div className="single single-first">
                    <div className="single-img">
                        <img src="/imgs/slider.png" alt="" />
                    </div>
                    <div className="single-detail">
                        <h3 className='projeto-titulo-reveal'>Slider</h3>
                        <p className='projeto-p-reveal'>
                            
                        {t("projects.description-slider")}
                        <span>React, CSS e JavaScript.</span>
                        </p>
                        <div className="button-wrap">
                            <a href='https://slider-xlow.vercel.app' target='_blank'><button className="btn-project visit">{t("projects.project-button-visit")}</button></a>
                            <a href='https://github.com/Lucas-Caracoci/slider_xlow' target='_blank'><button className="btn-project code" >{t("projects.project-button-code")}</button></a>
                        </div>
                    </div>
                </div>
                <div className="single reverse">
                    <div className="single-img img-reverse-reveal">
                        <img src="/imgs/vitrine.png" alt="" />
                    </div>
                    <div className="single-detail">
                        <h3 className='titulo-reverse-reveal'>Vitrine de Produtos</h3>
                        <p className='p-reverse-reveal'>
                        {t("projects.description-vitrine")}
                        <span>HTML5, CSS3, JavaScript (ES6), Fetch API, API REST.</span>
                        </p>
                        <div className="button-wrap button-reverse-reveal">
                            <a href='https://vitrine-xlow.vercel.app' target='_blank'><button className="btn-project visit"  >{t("projects.project-button-visit")}</button></a>
                            <a href='https://github.com/Lucas-Caracoci/vitrine_xlow' target='_blank'><button className="btn-project code" >{t("projects.project-button-code")}</button></a>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Projetos
