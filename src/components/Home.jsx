import React from "react";
import bg from "../assets/2.webp";
import bgvid from "../assets/bgvid.mp4";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {

  const brandsData = [
    { img: 'https://assets.vogue.com/photos/650dc9ed4658ceaf3b706274/master/w_1280,c_limit/00001-gucci-spring-2024-ready-to-wear-credit-gorunway.jpg', description: 'Spring 2024 Ready-to-Wear',link: 'https://www.vogue.com/fashion-shows/fall-2024-menswear/gucci'},
    { img: 'https://assets.vogue.com/photos/65a16d54658275f1325ad3c6/master/w_1280,c_limit/00001-gucci-fall-2024-menswear-credit-gorunway.jpg', description: 'Spring 2024 Menswear',link:'https://www.vogue.com/fashion-shows/fall-2024-menswear/gucci' },
    { img: 'https://assets.vogue.com/photos/61821a86e19aed3ea2b2f931/master/w_1280,c_limit/Look_002.jpg', description: 'Spring 2024 Menswear' ,link:'https://www.vogue.com/fashion-shows/fall-2024-menswear/gucci'},
    { img: 'https://assets.vogue.com/photos/63c15c6cc23144ad0c74c5f0/master/w_1280,c_limit/FIO00024.jpg', description: 'Fall 2022 Ready-to-Wear',link:'https://www.vogue.com/fashion-shows/fall-2024-menswear/gucci' },
    { img: 'https://assets.vogue.com/photos/61821a86e19aed3ea2b2f931/master/w_1280,c_limit/Look_002.jpg', description: 'Pre-Fall 2022',link:'https://www.vogue.com/fashion-shows/fall-2024-menswear/gucci'}
  ];
  return (
    <>
      <div id="home" class="container">
        <span data-title="PLASH" class="text">
          PLASH  </span>
        <span >
          its all about Fashion </span>
      </div>

      <div className="video-background">
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src={bgvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
      <div className="home2">
        <div>
          <p>
            What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language." "Fashion should be a form of escapism, and not a form of imprisonment." "Fashion is like eating; You shouldn't stick to the same menu.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>"Fashion is like eating; You shouldn't stick to the same menu."Fashion should be a form of escapism, and not a form of imprisonment." "Fashion is like eating; You shouldn't stick to the same menu."Fashion should be a form of escapism, and not a form of imprisonment." "Fashion is like eating; You shouldn't stick to the same menu."Fashion should be a form of escapism, and not a form of imprisonment." "Fashion is like eating; You shouldn't stick to the same menu."Fashion should be a form of escapism, and not a form of imprisonment." "Fashion is like eating; You shouldn't stick to the same menu.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
          {brandsData.map((brand, index) => (
              <div key={index} className="card">
  <a target="_blank" href={brand.link}>
      <img src={brand.img} alt="" />
    </a> <p>{brand.description}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
