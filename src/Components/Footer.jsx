import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-blue-950 text-white text-sm'>
            <div className="w-full bg-grey-900 flex flex-wrap justify-around md:flex-row p-2">
                <div className='flex flex-col'>
                    <h1 className='text-2xl'>Tomchitt</h1>
                    <a href='https://www.facebook.com' target="_blank" rel='noreferrer'>Linkedin</a>
                    <a href='#'>Instagram</a>
                    <a href='#'>Telegram</a>
                </div>
                <div>About Us<hr />
                    <p>Products</p>
                    <p>Services</p>
                    <p>Careers</p>
                </div>
                <div>Contact<hr/>
                <p>Email</p>
                <p>Feedback</p>
                <p>Support</p>
                </div>
                <div>Quick Links<hr/>
                <p>Refer a friend</p>
                <p>Create an account</p>
                <p>New Launches</p>
                </div>
            </div><hr />
            <div className='flex flex-wrap justify-between p-2 text-xs'>
                <p>Copyright &copy; 2024 Tomchitt. All rights reserved.</p>
                <p>About us</p>
                <p>Careers</p>
                <p>Blogs</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer