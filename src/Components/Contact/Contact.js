import React, { useState } from 'react';
import Footer from '../Footer/Footer';

const Contact = () => {

  const [activeTab, setActiveTab] = useState('student');
  const [studentGrade, setStudentGrade] = useState('');
  const [studentTarget, setStudentTarget] = useState('');
  const [tutorSubject, setTutorSubject] = useState('');
  const [tutorLevel, setTutorLevel] = useState('');
  const [tutorLanguages, setTutorLanguages] = useState('');

  const [customStudentGrade, setCustomStudentGrade] = useState('');
  const [customStudentTarget, setCustomStudentTarget] = useState('');
  const [customTutorSubject, setCustomTutorSubject] = useState('');
  const [customTutorLevel, setCustomTutorLevel] = useState('');
  const [customTutorLanguages, setCustomTutorLanguages] = useState('');
  return (
    <>
{/* hero */}
<div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
         
          <h1 className="  text-gray-900 text-5xl  mb-4 font-extrabold">
          We’re here to <span className="text-red-700">Help!</span>
        </h1>
         
          <p className="mt-4 text-lg  mb-6 text-gray-600">
          "Whether you have questions about our services, need assistance with registration, or just want to know more about how we can support your learning journey, we're just a message away."
         </p>

          <a href="/contact" className="inline-block bg-red-700 text-white py-3 px-6 rounded-lg text-lg">
            Contact Us
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/564x/b6/de/0b/b6de0b58607cbd7c92017cd316cbb39a.jpg"
            alt="SRS Agency"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '500px', maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>

  

<section className="flex flex-col md:flex-row bg-white p-10 rounded-lg shadow-lg" id="registration">
      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Register for a <span className="text-red-500">personalized</span> experience
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li className="mb-3">
            <span className="text-red-500">Select your role</span> and fill out the appropriate form
          </li>
          <li className="mb-3">
            Get <span className="font-semibold">personalized assistance</span> tailored to your needs
          </li>
          <li>
            Enjoy <span className="font-semibold">exclusive offers</span> and benefits
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
        <div className="tabs mb-6">
          <ul className="flex border-b">
            <li
              className={`flex-1 text-center py-2 cursor-pointer ${activeTab === 'student' ? 'border-b-2 border-red-600 font-semibold' : 'text-gray-500'}`}
              onClick={() => setActiveTab('student')}
            >
              Student Registration
            </li>
            <li
              className={`flex-1 text-center py-2 cursor-pointer ${activeTab === 'tutor' ? 'border-b-2 border-red-600 font-semibold' : 'text-gray-500'}`}
              onClick={() => setActiveTab('tutor')}
            >
              Tutor Registration
            </li>
          </ul>
        </div>

        {activeTab === 'student' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Student Registration</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Enter mobile no."
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <select
                value={studentGrade}
                onChange={(e) => {
                  setStudentGrade(e.target.value);
                  if (e.target.value === 'other') setCustomStudentGrade('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select your grade</option>
                <option value="Class II">Class II</option>
                <option value="Class III">Class III</option>
                <option value="Class IV">Class IV</option>
                <option value="Class V">Class V</option>
                <option value="Class VI">Class VI</option>
                <option value="Class VIII">Class VIII</option>
                <option value="Class IX">Class IX</option>
                <option value="Class X">Class X</option>
                <option value="Class XI">Class XI</option>
                <option value="Class XII">Class XII</option>
                <option value="other">Other</option>
              </select>
              {studentGrade === 'other' && (
                <input
                  type="text"
                  placeholder="Specify your grade"
                  value={customStudentGrade}
                  onChange={(e) => setCustomStudentGrade(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              )}
              <select
                value={studentTarget}
                onChange={(e) => {
                  setStudentTarget(e.target.value);
                  if (e.target.value === 'other') setCustomStudentTarget('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select your target</option>
                <option value="NEET Crash">NEET Crash</option>
                <option value="JEE">JEE</option>
                <option value="JEE/NEET Foundation">JEE/NEET Foundation</option>
                <option value="ICSE">ICSE</option>
                <option value="MPBOARD">MPBOARD</option>
                <option value="CBSE">CBSE</option>
                <option value="Extra">Extra</option>
                <option value="Olympiad">Olympiad</option>
                <option value="Courses for Kids">Courses for Kids</option>
                <option value="Skill Building Short Term Courses">Skill Building Short Term Courses</option>
                <option value="Learn English">Learn English</option>
                <option value="Learn Math">Learn Math</option>
                <option value="Coding Classes">Coding Classes</option>
                <option value="other">Other</option>
              </select>
              {studentTarget === 'other' && (
                <input
                  type="text"
                  placeholder="Specify your target"
                  value={customStudentTarget}
                  onChange={(e) => setCustomStudentTarget(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              )}
              <button className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold">
                Register as Student
              </button>
            </form>
          </div>
        )}

        {activeTab === 'tutor' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Tutor Registration</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Enter mobile no."
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Enter your qualifications"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <select
                value={tutorSubject}
                onChange={(e) => {
                  setTutorSubject(e.target.value);
                  if (e.target.value === 'other') setCustomTutorSubject('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select your subject expertise</option>
                <option value="Accounts">Accounts</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Economics">Economics</option>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Engineering">Engineering</option>
                <option value="other">Other</option>
              </select>
              {tutorSubject === 'other' && (
                <input
                  type="text"
                  placeholder="Specify your subject expertise"
                  value={customTutorSubject}
                  onChange={(e) => setCustomTutorSubject(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              )}
              <select
                value={tutorLevel}
                onChange={(e) => {
                  setTutorLevel(e.target.value);
                  if (e.target.value === 'other') setCustomTutorLevel('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select the level you teach</option>
                <option value="Class II">Class II</option>
                <option value="Class III">Class III</option>
                <option value="Class IV">Class IV</option>
                <option value="Class V">Class V</option>
                <option value="Class VI">Class VI</option>
                <option value="Class VIII">Class VIII</option>
                <option value="Class IX">Class IX</option>
                <option value="Class X">Class X</option>
                <option value="Class XI">Class XI</option>
                <option value="Class XII">Class XII</option>
                <option value="other">Other</option>
              </select>
              {tutorLevel === 'other' && (
                <input
                  type="text"
                  placeholder="Specify the level you teach"
                  value={customTutorLevel}
                  onChange={(e) => setCustomTutorLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              )}
              <select
                value={tutorLanguages}
                onChange={(e) => {
                  setTutorLanguages(e.target.value);
                  if (e.target.value === 'other') setCustomTutorLanguages('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Languages you teach</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="other">Other</option>
              </select>
              {tutorLanguages === 'other' && (
                <input
                  type="text"
                  placeholder="Specify the languages you teach"
                  value={customTutorLanguages}
                  onChange={(e) => setCustomTutorLanguages(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              )}
              <button className="w-full bg-red-700 text-white p-3 rounded-lg font-semibold">
                Register as Tutor
              </button>
            </form>
          </div>
        )}
      </div>
    </section>


 


  {/* Location */}
  <section className="bg-gray-100">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
      <p className="mt-4 text-lg text-gray-500">
        Ready to take your education to the next level? Contact us today to find the perfect tutor for your needs.
      </p>
    </div>
    <div className="mt-16 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus" 
            width="100%" 
            height={480} 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Google Map"
          />
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Join Us Today</h3>
          <p className="text-lg text-gray-600 mb-6">
            Ready to take your education to the next level? Contact us today to find the perfect tutor for your needs.
          </p>
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold mb-10">
            Contact Us
          </button>
          <div>
            <h4 className="text-xl font-bold mb-2">Contact Information</h4>
            <p className="text-gray-600">Address: Infront Of Katara Hospital, Katara Hills, Bhopal</p>
            <p className="text-gray-600">Phone: 9606180784</p>
            <p className="text-gray-600">Email: sona.star0126@gmail.com</p>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-bold mb-2">Our Timings</h4>
            <p className="text-gray-600">Mon - Sun: 9:00 am - 11:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>

  )
}

export default Contact;