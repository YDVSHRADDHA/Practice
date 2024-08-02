import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black mt-60 relative p-8">
      <div className="top_footer flex justify-center items-center rounded-lg bg-red-600 text-white shadow-md w-11/12 mx-auto -mt-32 mb-8 relative z-10">
        <figure className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <img src="https://media.licdn.com/dms/image/D4D0BAQFecOaF7G8Gdg/company-logo_200_200/0/1719337425954?e=1730937600&v=beta&t=soxZPVUgaGuQ1UNOtQi1-REdHSmR-yeaLzczrpVmSDA" alt="Logo" className="w-12" />
        </figure>
      </div>
      <div className="footer_body flex flex-wrap justify-between pt-12">
        <section className="flex flex-col mb-6 w-full md:w-2/5 lg:w-1/4 px-4">
          <figure className="flex items-center mb-6">
            <img src="https://media.licdn.com/dms/image/D4D0BAQFecOaF7G8Gdg/company-logo_200_200/0/1719337425954?e=1730937600&v=beta&t=soxZPVUgaGuQ1UNOtQi1-REdHSmR-yeaLzczrpVmSDA" alt="Logo" className="w-12" />
            <figcaption className="ml-4">
              <strong className="block text-red-600 text-xl">SRS</strong> 
              <span className="text-black">Home Tutors</span>
            </figcaption>
          </figure>
          <a href="#" className="block mb-4 hover:text-red-600">
            <i className="fa fa-map-marker mr-2" />
            Plot No: 86 Sector 3 Global Park City, Katara Hills, Bhopal - 462043 (Infront Of Katara Hospital)
          </a>
          <a href="mailto:sona.star0126@gmail.com" className="block mb-4 hover:text-red-600">
            <i className="fa fa-envelope-o mr-2" />
            sona.star0126@gmail.com
          </a>
          <a href="tel:9606180784" className="block mb-4 hover:text-red-600">
            <i className="fa fa-headphones mr-2" />
            9606180784
          </a>
        </section>
        <section className="flex flex-col mb-6 w-full md:w-1/4 px-4">
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <a href="/contact" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Book Demo
          </a>
          <a href="/contact" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Openings
          </a>
          <a href="/contact" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Student registration
          </a>
          <a href="/contact" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Tutor registration
          </a>
        </section>
        <section className="flex flex-col mb-6 w-full md:w-1/4 px-4">
          <h3 className="text-xl font-bold mb-6">Other Links</h3>
          <a href="/about" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            About us
          </a>
          <a href="/contact" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Contact us
          </a>
          <a href="#" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Raise a ticket
          </a>
          <a href="#" className="block mb-4 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            Terms & conditions
          </a>
        </section>
        <section className="flex flex-col mb-6 w-full md:w-1/4 px-4">
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <p className="mb-4">Stay Connected, Stay Tuned</p>
          <div className="flex">
            <input type="email" name="newsletter" placeholder="Your Email Address" className="p-4 rounded-l-lg bg-gray-200 text-black border-0 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105" />
            <button className="bg-red-700 text-white py-4 px-6 rounded-r-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </section>
      </div>
      <div className="flex flex-wrap justify-between items-center pt-6 border-t border-gray-300 mt-6">
        <section className="text-center md:text-left w-full md:w-auto">
          <p className="text-black">&copy; 2024 All rights reserved || inspiration</p>
        </section>
        <section className="flex space-x-3 mt-4 md:mt-0">
          <a href="#" className="w-10 h-10 bg-red-700 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" className="w-10 h-10 bg-red-700 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            <i className="fa fa-whatsapp" />
          </a>
          <a href="https://www.justdial.com/Bhopal/SRS-Home-Tutors-Infront-Of-Katara-Hospital-Katara-Hills/0755PX755-X755-240426141338-M3P6_BZDET" className="w-10 h-10 bg-red-700 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            <i className="fa fa-dribbble" />
          </a>
          <a href="https://www.linkedin.com/company/srs-home-tutors/about/" className="w-10 h-10 bg-red-700 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
            <i className="fa fa-linkedin" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
