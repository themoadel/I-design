import Image from "next/image"
import { Tooltip } from "@mui/material"

const index = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-[100dvh] ">
      <div id="about-us" className="px-10 flex justify-between h-[15vh]">
        <Image className="w-[8vw] xl:w-[8vw]" src="/publicAssets/logo2.png" alt="Picture of the author" width={80} height={80} />
        <div className="flex gap-5 py-10 justify-center items-center">
          <Image src="/publicAssets/phone.png" alt="Picture of the author" width={30} height={30} />
          <div className="border-l px-4 flex flex-col  justify-center text-white text-2xl  h-full">
            <span>+201004708786</span>
            <span>+201278586862</span>
            <span>karam.expert@hotmail.com</span>
          </div>
        </div>
      </div>
      <ul className="sticky top-0 h-[5vh] flex border-t border-orange-500 items-center justify-center font-medium text-[#c4c3c3] gap-10 p-3 bg-[#3F3F3F]">
        <li
          onClick={(e) => {
            e.preventDefault()
            window.location.replace("/#about-us")
          }}
          className="cursor-pointer"
        >
          About Us
        </li>
        <li
          onClick={(e) => {
            e.preventDefault()
            window.location.replace("/#services")
          }}
          className="cursor-pointer"
        >
          Our Services
        </li>
        {/* <a>Projects</a> */}
        <li
          onClick={(e) => {
            e.preventDefault()
            window.location.replace("/#why-us")
          }}
          className="cursor-pointer"
        >
          Why Us
        </li>
        <li
          onClick={(e) => {
            e.preventDefault()
            window.location.replace("/#contact-us")
          }}
          className="cursor-pointer"
        >
          Contact Us
        </li>
      </ul>
      <div className="flex flex-col h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center    bg-[#DAE2E0]   pl-5">
          <div className="p-10  ml-40 ">
            <h1 className="text-4xl font-medium tracking-widest	">Who We Are</h1>
            <p className="my-10 text-3xl font-light tracking-wide w-[80%]">
              We provide professional services in the field of designing and installing smart home systems. We help you make your home smart and
              energy-efficient.
            </p>
          </div>

          <div className="w-[70vw] flex items-center">
            <Image src="/publicAssets/smart-home.gif" alt="Picture of the author" width={2000} height={2000} />
          </div>
        </div>
        <div className=" border-b mx-20 border-orange-500 flex flex-col flex-1 justify-center items-center">
          <span id="services" className="xl:mt-10 mt-5 text-3xl text-[#DAE2E0] tracking-widest font-light">
            Our Services
          </span>

          <div className="flex items-center flex-1 justify-center gap-20">
            <Tooltip title={<p style={{ fontSize: "1rem", textAlign: "center" }}>Smart Network Design and Implementation</p>} arrow>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  window.location.replace("/#network")
                }}
                className="bg-[#DAE2E0] p-5 rounded-full cursor-pointer border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300   "
              >
                <Image className="w-[3vw] xl:w-[4vw]" src="/publicAssets/network.png" alt="Picture of the author" width={80} height={80} />
              </div>
            </Tooltip>
            <Tooltip
              title={<p style={{ fontSize: "1rem", textAlign: "center" }}> Installation and Programming of Lighting and Electrical Systems</p>}
              arrow
            >
              <div
                onClick={(e) => {
                  e.preventDefault()
                  window.location.replace("/#electricity")
                }}
                className="bg-[#DAE2E0] p-5 rounded-full cursor-pointer border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300   "
              >
                <Image className="w-[3vw] xl:w-[4vw]" src="/publicAssets/elec.png" alt="Picture of the author" width={80} height={80} />
              </div>
            </Tooltip>
            <Tooltip title={<p style={{ fontSize: "1rem", textAlign: "center" }}>Control of Doors, Blinds, and Electrical Appliances</p>} arrow>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  window.location.replace("/#doors")
                }}
                className="bg-[#DAE2E0] p-5 rounded-full cursor-pointer border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300   "
              >
                <Image className="w-[3vw] xl:w-[4vw]" src="/publicAssets/door.png" alt="Picture of the author" width={80} height={80} />
              </div>
            </Tooltip>
            <Tooltip title={<p style={{ fontSize: "1rem", textAlign: "center" }}> Gas and Water Leak Detection Services</p>} arrow>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  window.location.replace("/#water-gas")
                }}
                className="bg-[#DAE2E0] p-5 rounded-full cursor-pointer border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300   "
              >
                <Image className="w-[3vw] xl:w-[4vw]" src="/publicAssets/water.png" alt="Picture of the author" width={80} height={80} />
              </div>
            </Tooltip>
            <Tooltip title={<p style={{ fontSize: "1rem", textAlign: "center" }}>Technical Support</p>} arrow>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  window.location.replace("/#support")
                }}
                className="bg-[#DAE2E0] p-5 rounded-full cursor-pointer border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300   "
              >
                <Image className="w-[3vw] xl:w-[4vw]" src="/publicAssets/support.png" alt="Picture of the author" width={80} height={80} />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="bg-white h-[95dvh]">
        <div id="network" className="h-[50%] items-center justify-center flex bg-[#1A1A1A] ">
          <div className="w-[40%]  p-10 border-r ">
            <div className="flex items-center">
              <div className=" p-10 mx-10 rounded-full  border border-orange-500    ">
                <Image className="w-[7vw] xl:w-[10vw]" src="/publicAssets/network-orange.png" alt="Picture of the author" width={100} height={100} />
              </div>
              <h2 className="text-orange-500 text-4xl tracking-widest font-light ">Smart Network Design and Implementation</h2>
            </div>
          </div>
          <div className="w-[60%] p-10">
            <span className="text-[#DAE2E0] text-2xl tracking-widest font-light">
              We design and build smart network infrastructure for your home, allowing you to control all devices and applications through a single
              network.
            </span>
          </div>
        </div>
        <div id="electricity" className="h-[50%] items-center justify-center flex bg-[#1A1A1A] ">
          <div className="w-[40%]  p-10 border-r ">
            <div className="flex items-center">
              <div className=" p-10 mx-10 rounded-full  border border-orange-500    ">
                <Image className="w-[10vw] xl:w-[12vw]" src="/publicAssets/elec-orange.png" alt="Picture of the author" width={100} height={100} />
              </div>
              <h2 className="text-orange-500 text-4xl tracking-widest font-light ">
                Installation and Programming of Lighting and Electrical Systems
              </h2>
            </div>
          </div>
          <div className="w-[60%] p-10">
            <span className="text-[#DAE2E0] text-2xl tracking-widest font-light">
              We install smart lighting and electrical systems and program them for control through a smartphone app.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white h-[95dvh]">
        <div id="doors" className="h-[50%] items-center justify-center flex bg-[#1A1A1A] ">
          <div className="w-[40%]  p-10 border-r ">
            <div className="flex items-center">
              <div className=" p-10 mx-10 rounded-full  border border-orange-500    ">
                <Image className="w-[7vw] xl:w-[10vw]" src="/publicAssets/door-orange.png" alt="Picture of the author" width={100} height={100} />
              </div>
              <h2 className="text-orange-500 text-4xl tracking-widest font-light "> Control of Doors, Blinds, and Electrical Appliances</h2>
            </div>
          </div>
          <div className="w-[60%] p-10">
            <span className="text-[#DAE2E0] text-2xl tracking-widest font-light">
              We connect and program control devices for doors, blinds, and electrical appliances, allowing remote control with ease
            </span>
          </div>
        </div>
        <div id="water-gas" className="h-[50%] items-center justify-center flex bg-[#1A1A1A] ">
          <div className="w-[40%]  p-10 border-r ">
            <div className="flex items-center">
              <div className=" p-10 mx-10 rounded-full  border border-orange-500    ">
                <Image className="w-[7vw] xl:w-[10vw]" src="/publicAssets/water-orange.png" alt="Picture of the author" width={100} height={100} />
              </div>
              <h2 className="text-orange-500 text-4xl tracking-widest font-light ">Gas and Water Leak Detection Services</h2>
            </div>
          </div>
          <div className="w-[60%] p-10">
            <ul className="text-[#DAE2E0] list-disc text-2xl tracking-widest font-light">
              <li className="text-[#DAE2E0] text-2xl tracking-widest font-light">
                We offer professional services for detecting gas and water leaks in your homes. We prioritize your safety and security and provide a
                comprehensive solution to achieve that.
              </li>
              <li className="text-[#DAE2E0] text-2xl tracking-widest font-light">
                We install and program advanced detection systems that allow you to detect any leaks with high accuracy.
              </li>
              <li className="text-[#DAE2E0] text-2xl tracking-widest font-light">
                In case of any leak detection, an immediate alert is sent to you through the smartphone application.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1A1A]  h-[95dvh] ">
        <div id="support" className="h-[50%] items-center justify-center flex bg-[#1A1A1A] ">
          <div className="w-[40%]  p-10 border-r ">
            <div className="flex items-center">
              <div className=" p-10 mx-10 rounded-full  border border-orange-500    ">
                <Image className="w-[4vw] xl:w-[7vw]" src="/publicAssets/support-orange.png" alt="Picture of the author" width={100} height={100} />
              </div>
              <h2 className="text-orange-500 text-4xl tracking-widest font-light "> Technical Support</h2>
            </div>
          </div>
          <div className="w-[60%] p-10">
            <span className="text-[#DAE2E0] text-2xl tracking-widest font-light">
              We provide you with professional technical support for one year on all installations, ensuring continuous communication and problem
              resolution.
            </span>
          </div>
        </div>
        <div id="why-us" className="px-32 h-[50%] items-center border-t border-orange-500 flex bg-[#1A1A1A] mx-20 ">
          <div className="flex flex-col ">
            <Image className="w-[10vw] xl:w-[15vw]" src="/publicAssets/why.png" alt="Picture of the author" width={100} height={100} />
            <span className="text-4xl text-[#DAE2E0]">Why Us</span>
          </div>
          <ul className="ml-40 text-[#DAE2E0] border-r pr-5">
            <li className=" text-3xl font-light tracking-wider my-5">Experienced and competent team in the field of smart systems.</li>
            <li className=" text-3xl font-light tracking-wider my-5"> Use of advanced technology and high-quality equipment.</li>
            <li className=" text-3xl font-light tracking-wider my-5">Continuous technical support to ensure customer satisfaction.</li>
            <li className=" text-3xl font-light tracking-wider my-5">Customized design to meet your unique needs.</li>
          </ul>
          <div id="contact-us" className=" flex flex-col mx-10  justify-center text-white text-4xl ">
            <span className=" text-3xl font-light my-5  text-orange-500 tracking-widest ">Contact us on</span>
            <span className=" text-2xl font-light my-2 ">+201004708786</span>
            <span className=" text-2xl font-light my-2 "> +201278586862</span>
            <span className=" text-2xl font-light my-2 ">karam.expert@hotmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
