/* eslint-disable no-unused-vars */
import React from 'react'
import "../App";

export default function NavBar() {
  return (
    <div>
      <ul className="nav">
        <li>
          <a href="/aboutMe">About Me</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
     
    </div>
  );
}
