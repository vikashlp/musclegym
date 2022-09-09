import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from './Products';
import Slider from "react-slick";



const Slide = () => {
  const settings = {
    dots: true,
    infinite: true, //to make the arrow key work
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (

    <div className='main'>
      <Slider {...settings}>
        {products.map((item) => (
          <div className='card'>

            <div className='card-top'>  <img src={item.linkImg} alt={item.title} />
              <h3 className='slidetitle'>{item.title}</h3>
            </div>

            <div className='card-bottom'></div>
          </div>
        ))}

      </Slider>
    </div>

  );
}


export default Slide;