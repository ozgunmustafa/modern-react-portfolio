import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';


export default function Header({contact}) {
  return (
    <nav class="container px-50">
      <div>
        <h3 class="site-name ">
            ozgunmustafa
        </h3>
        <h4 class="slogan text-muted">
        <Fade bottom cascade>
            Developer + Designer
          </Fade>
        </h4>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <Bounce top>

        <li>
          <a href={`mailto:${contact.EMAIL}`} className="active">
          Sent Mail
          </a>
        </li>
        </Bounce> 

      </ul>
    </nav>
  );
}
