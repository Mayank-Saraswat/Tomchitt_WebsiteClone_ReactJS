import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const NavStrip = () => {

    const MenuItems = [
        {
            name: "Search by service",
            submenu: true,
            sublinks: [
                { name: "Beauty", link: "/beautyservice" },
                { name: "Cleaning", link: "/cleaningservice" },
                { name: "Automobile", link: "/automobileservice" },
                { name: "Engineering", link: "/engineeringservice" },
                { name: "Digital Service", link: "/digitalservice" },
                { name: "Free Service", link: "/freeservice" }
            ]
        }
    ];

    return (
        <div className='font-medium bg-white'>
            <ul className="flex flex-wrap justify-evenly gap-10">
                <Dropdown links={MenuItems} />
                <li>
                    <Link to="/trending" className="py-3 px-3 inline-block hover:text-indigo-700">
                        Trending
                    </Link>
                </li>
                <li>
                    <Link to="/weekspecialvalue" className="py-3 px-3 inline-block hover:text-indigo-700">
                        This week special value & offers
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavStrip