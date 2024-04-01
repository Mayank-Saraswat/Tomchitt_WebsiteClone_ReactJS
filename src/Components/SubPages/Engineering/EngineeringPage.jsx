import React from 'react'
import Carousel from '../../Carousel'
import CardsSlider from '../../CardsSlider'
import Engineering from '../../../../public/Images/Engineering.jpg'
import Engineering2 from '../../../../public/Images/Engineering2.jpg'
import Engineering3 from '../../../../public/Images/Engineering3.jpg'
import Engineering4 from '../../../../public/Images/Engineering4.jpg'
import Carpenter from '../../../../public/Images/Carpenter.jpg'
import HealthSafety from '../../../../public/Images/HealthSafety.webp'
import OutOfHoursIcon from '../../../../public/Images/OutOfHoursIcon.jpg'
import MechanicIcon from '../../../../public/Images/MechanicIcon.png'
import MultipleMechanicIcon from '../../../../public/Images/MultipleMechanicIcon.png'
import CardReview from '../../../../public/Images/CardReview.jpg'
import { Link } from 'react-router-dom'

const EngineeringPage = () => {
  const slides = [
    {
      url: Engineering3,
      pageLink: '#',
      service: 'Electrician'
    },
    {
      url: Engineering2,
      pageLink: '#',
      service: 'Construction'
    },
    {
      url: Engineering4,
      pageLink: '#',
      service: 'Plumbing'
    }
  ];

  const reviewData = [
    {
      img: CardReview,
      review: 'Performance reviews play an essential role in employee growth and development. Effectively conveying praise and guidance facilitates open communication and contributes to a positive work environment.',
      name: 'Michell Johnson'
    },
    {
      img: CardReview,
      review: 'Performance reviews play an essential role in employee growth and development. Effectively conveying praise and guidance facilitates open communication and contributes to a positive work environment.',
      name: 'Michell Johnson'
    },
    {
      img: CardReview,
      review: 'Performance reviews play an essential role in employee growth and development. Effectively conveying praise and guidance facilitates open communication and contributes to a positive work environment.',
      name: 'Michell Johnson'
    },
    {
      img: CardReview,
      review: 'Performance reviews play an essential role in employee growth and development. Effectively conveying praise and guidance facilitates open communication and contributes to a positive work environment.',
      name: 'Michell Johnson'
    },
    {
      img: CardReview,
      review: 'Performance reviews play an essential role in employee growth and development. Effectively conveying praise and guidance facilitates open communication and contributes to a positive work environment.',
      name: 'Michell Johnson'
    },
    {
      img: CardReview,
      review: 'Performance reviews play an essential role in employee growth and development. Effectively conveying praise and guidance facilitates open communication and contributes to a positive work environment.',
      name: 'Michell Johnson'
    }
  ]

  return (
    <>
      <div className='w-[80%] mx-auto'>
        <Carousel slides={slides} />
      </div>

      <div className='w-11/12	mx-auto bg-gray-100'>
        <h1 className='text-center text-2xl text-lime-950 pt-1'>Pick your required Engineering service at home</h1>
        <div className='flex flex-wrap p-5 justify-around'>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem',
            padding: '0.5rem'
          }}>Electrician</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Carpenter</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Plumber</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Washing Machine Mechanic</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>AC Mechanic</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Construction</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Piping</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Plumber</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Plumber</div>
          <div style={{
            backgroundImage: `url(${Engineering3})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Plumber</div>
        </div>
      </div>

      <div className='w-11/12	h-auto mx-auto flex flex-wrap p-6 my-3 bg-red-50'>
        <div className='w-3/6 h-2/5'>
          <img src={Engineering2} alt='Massage' style={{ maxWidth: '90%', height: 'auto' }} />
        </div>
        <div className='w-3/6'>
          <h1 className='text-3xl mb-4'>How it works</h1>
          <h1 className='text-xl'>1. Book your mechanic</h1>
          <p1 className='text-sm py-4'>Book straight into the diary of your preferred mechanic or request an alternate time that suits to you. Appointments everyday 6am-10pm.</p1>

          <h1 className='text-xl'>2. Setup at home</h1>
          <p1 className='text-sm py-4'>Your mechanic will bring everything required for repairing with them required. They'll setup in a comfortable way of your choice. Some service gadgets require access to a plug socket and water.</p1>

          <h1 className='text-xl'>3. Relax</h1>
          <p1 className='text-sm py-4'>Your mechanic will conduct a service consultation to discuss your desires and requirements. Then it's time to sit back and relax in the comfort and cleaniness of your home.</p1>
        </div>
      </div>

      <div className='w-11/12 mx-auto'>
        <Link to={"/healthsafety"}><img src={HealthSafety} alt='Health & Safety' className='h-60 w-full' /></Link>
      </div>

      <div style={{
        backgroundImage: `url(${Carpenter})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
        className='w-11/12 mx-auto my-3 h-52'>
        <p className='ml-40 text-5xl'>Service<br /> Packages</p>
        <button className='text-center font-semibold ml-96 px-3 py-1 bg-red-400 text-white rounded hover:text-indigo-700'>Book Online</button>
      </div>

      <div className='w-11/12	 mx-auto flex flex-wrap justify-around p-6 bg-gray-100'>
        <div className='w-[31%] h-auto m-2 p-3 bg-white rounded-xl'>
          <img src={OutOfHoursIcon} alt='Out of hours' height={80} width={80} className='mx-auto' />
          <h1 className='text-2xl text-red-950'>Out of hours</h1>
          <p>We offer mobile service appointments Monday to Sunday from 6am to 10pm, meaning you never have to worry about squeezing your service needs into the working day.</p>
        </div>
        <div className='w-[31%] h-auto m-2 p-3 bg-white rounded-xl'>
          <img src={MechanicIcon} alt='Therapists' height={80} width={80} className='mx-auto' />
          <h1 className='text-2xl text-red-950'>Elite Engineers</h1>
          <p>We work with a curated selection of the top Engineering professionals in the industry. We have a rigorous recruitment process and only take on the very best after several rounds of assessment.</p>
        </div>
        <div className='w-[31%] h-auto m-2 p-3 bg-white rounded-xl'>
          <img src={MultipleMechanicIcon} alt='Multiple treatments' height={80} width={80} className='mx-auto' />
          <h1 className='text-2xl text-red-950'>Multiple processes</h1>
          <p>Unlike waiting for engineers, you can book as many engineering services as you like in one appointment, making us a one stop solution for all your engineering needs.</p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${Engineering})`,
          backgroundSize: '100% 100%',
          minHeight: '500px'
        }}
        className='pt-6 mt-3 h-auto'
      >
        <div className='w-2/6 m-8 px-2 pt-2 pb-11 bg-white'>
          <h1 className='text-4xl text-center pt-3'>Traditional Packages</h1>
          <p className='text-center p-6 text-sm'>Here's an opportunity to highlight company news or a special service you offer in a way that stands out. Click to begin editing and customize the text to your needs.</p>
          <button className='mx-auto text-center text-white text-sm bg-blue-950 py-2 px-5 block'>Learn More</button>
        </div>
      </div>

      <div className='bg-rose-100 pt-3'>
        <div className='bg-rose-700 h-0.5'></div>
        <div className='flex flex-wrap justify-around px-2 py-2 font-bold'>
          <p>Electrical</p>
          <p>Carpenter</p>
          <p>Plumber</p>
          <p>Construction</p>
          <p>AC Repairing</p>
          <p>Wifi</p>
          <p>Gas pipeline</p>
          <p>Software</p>
        </div>
        <div className='bg-rose-700 h-0.5'></div>

        <h1 className='text-xl text-green-950	text-center mt-2'>As loved by</h1>
        <CardsSlider data={reviewData} slidesToShow={3} />
      </div>
    </>
  )
}

export default EngineeringPage