import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import {CgUser } from 'react-icons/cg';
import {FaHeart} from 'react-icons/fa';


function NavBar() {

    const hover = "hover:text-subMain transitions text-white"
    const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover)

    return (
        <>
            <div className="bg-main shadow-md sticky top-0 z-20">
                <div className="container mx-auto px-4 py-5 lg:grid gap-10 grid-cols-7 justify-between items-center">


                    {/* Logo */}
                    <div className="col-span-1 lg:block hidden">
                        <Link to="/">
                            <img src="/Images/Logonetflix.png" 
                                className="w-full h-12 object-container"
                                alt="logo" />
                        </Link>

                    </div>

                    {/* Search Bar */}
                    <div className="col-span-3">
                        <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4 ">
                            <button type='submit' className="bg-subMain w-12 flex-colo h-12 text-white rounded ">
                                <BsSearch />
                            </button>
                            <input
                                type="text"
                                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-16 text-black"
                                placeholder="Search for a movie, tv show, person..."
                            />

                        </form>


                    </div>

                    {/* Menu */}

                    < div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
                        <NavLink to="/movies" className={Hover}>
                            Movies
                        </NavLink>
                        <NavLink to="/about-us" className={Hover}>
                           About Us
                        </NavLink>
                        <NavLink to="/contact us" className={Hover}>
                            Contact Us
                        </NavLink>
                        <NavLink to="/login" className={Hover}>
                            <CgUser className="w-8 h-8" />
                        </NavLink>
                        <NavLink to="/favorite" className={`${hover} relative`}>
                            <FaHeart className="w-8 h-8" />
                            <div className="w-4 h-4 flex-colo rounded-full text-white text-xs bg-subMain absolute -top-5 -right-1 ">
                                3
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar