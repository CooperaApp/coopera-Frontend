import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import Ipad from "../../../assets/images/svg/Ipad.svg";
import Access from "../../../assets/images/svg/Access.svg";
import Aws from "../../../assets/images/svg/Aws.svg";
import Bct from "../../../assets/images/svg/Bct.svg";
import Pwc from "../../../assets/images/svg/Pwc.svg";
import Solution from "../../../assets/images/svg/Solution.svg";
import Stutern from "../../../assets/images/svg/Stutern.svg";
import Uba from "../../../assets/images/svg/Uba.svg";
import Vector from "../../../assets/images/svg/Vector.svg";
import Vector2 from "../../../assets/images/svg/Vector2.svg";
import Emojio from "../../../assets/images/svg/Emojio.svg";
import Vector3 from "../../../assets/images/svg/Vector3.svg";
import Female from "../../../assets/images/svg/Female.svg";
import Male from "../../../assets/images/svg/Male.svg";
import Icons from "../../../assets/images/svg/Icons.svg";
import IpadPadDouble from "../../../assets/images/svg/IpadPadDouble.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();

  // const history = useHistory();

  // const handleButtonClick = () => {
  //   history.push("/dashboard");
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  let links = [
    { name: "About us", link: "/" },
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  return (
    <div className="landingPage">
      <div className="bg-[#7C39DE]">
        <nav className="mb-20">
          <div className="flex justify-evenly ">
            <div className="flex items-center ml-20 mt-9">
              <img src={CooperaLogo} alt="Coopera-logo" />
              <p className="mt={2} text-[#FFFFFF]">Coopera</p>
            </div>
            <div className=" flex ml-20 mt-10">
              <ul className="flex items-center ">
                {links.map((link) => (
                  <li key={link.name} className="ml-10 text-[#C4A7EE]">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" flex ml-20 mt-10 gap-3 mr-3">
              <button className="bg-[#59D2B0] mt-2 px-5 h-10 rounded-lg" onClick={() => navigate("/registration")}>
                Get Started
              </button>
              <button className="text-[#C4A7EE]" onClick={() => navigate("/login")}>Login</button>
            </div>
          </div>
        </nav>
        <div className="mb-7">
          <h1 className="text-center mb-7 text-[#FFFFFF] font-bold text-5xl">
            Revolutionise Your Cooperative <br /> Experience with{" "}
            <span className="text-[#59D2B0]">Coopera</span>
          </h1>
          <p className="text-center text-[#C4A7EE]">
            With Coopera, managing your cooperative society is seamless.
            Showcase your
            <br />
            collaboration, and let us handle the backend tasks, so you can focus
            on what <br />
            matters most.
          </p>
        </div>
        <div>
          <img src={Ipad} alt="Ipad" className="mx-auto w-[600px] h-auto" />
        </div>
      </div>
      <div className=" bg-[#111212] pb-10 ">
        <p className=" text-center  text-[#FFFFFF] py-10">
          Trusted by over 100,000 companies to manage their
          <br /> cooperative society’s process
        </p>
        <div className="flex  justify-center space-x-4">
          <img src={Pwc} alt="pwc" />
          <img src={Stutern} alt="stutern" />
          <img src={Bct} alt="bct" />
          <img src={Uba} alt="uba" />
          <img src={Access} alt="access" />
          <img src={Aws} alt="aws" />
          <img src={Solution} alt="solution" />
        </div>
      </div>
      <div className="flex justify-evenly pb-20">
        <div className="mt-20 ">
          <div className="mb-10 p-4 border border-gray-300 rounded-lg">
            <img src={Vector} alt="vector " className="mx-auto mb-4" />
            <h2 className="text-[#111212] font-bold text-1xl text-center mb-2">
              Intuitive Dashboard
            </h2>
            <p className="text-center">
              An easy-to-use dashboard <br /> ensuring you stay informed <br />
              at a glance.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <img src={Vector2} alt="vector" className="mx-auto mb-4" />
            <h2 className="text-[#111212] font-bold text-1xl text-center mb-2">
              Savings Tracker
            </h2>
            <p className="text-center">
              An easy-to-use dashboard <br /> ensuring you stay informed <br />
              at a glance.
            </p>
          </div>
        </div>

        <div className=" mt-[130px]">
          <div className="mb-10 p-4 border border-gray-300 rounded-lg">
            <img src={Emojio} alt="vector" className="mx-auto mb-4" />
            <h2 className="text-[#111212] font-bold text-1xl text-center mb-2">
              Loan Management
            </h2>
            <p className="text-center">
              An easy-to-use dashboard <br /> ensuring you stay informed <br />
              at a glance.
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg">
            <img src={Vector3} alt="vector" className="mx-auto mb-4" />
            <h2 className="text-[#111212] font-bold text-1xl text-center mb-2">
              Customisable
              <br /> Settings
            </h2>
            <p className="text-center">
              An easy-to-use dashboard <br /> ensuring you stay informed <br />
              at a glance.
            </p>
          </div>
        </div>

        <div className="mt-[190px]">
          <h1 className="font-bold text-2xl mb-3">
            Experience Excellence with Our <br />
            <span className="text-[#59D2B0]">Dynamic Features</span>
          </h1>
          <p className="mb-3">
            Experience seamless cooperation with Coopera.
            <br /> Enjoy powerful features, from an intuitive <br />
            dashboard to transparent financial tracking and
            <br /> secure communication.
          </p>
          <p className="mb-3">
            Apply for loans, stay organized with our calendar, <br />
            and receive real-time updates. Coopera empowers <br />
            you with customizable settings, making your
            <br /> cooperative journey effortless and efficient.
          </p>

          <button className="bg-[#59D2B0] mt-2 px-5 h-8 rounded-sm text-[#FFFFFF] font-light">
            See All Features
          </button>
        </div>
      </div>
      <div className="bg-[#9CE4D0] flex justify-evenly  pb-20 ">
        <div className="mt-20">
          <h1 className="font-bold text-2xl mb-3">
            Build your
            <span className="text-[#7C39DE]"> Cooperative Society</span>
            <br /> using Coopera
          </h1>
          <p className="mb-3">
            With Coopera, creating a thriving cooperative <br />
            society has never been more accessible. Join us in
            <br /> shaping a future of seamless cooperation, where <br />
            building success is simplified
          </p>
          <p className="mb-3">
            Empower your cooperative society with Coopera, <br />
            your all-in-one solution for streamlined growth. Build
            <br /> a resilient community, manage finances effortlessly,
            <br /> and foster collaboration among members.
          </p>

          <button className="bg-[#7C39DE] mt-2 px-5 h-8 rounded-sm text-[#FFFFFF] font-light">
            Get Started
          </button>
        </div>

        <div className=" mt-20 ">
          <img src={IpadPadDouble} alt="ipad" className="  w-[400px] h-auto" />
        </div>
      </div>
      <div className="pb-10 ">
        <div className="text-center mt-10">
          <h1 className="mb-3 font-bold text-2xl">
            Straightforward <span className="text-[#0EBE8D]">Pricing,</span>{" "}
            Endless Possibilities
          </h1>
          <p className="mb-8">
            Explore Coopera&apos;s pricing plans – simple, transparent, and
            designed <br />
            for your cooperative&apos;s growth. Find the perfect fit for your
            success <br />
            journey.
          </p>
        </div>
        <div className="flex justify-evenly ">
          <div className="text-center border p-4  border-gray-300 rounded-lg">
            <h1 className="mt-3 mb-3 font-bold text-2xl text-[#F04438]">
              Start-Up
            </h1>
            <h1 className="mt-3 mb-3 font-bold text-2xl">#5000</h1>
            <hr className="w-20 mt-3 mb-3 mx-auto"></hr>
            <p className="mb-3">
              Use this space to describe your start up <br />
              prize and its importance to users that <br />
              Show this plan can be helpful.
            </p>
            <div className="flex items-start flex-col mb-3">
              <p className="mb-1">Instantly accept payments</p>
              <p className="mb-1">Instantly accept payments, hrrrrr... sfd</p>
              <p className="mb-1">Instantly accept payments & saving</p>
              <p className="mb-1">Instantly accept payments, hrrrrr... sfd</p>
              <p className="mb-1">Instantly accept with payments</p>
            </div>

            <button className="border border-[#59D2B0] rounded-sm text-[#59D2B0] p-1 ">
              Get Started
            </button>
          </div>
          <div className="text-center border p-4  border-gray-300 rounded-lg">
            <h1 className="mt-3 mb-3 font-bold text-2xl text-[#7C39DE]">
              Advanced
            </h1>
            <h1 className="mt-3 mb-3 font-bold text-2xl">#5000</h1>
            <hr className="w-20 mt-3 mb-3 mx-auto"></hr>
            <p className="mb-3">
              Use this space to describe your start up <br />
              prize and its importance to users that <br />
              Show this plan can be helpful.
            </p>
            <div className="flex items-start flex-col mb-3">
              <p className="mb-1">Instantly accept payments</p>
              <p className="mb-1">Instantly accept payments, hrrrrr... sfd</p>
              <p className="mb-1">Instantly accept payments & saving</p>
              <p className="mb-1">Instantly accept payments, hrrrrr... sfd</p>
              <p className="mb-1">Instantly accept with payments</p>
            </div>

            <button className="border border-[#59D2B0] rounded-sm text-[#59D2B0] p-1 ">
              Get Started
            </button>
          </div>
          <div className="text-center border p-4  border-gray-300 rounded-lg">
            <h1 className="mt-3 mb-3 font-bold text-2xl text-[#F79009]">
              Premium
            </h1>
            <h1 className="mt-3 mb-3 font-bold text-2xl">#5000</h1>
            <hr className="w-20 mt-3 mb-3 mx-auto"></hr>
            <p className="mb-3">
              Use this space to describe your start up <br />
              prize and its importance to users that <br />
              Show this plan can be helpful.
            </p>
            <div className="flex items-start flex-col mb-3">
              <p className="mb-1">Instantly accept payments</p>
              <p className="mb-1">Instantly accept payments, hrrrrr... sfd</p>
              <p className="mb-1">Instantly accept payments & saving</p>
              <p className="mb-1">Instantly accept payments, hrrrrr... sfd</p>
              <p className="mb-1">Instantly accept with payments</p>
            </div>

            <button className="border border-[#59D2B0] rounded-sm text-[#59D2B0] p-1 ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F2EBFB]">
        <div className="text-center  mb-10 ">
          <h1 className="font-bold text-2xl mt-6 pt-10 ">
            Happy Companies,{" "}
            <span className="text-[#0EBE8D]">Happy Feedbacks</span>
          </h1>
          <p>
            Discover Coopera&apos;s success stories &mdash; efficiency,
            collaboration,
            <br />
            joy. Join us!
          </p>
        </div>
        {
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="flex justify-evenly pb-8">
              <div className="text-center ">
                {" "}
                <img src={Female} alt="female" className=" mb-3 mx-auto" />
                <p className="mb-3">
                  Coopera has transformed how we operate. Seamless
                  <br /> collaboration and efficiency have become our new
                  normal.
                  <br /> It&apos;s a game-changer!
                </p>
                <h1>Sarah M.</h1>
                <p>HR, XYZ Ltd.</p>
              </div>
              <div className="text-center">
                <img src={Male} alt="female" className=" mb-3 mx-auto" />
                <p className="mb-3">
                  Coopera has transformed how we operate. Seamless
                  <br /> collaboration and efficiency have become our new
                  normal.
                  <br /> It&apos;s a game-changer!
                </p>
                <h1>Sarah M.</h1>
                <p className="">HR, XYZ Ltd.</p>
              </div>
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        }
      </div>

      <div className="text-center  bg-[#111212] text-[#FFFFFF] p-6">
        <h1 className=" font-bold text-2xl mb-3 ">
          Start Unlocking Revenue Streams with{" "}
          <span className="text-[#0EBE8D]">Coopera</span>{" "}
        </h1>
        <p className="mb-2">
          Maximize the potential of your cooperative society with <br />
          Coopera&apos;s innovative solutions.
        </p>
        <button className="bg-[#7C39DE] mt-2 px-5 h-8 rounded-sm text-[#FFFFFF] font-light">
          Get Started
        </button>
      </div>
      <div className="flex justify-evenly p-8">
        <div>
          <div>
            <div className="flex items-center mt-10 mb-6">
              <img src={CooperaLogo} alt="Coopera-logo" />
              <p className="mt={2} text-[#111212 text-2xl">Coopera</p>
            </div>
            <p className="mb-[50px]">
              Join Coopera for a future of seamless cooperation, transparency,{" "}
              <br />
              and success. Empower your cooperative society today
            </p>
          </div>

          <div className="flex justify-between">
            <img src={Icons} alt="Icons" />
            <div className="mt-10">
              {" "}
              <p>© 2023 — Copyright</p>
              <p>All Rights reserved</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" flex  ml-20 mt-10 mb-[150px]">
            <ul className="flex items-center ">
              {links.map((link) => (
                <li key={link.name} className="ml-10 text-[#111212]">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-evenly ml-[100px] ">
            <div>
              <h1 className="mb-3 text-[#0EBE8D]">Contact Us</h1>
              <p>+234 (081) 23456781</p>
              <p>hello@cooperaltd.com</p>
            </div>
            <div className="ml-[80px]">
              <h1 className="mb-3 text-[#0EBE8D]">Location</h1>
              <p>Office 4, 123344 </p>
              <p>Herbert Macaulay, Yaba, Lagos. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
