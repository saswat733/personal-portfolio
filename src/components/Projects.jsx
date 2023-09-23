import React from 'react'

const Projects = () => {
  return (
    <div className='bg-custom-light-light-yellow my-5 px-4'>
         <section className="py-12 bg-light-light-yellow">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-8">My Projects</h1>
                
                {/* <!-- Example project card (you can duplicate this for each project) --> */}
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-custom-light-yellow rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">"Xs and Os: Unleash Your Tic-Tac-Toe Strategy in Our Game!"</h2>
                            <p className="text-gray-600">created this fun game using <br /> html css javascript</p>
                            <a href="https://dazzling-sable-7b9c57.netlify.app/" className="mt-4 inline-block bg-red-500 hover:bg-custom-dark-yellow text-black py-2 px-4 rounded">View Project</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-custom-light-yellow rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">"Effortless Math: Your Smart Calculator Companion"</h2>
                            <p className="text-gray-600">created this amazing calculator app  using <br /> html css javascript</p>
                            <a href="https://singular-bubblegum-00bc7c.netlify.app/
" className="mt-4 inline-block bg-red-500 hover:bg-custom-dark-yellow text-black py-2 px-4 rounded">View Project</a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-custom-light-yellow rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">"Task Mastery: Simplify Your Life with Our Todo List App"</h2>
                            <p className="text-gray-600">created this authentic todo app  using <br /> html css javascript</p>
                            <a href="https://dancing-hummingbird-5f510d.netlify.app/
" className="mt-4 inline-block bg-red-500 hover:bg-custom-dark-yellow text-black py-2 px-4 rounded">View Project</a>
                        </div>
                    </div>
                    {/* <!-- Add more project cards here --> */}
                
            </div>
            </div>
        </section>
    </div>
  )
}

export default Projects