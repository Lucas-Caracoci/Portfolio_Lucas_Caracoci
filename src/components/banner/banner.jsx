import React, { useRef, useEffect } from 'react';
import './banner.css';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import scrollRevealConfig from './banner-reveal.js';

function Banner() {
  const el = useRef(null);
  const [t, i18n] = useTranslation('global');
  const sub1 = t('banner.sub1');
  const sub2 = t('banner.sub2');

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [sub1, sub2],
      startDelay: 1000,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 4000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [i18n.language]);


  useEffect(() => {
    scrollRevealConfig();
  }, []);
  return (
    <section className="banner" id="banner">
      <div className="banner-conteudo">
        <div>
          <h1 className="titulo name-reveal"  id="banner-h1">
            Lucas Caracoci
          </h1>
          <div className='sub-reveal'>
            <span className="subtitulo " ref={el}></span>
          </div>
        </div>
       
      </div>
      <img src="\src\assets\imgs\bg.png" alt="" className='montanha' />
    </section>
  );
}

export default Banner;