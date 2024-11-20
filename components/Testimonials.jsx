// ./components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const testimonials = [
  {
    id: 1,
    text: "I lived here for 3 months. The rooms are of good condition and they provide all the facilities here. They also have mess facility. Working people can easily access the nearby metro stations and the IT park is at the walking distance too. You can consider this PG for a comfortable stay!",
    name: "GAURI TEJE",
    // position:"Student",
    rating: 5,
  },
  {
    id: 2,
    text: "Located in wadgaon Sheri at Holy Cross Road in Trimbalekshwar society. The whole area has a cool and friendly vibe.Talking about the Pg the beds are quite comfortable.The staff is very friendly and cooperative.Purifier is given for drinking water purposes.Overall a great stay for anyone outside Pune.",
    name: "YUDHI SHETTY",
    // position: "Creative Director",
    rating: 5,
  },
  {
    id: 3,
    text: "Lived here for 3 months in 3 sharing room. Food quality is medium and it will be provided twice a day, breakfast and dinner. Facilities like wifi, washing machine (common), fridge(common) makes it worth investing in. The people living here are good and friendly. You'll easily get used to it.",
    name: "VAISHNAVI GOBADE",
    // position: "Marketing Specialist",
    rating: 5,
  },
  {
    id: 4,
    text: "This PG is good enough. You can get 2 or 3 sharing rooms based on availability. Food quality is medium and it will be provided twice a day, breakfast and dinner. Facilities like wifi, washing machine, fridge makes it worth investing in. The people living here are good and friendly. You'll easily get used to it. You'll have a beautiful balcony to see the sunset and sunrise.",
    name: "VIKRAM SABLE",
    // position: "UX Researcher",
    rating: 5,
  },
  {
    id: 5,
    text: "The cleanliness and hygiene maintained here are top-notch, this PG apart is the warm and friendly management. They are always available and responsive to any requests,The food served is delicious and offers a good variety,I highly recommend it to anyone looking for a home away from home in Pune.",
    name: "HARSHAD KHOMANE",
    // position: "Software Engineer",
    rating: 4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    prevArrow: <button className="slick-prev bg-indigo-500 text-white p-4 rounded-full absolute top-1/2 transform -translate-y-1/2 left-5 z-10">❮</button>,
    nextArrow: <button className="slick-next bg-indigo-500 text-white p-4 rounded-full absolute top-1/2 transform -translate-y-1/2 right-5 z-10">❯</button>,
  };

  return (
    <section className="text-gray-600 body-font bg-gradient-to-t from-pastelAliceBlue from-10% to-white pb-8 md:py-20 ">
      <div className="container px-5 py-24 mx-auto lg:px-24">
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-600">Testimonials</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center lg:text-center sm:text-justify px-5 lg:px-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg text-justify md:text-center sm:text-justify ">{testimonial.text}</p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-customYellow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="inline-block h-1 w-10 rounded bg-secondaryPurple mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-bold title-font tracking-wider text-md">{testimonial.name}</h2>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
