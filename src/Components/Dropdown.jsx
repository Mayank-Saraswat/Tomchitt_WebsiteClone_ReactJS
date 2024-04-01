import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownOutline, ChevronUpOutline } from 'react-ionicons';

const Dropdown = ({ links }) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className="text-left md:cursor-pointer group">
                        <h1
                            className="py-3 flex justify-between items-center md:pr-0 pr-5 group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text md:hidden inline">
                                {heading === link.name ? <ChevronUpOutline /> : <ChevronDownOutline />}
                            </span>
                            <span className="text md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ChevronDownOutline />
                            </span>
                        </h1>
                        {link.submenu && (
                            <div className="absolute top-20 hidden group-hover:block hover:block group-hover:md:block hover:md:block">
                                <div className="bg-white m-2 p-3 shadow-lg shadow-blue-300/30">
                                    {link.sublinks.map((slink) => (
                                        <div key={slink.name}>
                                            <li className="text-sm text-gray-600 my-2.5">
                                                <Link
                                                    to={slink.link}
                                                    className="hover:text-primary"
                                                >
                                                    {slink.name}
                                                </Link>
                                            </li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div className={`${heading === link.name ? "md:hidden" : "hidden"}`} >
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div key={slinks.name}
                                className={`${subHeading === slinks.name ? "md:hidden" : "hidden"
                                    }`}
                            >
                                <li className="py-3 pl-14">
                                    <Link to={slinks.link}>{slinks.name}</Link>
                                </li>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Dropdown;