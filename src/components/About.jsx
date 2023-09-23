import React from "react";
import profile from "../assets/Group 50.png";
export default function About() {
  return (
    <div className="py-16 bg-custom-light-light-yellow my-4 rounded-lg">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 sm:justify-center mx-auto ml-10">
            <img src={profile} className=" h-96 w-78" alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <section class="text-center py-16 rounded-lg bg-gray-100">
              <h1 class="text-3xl font-bold">Saswat Singh</h1>
              <p class="text-gray-600">Based in Gujarat, India</p>
              <p class="text-gray-700">
                Studying B.Tech in Computer Science and Engineering
              </p>
            </section>

            <p className="mt-6 text-gray-600">
            I have a strong background in both frontend web development and graphic designing. With expertise in HTML, CSS, and JavaScript, I excel in crafting engaging and responsive user interfaces for websites. Additionally, my skills in graphic design allow me to create visually appealing graphics and illustrations that enhance the overall user experience.
            </p>
            <p className="mt-4 text-gray-600">
            This unique combination of talents enables me to seamlessly bridge the gap between design and functionality, delivering captivating and user-friendly digital solutions. I am passionate about staying up-to-date with industry trends and technologies to consistently produce creative and impactful designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
