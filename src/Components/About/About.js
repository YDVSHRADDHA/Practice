 
import Footer from '../Footer/Footer';
import './About.css';
 
import React, { useEffect, useRef } from 'react';
 
const About = () => {
  const image="data:image/jpeg;base64,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";
  const joinUsRef = useRef(null);

  
  return (
<>
 
 <div className="about-us">
       
 <section className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/564x/99/89/2f/99892f1b3c1c2119881a1e63ba6bde5c.jpg')` }}></div>
      {/* <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          <span className="inline-block transform  ">SRS Home Tutors</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Embrace the journey of learning and personal growth at any age. Whether you're starting out or advancing your skills, continuous self-development fuels success and fulfillment. Let’s achieve greatness together!
        </p>
        <a href="#contact" className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold text-lg animate__animated animate__fadeIn animate__delay-3s">
          Contact Us
        </a>
      </div> */}
    </section>
 

 

 
 
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Education is something no one can ever take away from you.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          "Education is not the filling of a pail, but the lighting of a fire. It’s not about memorizing facts, but understanding and thinking deeply."
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
          <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Our mission is to provide top-notch educational support to students and help them achieve their academic goals. We believe in fostering a love for learning and encouraging students to become independent thinkers.
          </p>
        </div>  
            <div className="mt-10  items-center gap-x-4">
          

            <h4 className="flex-none text-sm font-semibold leading-6 text-red-600">What’s included</h4>
              {/* <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3> */}
            <p className="mt-6 text-base leading-7 text-gray-600">
            "Education is one thing no one can take away from you."
            </p>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                {/* <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p> */}

                <img className='p-2 mt-2 lg-50%' src="https://i.pinimg.com/564x/ae/71/f9/ae71f9eaf471c388e4c7e893fc882bdd.jpg" alt="" />
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-darked bg-darked-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Our Team
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

 

    <div class="bg-white">
  <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
      <p class="mt-4 text-gray-500">Our tutoring services are designed to provide a comprehensive educational experience that goes beyond traditional learning. We focus on holistic development, making sure students are well-prepared for their academic and personal growth.</p>

      <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Experienced Tutors</dt>
          <dd class="mt-2 text-sm text-gray-500">Our tutors are highly qualified and experienced in their respective subjects.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Flexible Scheduling</dt>
          <dd class="mt-2 text-sm text-gray-500">We offer flexible scheduling options to meet your needs.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Personalized Learning</dt>
          <dd class="mt-2 text-sm text-gray-500">
          ur tutoring sessions are tailored to each student's learning style.
          6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Subject Specialization</dt>
          <dd class="mt-2 text-sm text-gray-500">Our tutors specialize in a wide range of subjects including Mathematics, Science, English, and more, providing expert guidance in each area.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Progress Tracking</dt>
          <dd class="mt-2 text-sm text-gray-500">We regularly monitor and report on each student's progress, offering insights and adjustments to keep them on the path to success.</dd>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">Extra-Curricular Guidance</dt>
          <dd class="mt-2 text-sm text-gray-500">Beyond academics, we also provide guidance in extra-curricular activities to help students develop well-rounded skills.</dd>
        </div>
      </dl>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
    <img src="https://i.pinimg.com/564x/8f/87/07/8f87076b9fdce63a484954ba7f6f2804.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100"/>
         <img src="https://i.pinimg.com/564x/0c/dc/d2/0cdcd20265862519b8e65ffc5c2fc675.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100"/>

      <img src="https://i.pinimg.com/564x/19/99/a9/1999a9699d3b1515d566939e7e634d0c.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100"/>
      <img src="https://i.pinimg.com/564x/b9/f5/50/b9f550eb3f24491aacf26311a3b864ae.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div> 
 
 

 
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {/* {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </div> 

 

    {/* <section id="our-team" class="bg-gray-100 py-32"> */}


    <h2 class="text-3xl font-bold text-center mb-8 text-red-600">Meet Our Team</h2>
        {/* <div class="container  mx-auto px-4"> */}
          

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* <!-- Team Member 1 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/1.jpg" alt="Team Member 1" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Sona Yadav</h3>
                    <p class="text-gray-700">Founder</p>
                </div>

                {/* <!-- Team Member 2 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/4.jpg" alt="Team Member 2" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Jane Smith</h3>
                    <p class="text-gray-700">Manager</p>
                </div>

                {/* <!-- Team Member 3 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/3.jpg" alt="Team Member 3" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Michael Davis</h3>
                    <p class="text-gray-700">Data Manager</p>
                   
                </div>

                {/* <!-- Team Member 4 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/2.jpg" alt="Team Member 4" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Peter Johnson</h3>
                    <p class="text-gray-700">HR</p>
                </div>

                {/* <!-- Team Member 5 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/5.jpg" alt="Team Member 5" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Shraddha</h3>
                    <p class="text-gray-700">Designer</p>
                </div>

                {/* <!-- Team Member 6 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/6.jpg" alt="Team Member 6" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Jatin</h3>
                    <p class="text-gray-700">Developer</p>
                </div>

                {/* <!-- Team Member 7 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/7.jpg" alt="Team Member 7" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">Sarah Johnson</h3>
                    <p class="text-gray-700">Content Writer</p>
                </div>

                {/* <!-- Team Member 8 --> */}
                <div class="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://spacema-dev.com/elevate/assets/images/team/8.jpg" alt="Team Member 8" class="w-full rounded-full mb-4"/>
                    <h3 class="text-xl font-semibold mb-2">David Wilson</h3>
                    <p class="text-gray-700">Seo specialist</p>
                </div>
            </div>
          {/* <div class="text-center mt-8">
            <a href="https://spacema-dev.com/elevate-free-tailwind-business-template/" class="bg-indigo-700 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-full inline-block">Free Tailwind Template</a>
        </div> */}
        {/* </div> */}
   
    
         
        {/* <!-- ======= Our Clients Section ======= --> */}
        <section class="min-h-screen grid grid-cols-4 lg:grid-cols-12 gap-14 max-w-screen-xl mx-auto py-10 px-7 md:px-16">
  <div class="col-span-4 lg:col-span-5 ">
    <div class="relative h-full">
      <img src="https://i.pinimg.com/564x/24/c8/14/24c81450119a0300b769bd62d33af216.jpg" alt="Leslie Alexander" class="w-full rounded-xl shadow-md md:rounded-2xl md:shadow-lg h-48 md:h-72 lg:h-full object-cover"/>
      <div class="absolute bottom-0 text-white bg-gradient-to-b from-transparent to-gray-700 rounded-2xl h-auto p-5 md:p-10">
        <span class="mb-2 inline-block text-sm font-light">Leslie Alexander</span>
        <p class="text-sm leading-relaxed">“I’m amazed that I’ve only recently found SRS Services. It’s exactly what I’ve been searching for in a tutoring service. I’m excited about the possibilities and grateful for this excellent solution!”</p>
      </div>
    </div>
  </div>
  <div class="col-span-4 lg:col-span-7 flex flex-col justify-center">
    <span class="inline-block mb-3 uppercase text-sm tracking-wide font-medium text-gray-900">Testimonial</span>
    <h1 class="text-4xl md:text-5xl md:leading-tight font-bold text-gray-900 xl:max-w-full">What do they think <span class="text-red-600">after using</span> SRS Services</h1>
    <div class="grid gap-10 lg:max-w-xl pt-10 md:pt-14">
      <div class="sm:flex gap-6 items-center">
        <img src="https://i.pinimg.com/564x/ae/0c/77/ae0c777e68b0be2203bc28d241cbbcb2.jpg" alt="Esther Howard" class="w-24 h-24 object-cover rounded-2xl flex-none"/>
        <div>
          <span class="mb-2 inline-block text-sm font-light mt-5 sm:mt-0">Esther Howard</span>
          <p class="text-sm leading-relaxed font-semibold text-gray-900">““You should try out SRS Services. They organize all the tutoring schedules very neatly. It's still in the early stages but it's great so far.”</p>
        </div>
      </div>
      <div class="sm:flex gap-6 items-center border-t border-gray-200 pt-12 sm:border-0 sm:pt-0">
         <img src="https://i.pinimg.com/564x/f4/b5/55/f4b5557ef2c22deb3ffd43cbceb5e524.jpg" alt="Eleanor Pena" class="w-24 h-24 object-cover rounded-2xl flex-none"/>
        <div>
          <span class="mb-2 inline-block text-sm font-light mt-5 sm:mt-0">Eleanor Pena</span>
          <p class="text-sm leading-relaxed font-semibold text-gray-900">“Wow, can't believe I have only just found SRS Services. I've been looking for such a reliable tutor service for years, super excited! Thank you, team, for developing this”</p>
        </div>
      </div>
      <div class="sm:flex gap-6 items-center border-t border-gray-200 pt-12 sm:border-0 sm:pt-0">
        <img src= 'https://i.pinimg.com/564x/6d/63/e0/6d63e0aba7529d07dac5fbe5a6f37613.jpg' alt="Dianner Russell" class="w-24 h-24 object-cover rounded-2xl flex-none"/>
        <div>
          <span class="mb-2 inline-block text-sm font-light mt-5 sm:mt-0">Dianner Russell</span>
          <p class="text-sm leading-relaxed font-semibold text-gray-900">“SRS Services, the platform I LOVE for finding the best home tutors, is now offering additional web-based features and I am soooo happy!”</p>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* <!-- End Our Clients Section --> */}


  

       {/* Join Us Today Section */}
       <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Join Us Today</h3>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Ready to take your education to the next level? Contact us today to find the perfect tutor for your needs.
      </p>
  
      <div className="text-center">
        <h4 className="text-xl font-bold mb-2">Contact Information</h4>
        <p className="text-gray-600 mb-1">Address: In front Of Katara Hospital, Katara Hills, Bhopal</p>
        <p className="text-gray-600 mb-1">Phone: <a href="tel:+9606180784" className="text-red-500 hover:underline">9606180784</a></p>
        <p className="text-gray-600 mb-1">Email: <a href="mailto:sona.star0126@gmail.com" className="text-red-500 hover:underline">sona.star0126@gmail.com</a></p>
      </div>
      <div className="mt-6 text-center">
        <h4 className="text-xl font-bold mb-2">Our Timings</h4>
        <p className="text-gray-600">Mon - Sun: 9:00 am - 11:00 pm</p>
      </div>
      <div className="flex justify-center mb-6">
        <button className="bg-red-700 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-red-600 transition duration-300">
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </div>
    </div>



   <Footer/>

    </>
  );
};

export default About;











































































































//  willll use if i needed




// import React from 'react'
// import './About.css'





// const About = () => {



  
//   return (

  //  <>
{/* <div className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <img src="https://i.imgur.com/WbQnbas.png" />
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text">
      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
      <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
      </h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
        doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
        voluptatum.
      </p>
    </div>
  </div>
</div> */}
  {/* Why us */}
{/* <section className="text-gray-700 body-font">
  <div className="flex justify-center mt-10 text-4xl font-regular">
    Why Us?
  </div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3" />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>
    </div>
  </div>
</section> */}

{/* Features you will have */}
{/* <div className="max-w-4xl mx-auto px-5 mt-16">
  <div className="text-center">
    <h2 className="font-semibold text-3xl">Features you'll love</h2>
    <p className="max-w-md mx-auto mt-2 text-gray-500">A responsive documentation template built for everyone who wants
      to create a plugin.</p>
  </div>
  <div className="grid md:grid-cols-2 gap-10 mt-10">
    <div className="flex gap-4 items-start">
      <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg></span>
      <div>
        <h3 className="font-semibold text-xl">Customizable</h3>
        <p className="mt-1 text-gray-500"> You don't need to be an expert to customize this plugin. Our code is very
          readable and well documented.</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg></span>
      <div>
        <h3 className="font-semibold text-xl">Fully Responsive</h3>
        <p className="mt-1 text-gray-500"> With mobile, tablet &amp; desktop support it doesn't matter what device
          you're using. This plugin is responsive in all browsers. </p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg></span>
      <div>
        <h3 className="font-semibold text-xl">Developer Support</h3>
        <p className="mt-1 text-gray-500"> Our plugins are supported by sponsors who provide community support.
          Sponsors will get email support on weekdays.</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg></span>
      <div>
        <h3 className="font-semibold text-xl">Cross Browser</h3>
        <p className="mt-1 text-gray-500"> We make sure our plugins are working perfectly with all modern browsers
          available such as Chrome, Firefox, Safari. </p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg></span>
      <div>
        <h3 className="font-semibold text-xl">Clean Code</h3>
        <p className="mt-1 text-gray-500"> We strictly follow a set of guidelines along with unit tests to make sure
          your implementation as easy as possible. </p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg></span>
      <div>
        <h3 className="font-semibold text-xl">Well Maintained</h3>
        <p className="mt-1 text-gray-500"> This templatte is actively maintained by the core plugin team. We are
          working on fixing each of the issues reported.</p>
      </div>
    </div>
  </div>
</div> */}

 {/** Extra features*/}
  
    
  {/* <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                </path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Natural Language Processing (NLP):
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              The AI product utilizes advanced NLP algorithms to understand and interpret human language,
              enabling it to accurately process and analyze text-based inputs.
            </p>
            <div className="mt-6">
              <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/login">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img loading="lazy" width={647} height={486} className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" style={{color: 'transparent'}} src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137" />
        </div>
      </div>
    </div>
  </div>
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                </path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Sentiment Analysis:
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              The product has built-in sentiment analysis capabilities, allowing it to determine the
              sentiment (positive, negative, or neutral) expressed in text or customer feedback.
            </p>
            <div className="mt-6">
              <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/login">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img alt="Inbox user interface" loading="lazy" width={647} height={486} className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" style={{color: 'transparent'}} src="https://images.unsplash.com/photo-1599134842279-fe807d23316e" />
        </div>
      </div>
    </div>
  </div>
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                </path>
              </svg>
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Natural Language Generation (NLG):
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              The AI product can generate human-like written content, summaries, or reports based on
              structured data or analysis results.
            </p>
            <div className="mt-6">
              <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" href="/login">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img loading="lazy" width={646} height={485} className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" style={{color: 'transparent'}} src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e" />
        </div>
      </div>
    </div>
  </div>
</div> */}

  
  {/* </>
)
}

export default About */}