import React from 'react'
import Carousel from '../../Carousel'
import CardsSlider from '../../CardsSlider'
import DigitalService1 from '../../../../public/Images/DigitalService1.jpg'
import DigitalService2 from '../../../../public/Images/DigitalService2.jpg'
import DigitalService3 from '../../../../public/Images/DigitalService3.jpg'
import DigitalService4 from '../../../../public/Images/DigitalService4.jpg'
import HealthSafety from '../../../../public/Images/HealthSafety.webp'
import OutOfHoursIcon from '../../../../public/Images/OutOfHoursIcon.jpg'
import DigitalServiceIcon from '../../../../public/Images/DigitalServiceIcon.png'
import MultipleDigitalIcon from '../../../../public/Images/MultipleDigitalIcon.png'
import CardReview from '../../../../public/Images/CardReview.jpg'
import { Link } from 'react-router-dom'

const DigitalServicePage = () => {
  const slides = [
    {
      url: DigitalService2,
      pageLink: '#',
      service: 'Website making'
    },
    {
      url: DigitalService3,
      pageLink: '#',
      service: 'Cybersecurity' 
    },
    {
      url: DigitalService1,
      pageLink: '#',
      service: 'Tech support'
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
        <Carousel slides={slides}/>
      </div>

      <div className='w-11/12	mx-auto bg-gray-100'>
        <h1 className='text-center text-2xl text-lime-950 pt-1'>Pick your required digital service at home</h1>
        <div className='flex flex-wrap p-5 justify-around'>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem',
            padding: '0.5rem'
          }}>Website Making</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Tech support</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Database support</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Cloud Technology</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>AI Integration</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Cybersecurity</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Product Management</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>Hiring Support</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>IT Infra</div>
          <div style={{
            backgroundImage: `url(${DigitalService2})`,
            backgroundSize: '100% 100%',
            width: '18%',
            height: '170px',
            margin: '5px',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem'
          }}>SEO</div>
        </div>
      </div>

      <div className='w-11/12	h-auto mx-auto flex flex-wrap p-6 my-3 bg-red-50'>
        <div className='w-3/6 h-2/5'>
          <img src={DigitalService1} alt='Massage' style={{ maxWidth: '90%', height: 'auto' }} />
        </div>
        <div className='w-3/6'>
          <h1 className='text-3xl mb-4'>How it works</h1>
          <h1 className='text-xl'>1. Book your digital service</h1>
          <p1 className='text-sm py-4'>Book straight into the diary of your preferred service provider or request an alternate time that suits to you. Appointments everyday 6am-10pm.</p1>

          <h1 className='text-xl'>2. Setup at home</h1>
          <p1 className='text-sm py-4'>Your service provider will guide and help you in fully remote manner. They'll setup in a comfortable way of your choice. Some services require access to your device and high internet speed.</p1>

          <h1 className='text-xl'>3. Relax</h1>
          <p1 className='text-sm py-4'>Your service provider will conduct a consultation to discuss your desires and requirements. Then it's time to sit back and relax in the comfort and cleaniness of your home.</p1>
        </div>
      </div>

      <div className='w-11/12 mx-auto'>
        <Link to={"/healthsafety"}><img src={HealthSafety} alt='Health & Safety' className='h-60 w-full' /></Link>
      </div>

      <div style={{
        backgroundImage: `url(${DigitalService4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
        className='w-11/12 mx-auto my-3 h-52'>
        <p className='ml-40 text-5xl text-rose-700'>Service<br/> Packages</p>
        <button className='text-center font-semibold ml-96 px-3 py-1 bg-red-400 text-white rounded hover:text-indigo-700'>Book Online</button>
      </div>

      <div className='w-11/12	 mx-auto flex flex-wrap justify-around p-6 bg-gray-100'>
        <div className='w-[31%] h-auto m-2 p-3 bg-white rounded-xl'>
          <img src={OutOfHoursIcon} alt='Out of hours' height={80} width={80} className='mx-auto' />
          <h1 className='text-2xl text-red-950'>Out of hours</h1>
          <p>We offer fully remote appointments Monday to Sunday from 6am to 10pm, meaning you never have to worry about squeezing your digital services into the working day.</p>
        </div>
        <div className='w-[31%] h-auto m-2 p-3 bg-white rounded-xl'>
          <img src={DigitalServiceIcon} alt='Therapists' height={80} width={80} className='mx-auto' />
          <h1 className='text-2xl text-red-950'>Elite Service Providers</h1>
          <p>We work with a curated selection of the top professionals in the industry. We have a rigorous recruitment process and only take on the very best after several rounds of assessment.</p>
        </div>
        <div className='w-[31%] h-auto m-2 p-3 bg-white rounded-xl'>
          <img src={MultipleDigitalIcon} alt='Multiple treatments' height={80} width={80} className='mx-auto' />
          <h1 className='text-2xl text-red-950'>Multiple processes</h1>
          <p>Unlike waiting for services, you can book as many digital services as you like in one appointment, making us a one stop solution for all your digital service needs.</p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${DigitalService3})`,
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
          <p>Web Designing</p>
          <p>Cybersecurity</p>
          <p>Database</p>
          <p>Cloud</p>
          <p>Tech Support</p>
          <p>IT Infra</p>
          <p>Blogs</p>
          <p>Software Engg</p>
        </div>
        <div className='bg-rose-700 h-0.5'></div>

        <h1 className='text-xl text-green-950	text-center mt-2'>As loved by</h1>
        <CardsSlider data={reviewData} slidesToShow={3}/>
      </div>
    </>
  )
}

export default DigitalServicePage