import React from 'react'
import KnowUs from '../../public/Images/KnowUs.jpg'
import Promotion from '../../public/Images/Promotion.jpg'
import SpecialValue from '../../public/Images/SpecialValue.jpg'
import BeautyService4 from '../../public/Images/BeautyService4.jpg'
import BeautyService2 from '../../public/Images/BeautyService2.jpg'
import Cleaning2 from '../../public/Images/Cleaning2.jpg'
import Massage from '../../public/Images/Massage.jpg'
import Automobile from '../../public/Images/Automobile.jpg'
import Automobile2 from '../../public/Images/Automobile2.jpg'
import Cleaning3 from '../../public/Images/Cleaning3.jpg'
import WaterBackground from '../../public/Images/WaterBackground.jpg'
import Register from '../../public/Images/Register.jpeg'
import Beauty from '../../public/Images/Beauty.jpg'
import Cleaning from '../../public/Images/Cleaning.jpg'
import Engineering from '../../public/Images/Engineering.jpg'
import FreeService from '../../public/Images/FreeService.jpg'
import DigitalService from '../../public/Images/DigitalService.jpg'
import Carpenter from '../../public/Images/Carpenter.jpg'
import Rules from '../../public/Images/Rules.jpg'
import Carousel from './Carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

const Main = () => {

    const slides = [
        {
            url: Beauty,
            pageLink: '/beautyservice',
            service: 'Beauty'
        },
        {
            url: Cleaning,
            pageLink: '/cleaningservice',
            service: 'Cleaning'
        },
        {
            url: Automobile2,
            pageLink: '/automobileservice',
            service: 'Automobile'
        },

        {
            url: Engineering,
            pageLink: '/engineeringservice',
            service: 'Engineering'
        },
        {
            url: DigitalService,
            pageLink: '/digitalservice',
            service: 'Digital Service'
        },
        {
            url: FreeService,
            pageLink: '/freeservice',
            service: 'Free Service'
        },
    ];

    const MonthBestServiceData = [
        {
            img: BeautyService2,
            productName: 'Beauty',
            price: '$85.00'
        },
        {
            img: Cleaning2,
            productName: 'Cleaning',
            price: '$85.00'
        },
        {
            img: Automobile,
            productName: 'Automobile',
            price: '$85.00'
        },
        {
            img: Engineering,
            productName: 'Engineering',
            price: '$85.00'
        },
        {
            img: DigitalService,
            productName: 'Digital Service',
            price: '$85.00'
        },
        {
            img: FreeService,
            productName: 'Free Service',
            price: '$85.00'
        }
    ]

    const cardSliderSettings = {
        // dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true
    };

    return (
        <>
            <Carousel slides={slides} />
            <div className='w-11/12 h-[60vh] mx-auto relative'>
                <div style={{
                    backgroundImage: `url(${KnowUs})`,
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%'
                }}>
                    <p className='text-center text-4xl text-purple-900 p-5 font-semibold'>Get to Know Us</p>
                    <p className='text-center text-red-700 p-20 font-semibold'>A service-based company is one that provides its value or services to customers in the form of intangible products i.e. skills, amenities, and expertise.</p>
                    <Link to={"/aboutus"}><button className='ml-[45%] mb-[2%] absolute bottom-0 px-5 py-1 bg-purple-900 hover:bg-purple-950 text-white rounded shadow-2xl'>Learn More</button></Link>
                </div>
            </div>

            <div className='w-11/12 h-[60vh] mx-auto my-3'>
                <div style={{
                    backgroundImage: `url(${Promotion})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <p className='text-center text-4xl text-white p-5 font-semibold'>Get 30% Off</p>
                    <Link to={"/promotions"}><button className='ml-[45%] mt-[2%] px-5 py-1 bg-white rounded hover:text-red-900 shadow-2xl'>Book Now</button></Link>
                </div>
            </div>

            <div className='w-11/12 h-[60vh] mx-auto relative'>
                <div style={{
                    backgroundImage: `url(${SpecialValue})`,
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%'
                }}>
                    <p className='text-center text-4xl p-5 font-semibold'>This week special value</p>
                    <Link to={"/weekspecialvalue"}><button className='ml-[45%] mb-[2%] absolute bottom-0 px-5 py-1 bg-white rounded hover:text-red-900 shadow-2xl'>Book Now</button></Link>
                </div>
            </div>

            <div className='bg-blue-500 text-center justify-center my-3'>
                <div className='text-gray-400 text-4xl font-bold tracking-widest p-10'>OUR SERVICES</div>
                <div className='flex flex-wrap justify-center gap-2.5 pb-6'>
                    <Link to={"/beautyservice"}><div className='w-28 h-32 bg-red-400'>
                        <div>Beauty</div>
                    </div></Link>
                    <Link to={"/cleaningservice"}><div className='w-28 h-32 bg-red-400'>
                        <p>Cleaning</p>
                    </div></Link>
                    <Link to={"/engineeringservice"}><div className='w-28 h-32 bg-red-400'>
                        <div>Engineering</div>
                    </div></Link>
                    <Link to={"/automobileservice"}><div className='w-28 h-32 bg-red-400'>
                        <div>Automobile</div>
                    </div></Link>
                    <Link to={"/digitalservice"}><div className='w-28 h-32 bg-red-400'>
                        <div>Digital Service</div>
                    </div></Link>
                    <Link to={"/freeservice"}><div className='w-28 h-32 bg-red-400'>
                        <div>Free Service</div>
                    </div></Link>
                </div>
            </div>

            <Link to={"/beautyservice"}><div className='w-11/12 h-[60vh] mx-auto relative'>
                <div style={{
                    backgroundImage: `url(${BeautyService4})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <p className='text-center text-4xl p-5 font-semibold'>Beauty Services</p>
                    <button className='ml-[45%] mb-[5%] absolute bottom-0 px-5 py-1 bg-white rounded hover:text-red-900 shadow-2xl'>Book Now</button>
                </div>
            </div></Link>

            <div>
                <p className='text-center text-2xl text-red-950 mt-2'>This Week's LOVE-THIS list</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 py-3'>
                <div className='w-52 h-auto'>
                    <Link to={"/beautyservice"}><img src={BeautyService2} alt='Beauty Service' /></Link>
                </div>
                <div className='w-52 h-auto'>
                    <Link to={"/cleaningservice"}><img src={Cleaning2} alt='Cleaning Service' /></Link>
                </div>
                <div className='w-52 h-auto'>
                    <Link to={"/beautyservice"}><img src={Massage} alt='Massage' /></Link>
                </div>
                <div className='w-52 h-auto'>
                    <Link to={"/automobileservice"}><img src={Automobile} alt='Automobile' /></Link>
                </div>
            </div>

            <Link to={"/cleaningservice"}><div className='w-11/12 h-[60vh] mx-auto relative'>
                <div style={{
                    backgroundImage: `url(${Cleaning3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <p className='text-center text-4xl p-5 font-semibold'>Cleaning Services</p>
                    <button className='ml-[45%] mb-[5%] absolute bottom-0 px-5 py-1 bg-white rounded hover:text-red-900 shadow-2xl'>Book Now</button>
                </div>
            </div></Link>

            <div className='w-11/12 h-[80vh] mx-auto my-3 relative'>
                <Link to={"/monthbestservice"}>
                    <div style={{
                        backgroundImage: `url(${WaterBackground})`,
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '100%'
                    }}>
                        <p className='text-center text-4xl p-5 font-semibold'>This Month Best Services</p>
                        <div className='w-10/12 m-auto'>
                            <div>
                                <Slider {...cardSliderSettings}>
                                    {MonthBestServiceData.map((d) => (
                                        <div className='h-auto pb-2 bg-white'>
                                            <div className='h-44'>
                                                <img src={d.img} alt='Reviewer' className='h-44 w-44 mx-auto my-[11%]' />
                                            </div>

                                            <div className='flex flex-col justify-center items-center gap-1 px-6'>
                                                <p className='text-sm'>{d.productName}</p>
                                                <p className='text-sm font-semibold'>{d.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <button className='ml-[45%] mb-[2%] absolute bottom-0 px-5 py-1 bg-white rounded hover:text-red-900 shadow-2xl'>Book Now</button>
                    </div></Link>
            </div>

            <Link to={"/freeservice"}>
                <div className='w-11/12 h-[60vh] mx-auto relative'>
                    <div style={{
                        backgroundImage: `url(${Register})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <p className='text-center text-3xl p-5 font-semibold text-white'>Free Services</p>

                        <button className='ml-[45%] mb-[5%] absolute bottom-0 px-5 py-1 bg-white rounded font-semibold hover:text-red-900 shadow-2xl'>Register Now</button>
                    </div>
                </div></Link>

            <div className='w-3/4 ml-[12%] p-3'>
                <div>
                    <h1 className='font-bold'>Best Top Packages</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-3 pt-3 pb-6'>
                    <div className='w-40 h-auto'>
                        <Link to='/beautyservice'><img src={BeautyService2} alt='Beauty Service' /></Link>
                        <p>I'm' a product</p>
                        <p>$85</p>
                    </div>
                    <div className='w-40 h-auto'>
                        <Link to='/cleaningservice'><img src={Cleaning2} alt='Cleaning Service' /></Link>
                        <p>I'm' a product</p>
                        <p>$85</p>
                    </div>
                    <div className='w-40 h-auto'>
                        <Link to='/beautyservice'><img src={Massage} alt='Massage' /></Link>
                        <p>I'm' a product</p>
                        <p>$85</p>
                    </div>
                    <div className='w-40 h-auto'>
                        <Link to='/automobileservice'><img src={Automobile} alt='Automobile' /></Link>
                        <p>I'm' a product</p>
                        <p>$85</p>
                    </div>
                    <div className='w-40 h-auto'>
                        <Link to='/engineeringservice'><img src={Automobile} alt='Automobile' /></Link>
                        <p>I'm' a product</p>
                        <p>$85</p>
                    </div>
                </div>
                <button className='text-center self-center ml-96 py-1 px-4 bg-black text-white hover:bg-white hover:outline outline-red-950 hover:text-red-950'>View more</button>
            </div>

            <h1 className='text-purple-800 font-bold text-xl ml-[4%] m-2'>SERVICE NAME</h1>
            <div className='w-11/12 h-[60vh] mx-auto relative'>
                <div style={{
                    backgroundImage: `url(${Carpenter})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    <p className='text-center text-4xl p-5 font-semibold text-green-700'>For All Major Home Appliances</p>
                    <button className='ml-[45%] mb-[5%] absolute bottom-0 px-5 py-1 bg-green-700 rounded font-semibold text-white shadow-2xl'>Register Now</button>
                </div>
            </div>

            <div className='w-11/12	h-auto mx-auto flex flex-wrap p-6 my-3 bg-red-50'>
                <div className='w-3/6 h-2/5'>
                    <img src={Rules} alt='Rules' style={{ maxWidth: '90%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className='w-3/6 text-center'>
                    <h1 className='text-3xl text-purple-900 mb-4 font-semibold'>National Standards</h1>
                    <h1 className='text-xl text-purple-900 font-semibold'>Outstanding Quality</h1>
                    <p1 className='text-sm text-purple-900 py-4 opacity-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe esse pariatur? Tempora asperiores corporis perspiciatis! Ipsum ad doloremque explicabo tenetur excepturi! Distinctio, repudiandae eaque. Pariatur aliquid eum, consequatur, suscipit provident dicta vitae illo recusandae in laudantium impedit repellendus! Quasi aliquid eaque sunt nesciunt facilis eveniet! Magni labore ab repudiandae nam vitae molestiae repellendus, quod iure molestias quidem accusamus saepe ea maxime ullam, sint sapiente dignissimos et sequi impedit eligendi adipisci qui! Minima quos autem veniam ipsam maiores rem, ad deserunt inventore. Nisi, in.</p1>
                </div>
            </div>
        </>
    )
}

export default Main