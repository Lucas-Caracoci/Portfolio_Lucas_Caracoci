import React, { useEffect} from 'react';
import './projetos.css'
import { useTranslation } from "react-i18next"
import scrollRevealConfig from './projetos-reveal.js';
import Projetoinfo from './projeto-info';
const Projetos = () => {
    const [t, i18n] = useTranslation("global");
   
    useEffect(() => {
        scrollRevealConfig();
      }, []);
    return (
        <section className='projetos' id='projetos'>
            <h2 className='titulo-reveal'>{t("projects.title")}</h2>
            <div className='projetos-container'>
                <Projetoinfo></Projetoinfo>
                
            </div>
        </section>
    )
}

export default Projetos
