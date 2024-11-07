import React, { useState, useEffect } from 'react';
import './topo.css';
import { useTranslation } from 'react-i18next';
import scrollRevealConfig from './topo-reveal.js';

function Topo() {
  const [scrollClass, setScrollClass] = useState('');
  const [currentSection, setCurrentSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    const handleScroll = () => {
     
      const bannerH1 = document.getElementById('banner-h1');
      setScrollClass(bannerH1?.getBoundingClientRect().top <= 100 ? 'scroll-topo' : '');

      
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        if (window.scrollY >= offset && window.scrollY < offset + height) {
          current = section.getAttribute('id');
        }
      });
      setCurrentSection(current);
    };

   
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {

    scrollRevealConfig(window.scrollY);
  }, [scrollClass]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const destacar = (id) => {
    document.getElementById('bra').style.filter = id === 'bra' ? 'saturate(100%)' : 'saturate(0)';
    document.getElementById('eua').style.filter = id === 'eua' ? 'saturate(100%)' : 'saturate(0)';
  };

  return (
    <header className={`topo ${scrollClass}`} id="topo">
      <nav>
        {['banner', 'sobre', 'skills', 'projetos'].map((section, index) => (
          <a
            key={section}
            href={`#${section}`}
            className={`link link-reveal${index + 1} ${currentSection === section ? 'active' : ''}`}
          >
            {t(`header.link-${section}`)}
          </a>
        ))}
      </nav>
      <div className={`idioma-mobile ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        <img src="/imgs/translation.png" alt="Ícone de tradução" className="translate" />
        <div className="idioma">
          {[
            { id: 'bra', lang: 'pt', src: '/imgs/brasil.png', alt: 'Ícone do Brasil' },
            { id: 'eua', lang: 'en', src: '/imgs/estados-unidos.png', alt: 'Ícone dos EUA' },
          ].map(({ id, lang, src, alt }) => (
            <img
              key={id}
              id={id}
              src={src}
              alt={alt}
              className={id}
              onClick={() => {
                handleChangeLanguage(lang);
                destacar(id);
              }}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Topo;
