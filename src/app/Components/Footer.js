import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { Link } from "react-router-dom"

const Footer = ({ logo }) => {
    return (
        <footer className="bg-white">
            <div className="max-w-[1240px] mx-auto">
                {/* footer widgets */}
                <div className="my-10 flex flex-wrap gap-10 justify-between mx-5 md:mx-0">
                    {/* Contacts */}
                    <div className="max-w-sm">
                        <img src={logo?.base64} alt='LOGO' />
                        <div className="mt-10 space-y-2">
                            <span className="flex">
                                <FiPhoneCall className="text-color mt-[5px]" />
                                <div className="ml-4">
                                    <p>Hotline 24/7:</p>
                                    <h3 className="text-2xl font-bold">(+880) 12345678 </h3>
                                </div>
                            </span>
                            <span className="flex !mt-5">
                                <AiOutlineHome className="text-color mt-[5px]" />
                                <address className="ml-4 text-color not-italic">11 whitebirk road Blackburn BB1 3JD</address>
                            </span>
                            <span className="flex">
                                <AiOutlineMail className="text-color mt-[5px]" />
                                <p className="ml-4">support@relaxsleepingpillss.com</p>
                            </span>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="">
                        <h2 className="text-lg mb-6 font-bold">Useful Links</h2>
                        <ul className="space-y-5">
                            <FooterLink
                                href="/"
                                text="About Us"
                            />
                            <FooterLink
                                href="/"
                                text="relaxsleepingpillss"
                            />
                            <FooterLink
                                href="/"
                                text="Help Center"
                            />
                        </ul>
                    </div>
                    {/* Links */}
                    <div className="">
                        <h2 className="text-lg mb-6 font-bold">Help Center</h2>
                        <ul className="space-y-5">
                            <FooterLink
                                href="/"
                                text="Payments"
                            />
                            <FooterLink
                                href="/"
                                text="Shipping"
                            />
                            <FooterLink
                                href="/"
                                text="FAQ"
                            />
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className="lg:max-w-sm">
                        <h2 className="text-lg mb-6 font-bold">Farmart Newsletter</h2>
                        <p>Register now to get updates on promotions and coupns. Don't worry! We not spam</p>
                        <div className="flex items-center mt-5">
                            <div className="flex flex-1 items-center border p-4 rounded">
                                <AiOutlineMail className="text-title mt-[5px]" />
                                <input
                                    type="text"
                                    placeholder="Your email..."
                                    className="outline-none bg-transparent px-4 w-[150px] md:w-[100%] md:flex-1"
                                />
                            </div>
                            <Link to='/' className='bg-[#25AB44] text-white w-[150px] md:w-[200px] py-4 flex justify-center'>Subscribe Now</Link>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="py-8 flex flex-wrap space-y-3 justify-center md:justify-between items-center border-t ">
                    <p className="text-sm">© {new Date().getFullYear()} <Link to="/" className="underline" rel="noreferrer"> Relaxsleepingpillss</Link>. No Rights Reserved 🙂. Build for fun.</p>
                    <img src="/images/cards.png" alt="" />
                </div>
            </div>
        </footer>
    )
}

const FooterLink = ({ href = "#", text }) => (
    <li>
        <Link href={href}>
            <a href={href}>{text}</a>
        </Link>
    </li>
)


export default Footer