import React, { useState, useEffect, useRef } from 'react';

const TeacherScroller = ({ teachers }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef(null);

  const handleScroll = () => {
    if (scrollerRef.current) {
      const scrollLeft = scrollerRef.current.scrollLeft;
      const itemWidth = scrollerRef.current.firstChild.clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollBy = (distance) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.addEventListener('scroll', handleScroll);
      return () => {
        scrollerRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center p-5 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Teachers that <span className="text-red-500">inspire</span>
        </h2>
        <p className="text-gray-700 mt-4">
          Embrace the journey of learning and personal growth at any age. Whether you're starting out or advancing your skills, continuous self-development fuels success and fulfillment. Let’s achieve greatness together!
        </p>
      </div>

      <button
        className="absolute left-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer shadow hover:bg-gray-100"
        onClick={() => scrollBy(-200)}
        style={{ top: '50%' }}
      >
        &#60;
      </button>
      <div className="flex overflow-x-auto scroll-smooth" id="scroller" ref={scrollerRef}>
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className={`w-52 mx-2 text-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ${activeIndex === index ? 'bg-red-100' : ''
              }`}
          >
            <img src={teacher.image} alt={teacher.name} className="w-full h-32 object-cover rounded-full mb-4" />
            <div className="text-gray-00">
              <h3 className="mb-2 text-xl font-semibold  text-gray-700">{teacher.name}</h3>
              <p className="mb-1  text-gray-700">{teacher.subject}</p>
              <p className="mb-1 text-gray-700">{teacher.experience} years exp</p>
              <p className="mb-2 text-xl font-bold  text-gray-700">{teacher.university}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer shadow hover:bg-gray-100"
        onClick={() => scrollBy(200)}
        style={{ top: '50%' }}
      >
        &#62;
      </button>
    </div>
  );
};

export default TeacherScroller;
