import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
  const Clients=[
    {
      img: profilePic1,
      review:
      "Ines completely re built my website for me during the covid-19 lockdown. She took my brief and injected his own creative ideas and showed an excellent understanding of the style I was trying to create. She worked quickly and was there when needed. Excellent!"
    }, 
    
    {
      img: profilePic2,
      review:"I couldn't be happier with my choice of hiring ines to work on my new website. She was easy to work with and helped me make a terrific website in a short amount of time. Thanks again noussa for all your hard work I will recommend you to all my friends!"
    },
    
    {
      img: profilePic3,
      review:"Without doubt one of the most talented developers out there.  I always go back to Ines when I'm out of my depth and she's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed."
    },
    {
      img: profilePic4,
      review:"Ines was very helpful and fast to respond to my inquiry to help with React website issues.  Her knowledge was comprehensive.  Even better, her advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Warren."
    },
  ]




  return (
    <div className="t-wrapper" id="testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;