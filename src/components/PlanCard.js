import React from 'react'
import Fade from "react-reveal/Fade";
import { BsFillCollectionFill } from "react-icons/bs";


export default function PlanCard({title,text,icon}) {
    return (
        <div class="plan-card">
        <Fade>
          <h2>{title}</h2>

          <p className="text-muted">
            {text}
          </p>
          {icon}
        </Fade>
      </div>
    )
}
