import React, { useRef } from 'react';
import arrow from './assets/media/plex-arrow.svg';
import { useEvent, useOnMount } from './Hooks';

export default function Splash() {
  const arrowRef = useRef(null);
  const maskRef = useRef(null);
  const animationDelay = 1000;
  const animationDuration = 1900;
  const animationPadding = 800;

  const adjustMaskPosition = () => {
    if (arrowRef.current && maskRef.current) {
      maskRef.current.style.left = `${window.innerHeight / 1.71 / 2}px`;
      // 1.71 = image aspect ratio of svg as full height image. divide by 2 to get half of the width of the image
    } else {
      console.log('refs not ready');
    }
  };
  useEvent('resize', adjustMaskPosition, true);

  useOnMount(() => {
    adjustMaskPosition();
    const timeout = setTimeout(() => {
      window.scrollTo({ x: 0, top: window.innerHeight, behavior: 'smooth' });
    }, animationDelay + animationDuration + animationPadding);
    return () => {
      clearInterval(timeout);
    };
  });

  return (
    <section className="Splash">
      <div className="arrow-animation">
        <div className="mask" ref={maskRef}></div>
        <img src={arrow} id="plex-arrow" alt="" ref={arrowRef} />
      </div>
      <h1 className="Hello">hello.</h1>
    </section>
  );
}
