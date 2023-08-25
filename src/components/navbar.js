import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white bg-opacity-80 shadow-xl sticky top-0 z-50">
            <div className="justify-between mx-auto lg:max-w-full md:items-center md:flex md:px-8">
                <div>
                    <div className="flex py-5 px-4 md:block">
                        <Link to="/">
                            <StaticImage src="../images/logo.png" className="w-20" alt="Toristy - Experiences near you"></StaticImage>
                        </Link>
                        <div className="md:hidden p-2 ml-auto">
                            <button
                                className="p-2 text-gray-700 rounded-md  outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                        
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                    
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            <div>
                <div className={`flex-1 order-1 pb-3 ml-12 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black text-sm font-bold hover:text-cyan-700" key="countriesmenuitem">
                                <Link to="/countries">Countries</Link>
                            </li>
                            <li className="text-black text-sm font-bold hover:text-cyan-700" key="signupmenuitem">
                                <Link to="https://toristy.com/booking-tools-for-travel-tour-and-activity-operators">Add your service</Link>
                            </li>
                            <li className="text-black text-sm font-bold hover:text-cyan-700" key="blogmenuitem">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="text-black text-sm font-bold hover:text-cyan-700" key="aboutmenuitem">
                                <Link to="https://toristy.com/about">About</Link>
                            </li>
                            
                        </ul>
                </div>
            </div>
        </div>
        </nav>
    );
}

