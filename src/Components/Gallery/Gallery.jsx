import React from 'react'
import Footer from '../Footer/Footer';

const Gallery = () => {
    const image="data:image/jpeg;base64,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";
 
  return (
    <>
   {/* Banner */}

   <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
         
          <h1 className="  text-gray-900 text-5xl  mb-4 font-extrabold">
          SRS <span className="text-red-700">Culture</span>
        </h1>
         
          <p className="mt-4 text-lg  mb-6 text-gray-600">
          "There is a certain personality and behaviour that an individual
          exhibits. We believe that an organisation also has similar traits, and
          culture is an expression of that."        </p>

          <a href="/services" className="inline-block bg-red-700 text-white py-3 px-6 rounded-lg text-lg">
          SRS Services
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/474x/a0/0b/b1/a00bb18cd3df3a5680fe6cc4cfd81e27.jpg"
            alt="Digital Agency"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            style={{ maxWidth: '500px', maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>
{/* 
  
     <div className="my-8 max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50 ">
  <div className="relative bg-white-800 rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-opacity-75 bg-gradient-to-r  via-transparent to-transparent" />
    <div className="relative z-10 p-8 md:flex md:items-center md:justify-between">

 

      <div className="text-white md:w-1/2 text-center ">
        <h1 className="  text-gray-900 text-4xl font-extrabold">
          SRS <span className="text-red-700">Culture</span>
        </h1>
        <p className="mt-4 text-lg  text-gray-500">
          "There is a certain personality and behaviour that an individual
          exhibits. We believe that an organisation also has similar traits, and
          culture is an expression of that."
        </p>
        <p className="mt-4 font-semibold  text-gray-900">-SRS Services</p>
      </div>


      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          <img
            className="rounded-md object-cover max-w-screen-lg"
            src="https://i.pinimg.com/474x/a0/0b/b1/a00bb18cd3df3a5680fe6cc4cfd81e27.jpg"
            alt="SRS Team"
            width={350}
          />
         
        </div>
      </div>
    </div>
  </div>
</div>

 */}



  <section id="about" className=" bg-cover bg-center h-96 max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/b4/31/80/b43180abbfc0636d7fecf84768ec9ec6.jpg)' }}>

<div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center text-white py-12 px-6">
  <h3 className="text-2xl">Loud & Clear</h3>
  <h2 className="text-5xl mt-2">Embracing the Future with Passion and Purpose</h2>
  <p className="mt-4 text-lg">
  We are the change-makers, driven by passion and purpose. Together, let’s build a future where innovation and growth know no bounds. Our generation, our future! We believe in fostering a love for learning and encouraging students to become independent thinkers.
  </p>
</div>
</section>



 <section className="my-8 bg-white">
    <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl   font-extrabold text-gray-900 ">The
        future of the <span className="text-red-700">Youth!</span>

    </h1>


        <p className="mt-4 text-black">
        We are the best, driven by results and excellence. Together, let's set new benchmarks and create a future where our hard work and dedication make us stand out. Our goals, our triumphs!
        </p>
        <a href="#" className="bg-red-500 text-white py-3 px-6 text-lg rounded cursor-pointer hover:bg-red-700 inline-block">Read More</a>

      </div>
      <img src="https://i.pinimg.com/564x/c6/8c/9b/c68c9be1d2bb7a540c68652ca8fa594d.jpg" alt="Showcase" className="w-full" />
    </div>
  </section>



  




               {/* Stroies that inspires */}
  <div className="max-w-7xl mx-auto py-12">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900">
      Stories that <span className="text-red-500">inspire</span>
    </h2>
  </div>

  
    <div className="mt-8 grid gap-8 md:grid-cols-3">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            className="rounded-full w-16 h-16 mx-auto"
            src={image}
            alt="Profile Picture"
          />
          <button className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l6-5-6-5v10z" />
            </svg>
          </button>
        </div>
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900">
            Chandvi Taneja
          </p>
          <p className="text-sm text-gray-600">NEET score 575</p>
        </div>
      </div>
      <p className="text-gray-700">
        I had a great experience at Vedantu. All my concepts were clear and I
        felt confident while appearing for the board exams.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            className="rounded-full w-16 h-16 mx-auto"
            src={image}
            alt="Profile Picture"
          />
          <button className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l6-5-6-5v10z" />
            </svg>
          </button>
        </div>
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900">Arya Verma</p>
          <p className="text-sm text-gray-600">98.4% CBSE XII</p>
        </div>
      </div>
      <p className="text-gray-700">
        The LIVE interactive classes with visual explanations helped me learn
        and retain all the topics better.
      </p>
    </div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            className="rounded-full w-16 h-16 mx-auto"
            src={image}
            alt="Profile Picture"
          />
          <button className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-full">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 17l6-5-6-5v10z" />
            </svg>
          </button>
        </div>
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900">Akshat Kumar</p>
          <p className="text-sm text-gray-600">98.2% CBSE XII</p>
        </div>
      </div>
      <p className="text-gray-700">
        The LIVE interactive classes with visual explanations helped me learn
        and retain all the topics better.
      </p>
    </div>
  </div>
</div> 


{/* Pupular tweeets */}
 
{/* Our images */}
      
  <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
       <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900">
    Youth that <span className="text-red-800">inspire</span>
    </h2>
  </div>
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col">
          {/* img_01 */}
          <img
            className="object-cover h-full"
            src='https://i.pinimg.com/564x/0b/7a/3f/0b7a3fef1484924ecf0229826e7807ae.jpg'
          />
        </div>
        <div className="hidden md:flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col">
            {/* img_02 */}
            <img
              className="object-cover h-full"
              src="https://i.pinimg.com/564x/86/cb/2b/86cb2b38264c678fb4b38b3767bfdef0.jpg"
            />
          </div>
          <div className="hidden md:flex flex-1 flex-col">
            {/* img_03 */}
            <img
              className="object-cover h-full"
              src="https://i.pinimg.com/564x/a3/2d/82/a32d8251a6879d5e756060a150dbde7c.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="hidden md:flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col">
            {/* img_04 */}
            <img
              className="object-cover h-full"
              src="https://i.pinimg.com/564x/41/eb/38/41eb38bd636c044a88b5e6aeb7d69c36.jpg"
            />
          </div>
          <div className="hidden md:flex flex-1 flex-col">
            {/* img_05 */}
            <img
              className="object-cover h-full"
              src='https://i.pinimg.com/564x/e4/52/f1/e452f14b5c432e969dddd3f63164c5e7.jpg'
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          {/* img_06 */}
          <img
            className="object-cover h-full"
            src="https://i.pinimg.com/564x/17/e9/fa/17e9fa0ff4e05769e109db06e0cdee85.jpg"
          />
        </div>
      </div>
    </div>
  </div>



  {/* section_2 */}
  <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900">
      Culture that <span className="text-red-800">inspire</span>
    </h2>
  </div>
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          {/* img_01 */}
          <img
            className="object-cover h-full"
            src="https://i.pinimg.com/564x/44/fb/66/44fb66c5de419f6a06b0e641ceaf5314.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-1">
        <div className="grid grid-cols-2 gap-2">
          <div>
            {/* img_02 */}
            <img
              className="object-cover h-full"
              src='https://i.pinimg.com/564x/47/36/2e/47362e745f4f63577c221c3e1b4d4a9a.jpg'    alt=""
            />
          </div>
          <div>
            {/* img_03 */}
            <img
              className="object-cover h-full"
              src="https://i.pinimg.com/564x/6f/ed/da/6fedda202b7f7d178ca6056be554a90c.jpg"
              alt=""
            />
          </div>
          <div>
            {/* img_04 */}
            <img
              className="object-cover h-full"
              src="https://i.pinimg.com/736x/dc/bc/da/dcbcda4aa7e890da4ec2e8ca77bf43da.jpg"
              alt=""
            />
          </div>
          <div>
            {/* img_05 */}
            <img
              className="object-cover h-full"
              src="https://i.pinimg.com/236x/db/7d/03/db7d03213de7ca6096259360c4731792.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <div className="text-center bg-cover bg-center h-96 max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50 mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900">
      Culture that <span className="text-red-800">inspire</span>
    </h2>
  </div> */}

  
  <section className="my-8 max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-extrabold text-gray-900">
    Passion  that <span className="text-red-800">inspire</span>
    </h2>
  </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <a href="https://i.pinimg.com/564x/a9/c3/26/a9c326fc17a1acc30808acd5d257bedf.jpg" className="col-span-2 row-span-2">
        <img src="https://i.pinimg.com/564x/a9/c3/26/a9c326fc17a1acc30808acd5d257bedf.jpg" alt="Gallery 1" className="w-full h-full object-cover" />
      </a>
      <a href="https://i.ibb.co/4pBbhfY/gal39834.jpg" className="col-span-2">
        <img src="https://i.pinimg.com/564x/a7/83/da/a783da3eac3e145f3d6f58c6395520df.jpg" alt="Gallery 2" className="w-full h-full object-cover" />
      </a>
      <a href="https://i.ibb.co/xSnHP7g/gal43884.jpg">
        <img src="https://i.pinimg.com/236x/6a/42/e7/6a42e7884a092a4cde21b84e10b1783c.jpg" alt="Gallery 3" className="w-full h-full object-cover" />
      </a>
      <a href="https://i.ibb.co/QN6Bnrb/gal4958.jpg">
        <img src="https://i.pinimg.com/564x/6e/fe/a8/6efea8684db95f73c7739122668dcded.jpg" alt="Gallery 4" className="w-full h-full object-cover" />
      </a>
      <a href="https://i.ibb.co/dGZvj75/gal4545.jpg">
        <img src="https://i.ibb.co/dGZvj75/gal4545.jpg" alt="Gallery 5" className="w-full h-full object-cover" />
      </a>
      <a href="https://i.ibb.co/S6FVFNt/gal74744.jpg">
        <img src="https://i.pinimg.com/564x/38/3d/95/383d957de344289164427caf94db8cc4.jpg" alt="Gallery 6" className="w-full h-full object-cover" />
      </a>
    </div>
  </section> 



  <div className="text-center bg-cover bg-center h-auto max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50 mb-2 gap-5">
    <h2 className="text-4xl font-extrabold text-gray-900">
      Words that <span className="text-red-800">inspire</span>
    </h2>
    {/* Creating a culture that inspires students and ignites youth enthusiasm. */}
    <p className='text-gray-500 text-5xl py-12'> " Together, let's drive change and shape a future full of innovation and excellence. Our passion, our impact! 🚀✨"

</p>
  </div>
 
 <Footer/>
    </>
  )
}

export default Gallery;