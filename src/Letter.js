import React, { useRef } from 'react';
import popcornVideo from './assets/media/popcorn.webm';
import sayAnything from './assets/media/say-anything.gif';
import unixBased from './assets/media/its-a-unix-system.jpg';
import hackers from './assets/media/hackers.gif';
import kramer from './assets/media/kramer.gif';
import batman from './assets/media/batman.gif';
import breakfast from './assets/media/breakfast-club.gif';
import starWars from './assets/media/star-wars.gif';
import github from './assets/media/github.svg';
import Tooltip from './Tooltip';

export default function Letter() {
  const popcorn = useRef(null);

  const onPopcornClick = (e) => {
    e.preventDefault();
    if (popcorn.current) {
      popcorn.current.play();
    }
  };

  return (
    <main id="CoverLetter">
      <article>
        <h2>Dear Plex:</h2>
        <p className="text">
          Not a week has gone by in the past decade where someone in my household hasn't exclaimed "Wow, XBMC ...errr, I mean Plex, is <em>awesome</em>". No
          other platform grants you the freedom that Plex does. I make sure that my little server earns its keep every day on at least one of the{' '}
          <small>(dozen)</small> devices that it lives on. Whether I'm at home, in the car, or at a friend's place, my media comes with me. When I travel, my
          checklist is: Passport, Toothbrush, Plex. I know from following the Plex Blog that you all enjoy a good pun, so I've included some links throughout
          this letter that I believe show all four sides of my personality--hopefully you don't think that's too square. Let me know if these are too
          <button className="link" onClick={onPopcornClick}>
            corny
          </button>
          .
        </p>

        <p>
          Now that we've all gotten a snack...let me tell you my story. The driving motivator behind my M.S. in Creative Technology from the University of
          Colorado has been my intent to work for a specific class of company. Plex has always been at the top of that list. I've been silently keeping an eye
          on Plex's career page while building up my{' '}
          <Tooltip id="batman" text="technical skill utility belt">
            <img src={batman} alt="Batman's utility belt" />
          </Tooltip>{' '}
          and getting intimate with a range of stacks from LAMP to MERN. Along the way, I've picked up some valuable experiences like working for non-profits,
          migrating{' '}
          <Tooltip id="starWars" text="jQuery">
            <img src={starWars} alt="It's an old code, sir, but it checks out" />
          </Tooltip>{' '}
          codebases to ES6+, building SPAs on embedded devices for the National Science Foundation, and volunteering as a mentor at{' '}
          <Tooltip id="hackers" text="hackathons" place="top">
            <img src={hackers} alt="HACK THE PLANET!" />
          </Tooltip>{' '}
          for underrepresented minority students in the STEM field. Every team I've ever worked with has said I have a magnetic personality--although I'm not
          quite sure if that is a positive or a negative. So naturally, when I saw the requisition I'd been waiting for, a full-stack web engineer,
          <Tooltip id="kramer" text="I jumped on it">
            <img src={kramer} alt="Kramer on his way to work" />
          </Tooltip>
          !
        </p>

        <p>
          I'm sure you're well aware that the developer landscape is saturated with front-end developers. The front-end is sexy right now, and with code
          bootcamps kicking out graduates at the rate John Hughes made{' '}
          <Tooltip id="breakfast-club" text="coming-of-age stories">
            <img src={breakfast} alt="Fist pump from The Breakfast Club" />
          </Tooltip>
          , there aren't as many developers who are actually "full-stack". I am a true full-stack developer in the sense that I understand system architecture
          and security, and I have a deep, demonstrated understanding of back-end vs front-end and their strengths and weaknesses. I'm deeply familiar with{' '}
          <Tooltip id="unix" text="Unix-based operating systems">
            <img src={unixBased} alt="Jurassic Park Scene" />
          </Tooltip>
          , and can navigate around a terminal at light speed (I can even exit Vim).
        </p>

        <p>
          <Tooltip id="sayanything" text="So here I am" place="top">
            <img src={sayAnything} alt="That scene from Say Anything. You know the one" />
          </Tooltip>
          , just a guy, sitting behind a monitor, looking for a team to join.
        </p>

        <p className="signature">
          <span>
            Let's build something great together,
            <br />
          </span>
          Matt "Dick" Dickey<br />
          <a href="https://github.com/8bit-echo/plex-cover-letter" target="_blank" rel="noreferrer">
            <img src={github} alt="Github link to this letter" width={20} height={20} />
          </a>
        </p>

        <section className="easter-eggs">
          <figure className="easter-egg full-screen" id="popcorn">
            <video src={popcornVideo} muted id="popcorn-video" ref={popcorn}></video>
          </figure>
        </section>
      </article>
    </main>
  );
}
