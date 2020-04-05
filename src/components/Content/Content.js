import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faTwitter, fa500px } from "@fortawesome/free-brands-svg-icons";


export default () => {
  return (
    <section className="content">
      <div className="columns">
        <article className="content">
        <h3>Contact me:</h3>
        <ul>
          <li><a href="https://t.me/kulinsky"><FontAwesomeIcon icon={ faTelegram } /> Telegram</a></li>
          <li><a href="https://twitter.com/ankulinsky"><FontAwesomeIcon icon={ faTwitter } /> Twittor</a></li>
          <li><a href="https://500px.com/kulinsky"><FontAwesomeIcon icon={ fa500px } /> 500px</a></li>
        </ul>
      </article>
      </div>
    </section>
  )
}
