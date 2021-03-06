import React from 'react';

import config from '../../config';
export default function Footer() {
  return (
    <header id="header">
      <h1>
        Einar Guðni Guðjónsson
      </h1>
      <p>Stay tuned. More is coming</p>
      <nav>
        <ul>
          {config.authorSocialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
