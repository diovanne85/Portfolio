/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "../styles/AboutMe.css"
export default function AboutMe() {
  return (
    <>
      <div className="container">
        <h2>About Me</h2>
        <div className="intro">
          <p>
            Hi there! I'm Diovanne, a passionate fullstack web developer based
            in Philippines. This is my personal website where I share my
            thoughts, projects, and experiences.
          </p>
          <p>
            Feel free to explore and get to know me better. If you have any
            questions or just want to say hello, don't hesitate to reach out.
          </p>
        </div>
        <a href='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
          fill='#ffff'
        >
          <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
        </svg>
        </a>
      </div>
    </>
  );
}
