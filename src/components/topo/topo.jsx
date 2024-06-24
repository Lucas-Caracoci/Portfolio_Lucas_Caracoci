import React, { useState, useEffect } from 'react';
import './topo.css';
import { useTranslation } from 'react-i18next';
import scrollRevealConfig from './topo-reveal.js';

function Topo() {
  const [scrollClass, setScrollClass] = useState('');
  const [currentSection, setCurrentSection] = useState('');
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    scrollRevealConfig(0); 
    const handleScroll = () => {
      const bannerH1 = document.getElementById('banner-h1');
      if (bannerH1) {
        const { top } = bannerH1.getBoundingClientRect();
        if (top <= 100) {
          setScrollClass('scroll-topo');
        } else {
          setScrollClass('');
        }
      }

      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          current = id;
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Adiciona um novo useEffect para observar a posição do scroll e chamar scrollRevealConfig() com a posição atual
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY;
      scrollRevealConfig(scrollPosition);
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []); // Certifique-se de que este useEffect seja executado apenas uma vez

  const [t, i18n] = useTranslation('global');
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen); 
  };

  function destacar(img) {
    const brasilImg = document.getElementById('bra');
    const euaImg = document.getElementById('eua');

    switch (img.id) {
      case 'eua':
        euaImg.style.filter = 'saturate(100%)';
        brasilImg.style.filter = 'saturate(0)';
        break;
      case 'bra':
        brasilImg.style.filter = 'saturate(100%)';
        euaImg.style.filter = 'saturate(0)';
        break;
      default:
        break;
    }
  }

  return (
    <header className={`topo ${scrollClass}`} id="topo">
      <nav>
        <a className={`link link-reveal1 ${currentSection === 'banner' ? 'active' : ''}`} href="#banner">
          {t('header.link-home')}
        </a>
        <a className={`link link-reveal2 ${currentSection === 'sobre' ? 'active' : ''}`} href="#sobre">
          {t('header.link-about')}
        </a>
        <a className={`link link-reveal3 ${currentSection === 'skills' ? 'active' : ''}`} href="#skills">
          {t('header.link-skills')}
        </a>
        <a className={`link last link-reveal4 ${currentSection === 'projetos' ? 'active' : ''}`} href="#projetos">
          {t('header.link-projects')}
        </a>
      </nav>
      <div className={`teste ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        <img src="/src/assets/imgs/translation.png" alt="" className="translate" />
        <div className="idioma">
          <img
            src="/src/assets/imgs/brasil.png"
            alt="icone-bandeira-brasil"
            id="bra"
            className='bra'
            onClick={() => {
              handleChangeLanguage('pt');
              destacar(document.getElementById('bra'));
            }}
          />
          <img
            src="/src/assets/imgs/estados-unidos.png"
            alt="icone-bandeira-eua"
            id="eua"
            className='eua'
            onClick={() => {
              handleChangeLanguage('en');
              destacar(document.getElementById('eua'));
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Topo;
