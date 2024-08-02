// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import srs from '../Navbar/srsdp.jpeg';
import TeacherScroller from './TeacherScroller';
import Footer from '../Footer/Footer';
import './CoursesForKids.css';
 

const teachers = [
  {
    name: 'Rachita Sachdeva',
    subject: 'Chemistry master teacher',
    experience: 5,
    university: 'IIS University',
     image: './../images/srsE.png'
  },
  {
    name: 'Harsh Priyam',
    subject: 'Math master teacher',
    experience: 7,
    university: 'BIT Durg',
  
     image: './../images/srsW.png'
  },
  {
    name: 'Nabamita',
    subject: 'Science master teacher',
    experience: 3,
    university: 'JRF, IIT Guwahati',
    image: './../images/srsU.png'
  },
  {
    name: 'Ritka Sharma',
    subject: 'Physics master teacher',
    experience: 8,
    university: 'Delhi University',
    image: './../images/srsZ.png'
  },
  {
    name: 'Bhanu Rao',
    subject: 'Physics master teacher',
    experience: 8,
    university: 'Delhi University',
    image: './../images/srs2.png'
  },
  {
    name: 'Siya ',
    subject: 'Physics master teacher',
    experience: 8,
    university: 'Delhi University',
    image: './../images/srs1.png'
  },
];

const Home = () => {

  return (

 <>
 

 <div>
 
  {/* <menu id="menu" className="side_menu">
    <a href="/" className="close"><i className="fa fa-times" /></a>
    <strong className="fixed_flex logo"><img src={srs} alt="logo" loading="lazy" /></strong>
    <br />
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#">Basic Parameters</a></li>
      <li><a href="#">Notifications</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Features</a></li>
      <li className="dropdown">
        <a href="javascript:void(0)">Mandatory Disclosure</a>
        <aside>
          <a href="#">Society registration</a>
          <a href="#">NOC</a>
        </aside>
      </li>
      <li><a href="/about">About us</a></li>
      <li className="fixed_flex"><a href="javascript:void(0)" className="btn btn_1 chat_popup">SignUp/LogIn</a> <a href="#" className="btn btn_2 chat_popup">Admission</a> </li>
    </ul>
  </menu> */}

{/* Hero */}

  <header className="flex">
    <article>
      <h1 className="title big">Igniting Minds, Sparking Success</h1>
      <p>SRS :Committed to nurturing academic excellence in students across all levels. With a dedicated team of expert tutors, we provide tailored learning experiences that cater to individual learning styles and needs.</p>
      <Link to="/about" className="btn btn_3">Explore more</Link>
    </article>
    <section className="flex">
      <aside className="padding_1x">
        <h2 className="sub_title">Who We Are!</h2>
        <p>Our mission is to inspire confidence, foster critical thinking, and ignite a lifelong love for learning.  </p>
        <a href="/about"><i className="fa fa-angle-right" /></a>
      </aside>
      <aside className="padding_1x">
        <h2 className="sub_title">What We Do!</h2>
        <p>we're dedicated to helping our students achieve their academic goals and excel in their educational journey</p>
        <a href="/about"><i className="fa fa-angle-right" /></a>
      </aside>
      <aside className="padding_1x">
        <h2 className="sub_title">Why Choose Us</h2>
        <p>Unmatched quality and results-driven tutoring that prioritizes your child's academic growth and success.</p>
        <a href="/about"><i className="fa fa-angle-right" /></a>
      </aside>
    </section>
  </header>

 



      <div className="explore-courses results-section">
      <div className="results-header">
        <h2>Inspired students. Inspired <span className="highlight">results</span></h2>
        <p>Our results reflect the passion, hard work, and efforts of our students and teachers.</p>
        {/* <div className="buttons">
          <button className="explore-courses">Explore courses</button>
          <button className="view-results">View our results</button>
        </div> */}
        <div className="categories">
          <button>All</button>
          <button>IIT JEE</button>
          <button>NEET</button>
          <button>10th Board</button>
          <button>12th Board</button>
          <button>NTSE</button>
          <button>Olympiad</button>
        </div>
      </div>
        <h2>Explore courses</h2>
        <div className="course-cards">
          <div className="card">
            {/* <img src='https://www.pracademy.in/blog/wp-content/uploads/2019/04/best-pte-center-gurdaspur-ielts-institute-dinanagar-dinanagar-ielts-academy-ielts-coaching-in-dinanagar-ielts-center-near-dinanagar-dinagar-ielts-ceenter-pte-in-dinanagar-ielts-in-d.png'  alt="Teacher 1" /> */}
            <h3>Competitive Exams</h3>
            <p></p>
            <div className="tags">
              <span>JEE</span>
              <span>NEET</span>
              <span>JEE/NEET Foundation</span>
              <span>EAMCET</span>
              <span>Olympiad</span>
            </div>
            <button  className="demo-button">Explore Courses</button>
          </div>
          <div className="card">
            {/* <img src= 'data:image/jpeg;base64,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' alt="Teacher 2" /> */}
            <h3>School Tuition</h3>
            <p>Class 1 - 12</p>
            <div className="tags">
              <span>CBSE Board</span>
              <span>ICSE Board</span>
              <span>MPBOARD Board</span>
            </div>
            <button className="demo-button">Explore Courses</button>
          </div>
          <div className="card">
            {/* <img src= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxAPDw8NDw8OEA8QDxAQDw8PEA8QFREWFxUWFRUYHSggGBolGxUVITEhJikrLi4uFyAzODMtNygtLisBCgoKDg0NFRAQFSsdIB0tKysrKysrKystLS0tLS0tLSstLSstLSstLS0tLSsrKystOC0tLS0tLS0rLS0tLSstN//AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAABBAADBAYGBgcGBwAAAAABAAIDEQQSIQUGMUEHUWFxgZETIjKhscEUI0JScpIkYoKywtHwM1NjorPhFTRUc5Oj0v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgMAAgIDAAAAAAAAAAABAhEDITESIgQyQWFx/9oADAMBAAIRAxEAPwDqiEJqhIQhUNCE6QATQAmoEgJpKhqKaEAkmhEJRKkrXaONjw8bpZXBjGCySoqsSqcmJY32nsbfC3AfFcg3j6UJi8tw7Wxxg6F1l7h29S03aG2ZcU4ve70jv1ta7hegU2unpNrgdQQR2G015w2Vt/F4RwdBNLGAdW3mjPew6Lq+5/SDHjC2DEBsOIdQaQfqpj1NJ9l3YfAlXZpvCEgU0QihNAQJRU1GkCSUkkESoFVColUQKiVIqJUECoOVQqBVRBJSQgyyE0IpIpOkwEAApAIATpAkJoQJJSSQKkJoQJCaioIvcACToBquGb+b5HHYkwxG8NC4hlXUjhoXns6v91vHS7vCcNhPo8bssuKBaTdFsX2vPh4lci3Q2K7FzV9hurncQB1Acys5ZajeOO6lg9iuxMpAaS3rAOhVzjdy8RCM8YJrzXYtjbJjiYGxsA01NalZOXZ+lkBeW81t6j2T8ea7rz0WkinAseNCDYKtQ8tNeR6iuy7z7vRzxk5QJGg5XAUfNck2jhS0usatJDl14+SZOPLxXDt2Ho13t+mxHDzu/SYG+0eM0Y0zfiGgPeDzW8LzFsXa0mFnjmiP1kLg5oug8Di094sL0ZsDbEWOw8eJhNskGoNZmOHtNd1EH5da7SuFjIppIVZCEIQJJNJAioFTKiVRAqJUiolQQKg5TKgUEUIQgzFIUkqVAmgJhQCaEKgQmkoEhNCoSSaSASKas9q41uHhfK77DSQObncGgdpNDxUHBulzaBn2hM2/VhLYm/s+177WZ6MMMGQelcQ0SOdRJAFDTitB29iDJiJXuNl0jyTdgm9a7LtdC3XibHs6CR8BnDY7EeXOMxs3l615uW/V6+Gfd0/ZVOFtc0jsIKyMrgRxC5NhsW0y+rgcRhiBmL4i5rQNOQNE68Bqt5+kubhjIbtuhB4nRcf16en9rtW2mwAEkgDmSQAuObzMYMTIGua5r7NtIIur5eK2Xa77zSyw4jE5T7NucASCQAzSxpxWpbwTB+V7cMcOWEZhlygg8OwrWE1ds8l3NNUxbC1x7FuPRjvWcFicj3fo+IIbK3kH/ZeO34+VattBtmxzF9/WobIgD5mtsgOLRfUS4ar0yvDZ29UtdYBGoPA9YUli92JHOwOFc72nQRE/lCyi6OYQhJAFJNJAiolSKgUESolSKgUESoFTKgUEUkJKozqSaEUgpIQoBCAmqBCEIEUIKEAkU0lAlrO/uEmkwx9BqRYI1JbYrOAOJAsDqu1s6xO8O2mYOF7yC94FtjBAsnhmcdGjt6gdDRS+LPXmfb2zn4aURvLCRTraczcvL4Lue6WGAgYw1WVp8CLHxXGttYh2LllxD6c6WQkkCm0OQHVquk9H+0ZZML6zs743uj1qw0VkHkQF5eWfV7fx7rL/AFvU2BjZxo9QLide5We0P+XOmhNrGM2vC15jnlLcQ4XlIdbG8sorh2q12pjHOjbG3FxiMG8xHr91V8lw1t69VseBgjlYLPrAUacQVgd7NmwmCRmUU4EE8TfI2rCPbuGgAacQ58j3ccrsznHqAHZwS3kxMhjoirYXHrrhw8U72nUl247iXcR9qN7m348fd71HAS5JWPHAOBIVB7vXlPEGRwPdayOwNlvxWIjhjol72g9WS/WJ6tLXt1qPmW7r0tsqMNghaODYowO7KFdqnCzK0NHBoAHcAqi6OQtK0JEoHaSVotAKJTtIoiJUCplQKKiVTKmVAoiCE0lRnUJIRUkJIQMIStCBhNJCASQhAFCEIEue9LZe3B5W3csrg5w+7kc75UuhLD70YeOTDPEurQQQOZdwaB22VnLxZ688wEDKzqaPe7VZnczeBuDndHIahnIGY8GP4AnsPDyWO23HGyctjrQO0GobpdXz4cVhpMM6VxaPtOI7hqSfCrXHUs1Xo3Zqx3zFwib0czK9JGba74juKqy7RxeWsrLojN6KG9TfGq9yxW7+JMUUZdZY5jL50a4rYjtPD5Pabw42AvNjlZ1Hvllk3JWrtgd6U4jEEFzR7RApoHu8gtS353lDWOAP1kvst+60eyPDie0rLb4bwB/1UGoHtEcFyrbJLpjmJJA1PaV1458ruvPz52TotisDy9juYv3/ANeaz27s5wOKjlouDHesBxLCCD46+5YTZVNlaD9sEd1jT30sji5eFmuortk8uM6eh9j7WixMTZI3tcCOR1B6j2rIWvOGwdvTYSZr2PLdRfHK4do5rvG7u2Biog6srwBmb1XwK1jlvpjLHTLqJKdqJK2wEkWo2qJWglRtFoAqJTJUSgiVAqZUHIiKSLQgzaEk0U01FNA0IQoBNJBQJCSLQMlIlRkeGgucQGtBLieAAFklcY2v0tYt8rxhI8PHAHVG6SN75i3k4kuyi+NZdOGqDsz5A0EkgAaknQBcy6Rd94cv0fDShzmk55Ges1potppGjjqeHBaBtPffaWIBbJi5MpvRjIoqvqLGg+K1nMXHMSVmy1qanbIwEZnOcSSWuAs2dRqT2/7rK7pYYz4mRoFiPCYqU/iEenuKwGHdRcf1T58l0DoVwgkxWKv/AKVzfz2D8Fn4+t/Lxt27zM+GYD9wfBRxuzgRRCrbqsLIwwggsLmEHiMunyWXkhvXkvnb7fSkaNidjhoJDdT2LmO2YC2Ulwpz3SGu51AeQXozA7NBcZ3j1ItWA/ak5eAXCd9cGWzgH2s+IJHUDKS0+Wq9fDLrdeTnym/jGtxjS+dq/wDSZ2NzH1iDr10VTw+GJsOGjuehB8lJ+EeC1o0LSaK61xnSU8ekdEFzm2eVHO4a+Q813Tc2Ethw7iCHGMRPHa0OJB7iNO9cWwzwC4yR5yfuuDXjuFEHuC6xuTvdgpYooXTsjnbmtkp9Hnc4k21x9Vx14A2mPqZ+N6tK1G0rXVyMlK0rUSUErRahaLQSJSJStRJVDJUSUrUSUAhRQiM6gISBRUk0kKBoStNUCRQkSgEJICg0vpW3gGEwDoWn67HB8LBerYq+tf8AlIb3vC4OPmVs3SPtv6btGZwNwwH6PBxrLGTmd+0/Ob6svUtYB496ohOeAHF2ngmW6UFAG3n9UV4lV2oqDGnq8V0noXw73zYz0chY4RQCxocpe8mjyPqgeK52F1zoRgyQYzEHS5WNBr7LGWf3is3xY3LaWz/QPY8a+k9Vx+84DQntr4Krg4y5zWE0CePOqtTxb5ZJLkaGRt1hbdk2KLnHr4iuV9qQcWmxxGoXz85Pm+lx7vH/AGvMZmbGRX1baA05kgadeq4L0nH9Pc3hkijB/FqfgR5L0BNLnMd6D+0cDyDRfxIXnTf7E+l2ni38jIA0dgY0D4L34vnZNZgac1cdCRfA1yKuZBbQ5hdqLAvVvWPMKMWjr6gfgUy6mDtJPnXzCmU7axvS1dM7QnUqQObiBrxUJJMxAHAaKodAtYxjKtn3A3imw2Pw0ZllOHlc3DuiL3ujAkNMLWk02nlpsdvWu8WvL0MxjeyUcYntkHe1wcPgvTjZA4Bw4OAI7iqyqEqJKVqJKCVotQtK1RMlK1ElK0EiVAlIlIlA7QoWhEbCUIKSKkEWo2i0Ek1FNAFRKaRUCWF3z2t9C2ficQ01I2PJCf8AGkIZGfBzgfBZlct6b9raYXBNPEuxMoB5AFkYI5gkyH9gIOTVQAHKq7kuZ803qF6FVUcPzPWSrkKhHoAq4QSC7p0RQhmzGAggyvkfZ4OBcarwpcKJoE9QXpLcvB+hwOHjrhEwHyUqxl5487SODm6gfPuVjhXxk53uDWizR4kjkBz1WZiZZ7uHYrWOFjXSDKOIdw5EfztccuOWyu2PJcZYx2V8l3YdOSAObIifW89AvOe8kufG4t3I4rEV+ESuA9wC9OsFF0h6vIBeVMRNne5/945z/wAxv5rrjHLKoAqhO4udR5Cz8lXVvHq5x7a8ldM7U4Bqe8qpd/FUoj7XeVUj4X2IIuF2vRG6eL9Ns/ByE2XYaHMf1gwB3vBXndvC+tdq6KcVn2Wxt2YZZ4+4Zs49z0RudpWoWlaCZKVqFotBO0iVG0rVEiVAlIlRJRDzIUCUkG0FCCkihCLQgaaSSB2kSkkVABect+drfTNpYmYG2CQxRf8Aai9QV2Egu/aXct89qfQ9n4qcEB7YiyI/4r/UZ/mcD4LzfVUBwAoIBxUORQ/gUR8AqqQVYcFRHFVWoLnAw+klij/vJY2fmeB816gwUeSNjfutA9y85blRB+0sEw8DO0/lBd/CvSIeFKRe4QaEqhiB9Y78Efxeq+FcMvmraY3I/syj/KD/ABLKxY7cxIiwuIkOgjgmff4Y3H5Lyu0VQ6gAvR3SVifR7Jxp4Z4hF/5HtZ/EvOS1C0OdQJ6lRi0b71Kc6V1kBRcVUW7Do7xVU8AOugqDODu1XDePcoiThouo9Dc36NimfdxDXfmiA/hXLZDoui9DcmuNb2YZ3+qD8kV07MlmVO0WiJ2i1C0rQVLSJUbStVDJUSUrSJQO01TJSQbYkmVFA0wUkBBJCEiigqJTKiT/AF1IOTdNO2yZIcAw6MAxE3a45mxt8BmPi1cvKyO8u0/peMxGJJ0mlcWa8Ix6sY/KGrFOlQB4kJxeyFQdMqsLtB4KKqNU2HioBSadVRs3R3X/ABXCE/Ze8/8AqePmvQonH6p8QvPG4EwZtKBzuAzX5V816HYGPFgAqUX8LhlHLnp3rHyzn0koFABzO/8AsmK/gjblFD+rWOfhwZ5yb4x/6bVlWi9MeNy7M9Hes2IhaO3Lmk/gC4eF1np0lDW4KEfadPKf2Qxo/eK5La1EUZT6wHUL80nlRjNknr+CJDoURQjPxCumqzZy71dsSAl5LfeiF9YjFDkYIz4iQ/zWgy8At96Ih9dij1QxDzef5IOoWi1C0ZkE7RahaLRE7RahaCVQ7UbStRJQStJRtCDb0kWkSgdqQUEwgkhJCKCtY6RdtuwOzpZI69LKRBETwa6QG3eDQ499LZiVzvptkIwEAA0di2WeqoZaQcTdDfPhw0Cg5hH9UrlpQ4ILBx/rkqzSrjDhjJYnvZnYySNz2CgXsDgXNHeLCtXSWSeZJJ8SoLlhUhxCoQuVW1VbBuZGXY2MDkHH3hehsHDka0jqFjlwXCujGPNjXOq8rW+8n+S7j/xChRYVBncKfVHj8VjsfiWROle5wAtnH8ATwWIztsGgCtK32kP0trbOV0THdl5nt+Sysc96W9rDE42MNvLDAGjvc9xPuyrQsQ+mnt0Wb3rlzYyfmGuDB+y0A+8Fa/ObcB1fFaROMU1QlOiqO4KhKdEqKbFcNcraPVXTGdqAebat/wCiL28Z+DD/AL0i0FwFLf8AokiIGLk+yTDGPxDO4+5wQdHtFqnmTtBO07VMFO0RO0WoWi1QyVElIlK0DtJRtCDckFCEBaYQhBJJNCCJWJ3k2NHj8LLhZNBILY/nHINWPHcfMWOaaEV5wx+Efh5pIJQBJC90bwCCMzTRo8wqVoQikqEsQu+BQhBTb6pVfMmhBn9z8XiIJ2yQOYLNEOFtdQ58+fWu2bO3njkjH0mExGtXMIkZ/wDXuSQoL12MaAXROLmkWNCPitf2y/0kkT5QQA1wsEHQEHXz96aFn+Vjie0X+knmcPtzSkdxea+KxEJs31oQtMq0pVpK5NCgccars6rv4poVCJXWejmEM2fG4CjK+V7j1kPLB7mhCFBs+ZGZCEDBTtCFUO07SQqESo2hCCNoQhB//9k=' alt="Teacher 3" /> */}
            <h3>Courses for kids</h3>
            {/* <p>Courses for kids</p> */}
            <div className="tags">
              <span>Short Term Courses</span>
              <span>Learn English</span>
              <span>Learn Math</span>
              <span>Learn Code</span>
            </div>
            <button  className="demo-button">Explore Courses</button>
          </div>
        </div>
      </div>
    
   

   


<div className="demo-booking-section">
      <div className="demo-text">
        <h2>Book your <span className="highlight">Free Demo</span> session</h2>
        <p>Get a free academic counselling session</p>
        <button className="demo-button">Book a free demo</button>
      </div>
      <div className="demo-image">
        <img src='https://educationandbehavior.com/wp-content/uploads/2017/08/girl-studying.jpg' alt="Demo session" />
      </div>
    </div>
 

    <TeacherScroller teachers={teachers} />
 

    <div className="results-section">
      <div className="divisions division_4" onmousemove="animate_balls(event)">
      <div className="title_header">
        <h2 className="title medium">We promise best future for your kids</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <aside className="fixed_flex">
          <a href="/gallery" className="btn btn_1">Explore more</a>
          <i className="fa fa-angle-right" />
          <a href="javascript:void(0)">Gallery Portfolio</a>
        </aside>
      </div>
      <div className="cards">
        <span className="ball" />
        <span className="ball" />
        <span className="ball" />
        <span className="ball" />
        <section className="fixed_flex">
          <figure className="flex_content">
            <img src="https://i.pinimg.com/564x/11/79/9c/11799c0d9e0afd37008866d503cb6316.jpg" alt loading="lazy" />
          </figure>
          <figure className="flex_content">
            <img src="https://i.pinimg.com/564x/d3/71/0c/d3710c2555bfb5bf18d3ddf7238885fd.jpg" alt loading="lazy" />
          </figure>
          <figure className="flex_content">
            <img src="https://i.pinimg.com/564x/6a/a7/b8/6aa7b8a12217ab1e060780a6be0386bc.jpg" alt loading="lazy" />
          </figure>
          <figure className="flex_content">
            <img src="https://i.pinimg.com/564x/0c/dc/d2/0cdcd20265862519b8e65ffc5c2fc675.jpg" alt loading="lazy" />
          </figure>
        </section>
      </div>
    </div>
    
    </div>

   
    <div className="max-w-7xl mx-auto py-12 bg-gray-500">
  <div className="relative bg-white-800 rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-opacity-75 bg-gradient-to-r from-white-800 via-transparent to-transparent" />
    <div className="relative z-10 p-8 md:flex md:items-center md:justify-between">
      <div className="text-white md:w-1/2">
        <h1 className="text-4xl font-extrabold">
          SRS <span className="text-red-700">Culture</span>
        </h1>
        <p className="mt-4 text-lg">
          "There is a certain personality and behaviour that an individual
          exhibits. We believe that an organisation also has similar traits, and
          culture is an expression of that."
        </p>
        <p className="mt-4 font-semibold">-Sona Yadav</p>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          <img
            className="rounded-md object-cover"
            src="https://i.pinimg.com/564x/20/84/22/2084220e18961fba23a26966b3cd95cd.jpg"
            alt="SRS Team"
            width={350}
          />
         
        </div>
      </div>
    </div>
  </div>
</div>

  <Footer/>
</div>


</>
       
  )
}

export default Home;