import React from 'react'
import { Link } from 'react-router-dom';
import { FiDownload } from "react-icons/fi";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-custom-light-light-yellow rounded-xl m-4">
            <aside className="relative overflow-hidden custom-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h1 className='text-red-500 text-4xl font-bold'>HELLO!</h1>
                        <p className="text-3xl">
                          I'm Saswat Singh,<br />a studnet,<br />a developer, <br />a learner
                        </p>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 gap-2 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            {/* <svg
                                fill="white"
                                width="24"
                                height="24"
                                // xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg> */}
                            <FiDownload/> Download Resume
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:mt-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <p className="text-center sm:text-2xl m-7 sm: py-10 text-base ">Welcome to my digital sanctuary, where creativity meets code, and innovation thrives. Here, I craft experiences that transcend the ordinary. Explore my portfolio—a fusion of design and technology, where imagination knows no limits. Join me on a journey where pixels become art, and dreams become reality. Welcome to <span className="text-red-500 font-bold">saswat</span> 's world of limitless possibilities.</p>
        </div>
    );
}