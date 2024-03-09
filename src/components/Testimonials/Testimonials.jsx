import React, { memo, useMemo } from 'react';
import "./Testimonials.css";
import sections from '../../constants/data';
import { MdStar } from "react-icons/md";

const gradient = "url(#blue-gradient)";

export const Testimonials = memo(() => {

  const showRating = useMemo(() => {
    return (starCount) => {
      const stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(<MdStar key={i} size={25} style={{fill: gradient}} />);
      }
      return stars;
    };
  }, [gradient]);

  return (
    <section className='testimonials section-p bg-black' id="testimonials">
      <div className='container'>
        <div className='testimonials-content'>
          <div className='section-t text-center'>
            <h3>Customer Testimonials</h3>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias voluptatum, tempore
              dignissimos perferendis ea.</p>
          </div>

          <div className='item-list grid text-white text-center'>
            {
              sections && sections.testimonials && sections.testimonials.map(testimonial => (
                <div className='item translate-effect bg-dark' key={testimonial.id}>
                  <div className='item-img'>
                    <img src={testimonial.image} alt=""/>
                  </div>
                  <h4 className='item-name'>{testimonial.name}</h4>
                  <p className='item-text text'>{testimonial.text}</p>
                  <ul className='flex item-rating flex-center'>
                    {
                      showRating(testimonial.rating).map((star, index) => (
                        <li key={index}>{star}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
});
