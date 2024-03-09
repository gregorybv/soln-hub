import React, { memo } from 'react';
import "./Features.css";
import sections from '../../constants/data';
import { SingleFeatures } from './SingleFeatures';

export const Features =memo (() => {
  return (
    <section className='features section-p bg-black' id="features">
      <div className='container'>
        <div className='features-content'>
          <div className='item-list text-white'>
            {
              sections.features.map(feature => {
                return (
                  <SingleFeatures key={feature.id} {...feature} />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
});
