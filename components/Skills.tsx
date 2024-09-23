import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 hide">
      <div className="max-w-[1240px] mx-auto justify-center h-full">
        {/* <p className="tracking-widest uppercase text-xl text-violet-700 flex items-center justify-center">
          Skills
        </p> */}
        <h2 className="flex justify-center font-bold text-2xl sm:text-4xl text-pink-600">
          These are some of my favorite frameworks
        </h2>
        <div className="">
          <div className="text-violet-600 p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
              <div className="m-auto shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300">
                <Image
                  src={require("../public/html.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="flex items-center justify-center">HTML</p>
              </div>
              <div className="shadow-xl p-8  rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/css.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="flex items-center justify-center">CSS</p>
              </div>
              <div className="shadow-xl p-8  rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/javascript.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">JavaScript</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/react.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">React Js</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/react-native.jpg")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">React native</p>
              </div>
              <div className="shadow-xl p-8  rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/scss1.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">SCSS</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/tailwind.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">Tailwind</p>
              </div>

              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/nextjs.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">Next Js</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/Express.jpg")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">Express Js</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/mysql.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">MySql</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/mongodb.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">Mongodb</p>
              </div>
              <div className="shadow-xl p-8 rounded-xl hover:scale-105 ease-in duration-300 m-auto">
                <Image
                  src={require("../public/typescript.png")}
                  className="w-16 h-16"
                  alt=""
                />
                <p className="items">Typescript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills