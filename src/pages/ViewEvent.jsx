import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import conclave from "../assets/cyberConclave.png";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { data } from "../data/viewEventsData.js";
import Background from "../components/Background/Background";
function ViewEvent() {
  const { event } = useParams();
  const nav = useNavigate();
  console.log(event);
  return (
    <div className="w-full flex justify-center items-center text-white ">
      <div className="w-11/12 my-28 grid p-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1">
        {/*-------------- poster and description -----------------*/}
        <div className="w-full flex flex-col justify-self-center items-center justify-center rounded-xl">
          <div className="w-full h-[250px] md:h-1/2 xl:h-2/3  relative flex flex-col items-center justify-center">
            <img
              className="w-full h-full absolute top-0 left-0"
              src={data[event].poster}
            />
            <h1
              className={`z-40 ${data[event].title_font} ${data[event].title_size} text-white my-4 `}
            >
              {data[event].title}
            </h1>
            <p className="z-40 text-[10px] font-audiowide font-normal px-6 text-[#F6E9E9] text-center">
              {data[event].description}
            </p>
          </div>
          <div className="md:h-1/2 xl:h-1/3  w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg p-4 rounded-b-xl">
            <p className="text-justify text-white">{data[event].brief2}</p>
          </div>
        </div>

        <div className="w-ful flex flex-col items-center justify-between p-4">
          {/*----------------SPEAKERS------------------*/}
          {event == "cyberconclave" && (
            <div className="w-full">
              <h1 className="text-center ml-[40px] font-jersey text-[#1EC1C5] text-2xl">
                SPEAKERS
              </h1>
              <div className="flex m-2">
                <img
                  src={conclave}
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
                <div className="flex flex-col flex-grow">
                  <h6 className="text-center">{data[event].speakers[0][0]}</h6>
                  <h6 className=" text-center">{data[event].speakers[0][1]}</h6>
                </div>
              </div>
              <div className="flex m-2">
                <img
                  src={conclave}
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
                <div className="flex flex-col flex-grow">
                  <h6 className="text-center">{data[event].speakers[1][0]}</h6>
                  <h6 className=" text-center">{data[event].speakers[1][1]}</h6>
                </div>
              </div>
              <div className="flex m-2">
                <img
                  src={conclave}
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
                <div className="flex flex-col flex-grow">
                  <h6 className="text-center">{data[event].speakers[2][0]}</h6>
                  <h6 className=" text-center">{data[event].speakers[2][1]}</h6>
                </div>
              </div>
            </div>
          )}

          {/*----------------FACULTY COORDINATOR------------------*/}

          {event !== "cyberconclave" && (
            <div className="w-full">
              <h1 className="text-left m-2 text-[#1EC1C5] text-3xl font-jersey">
                Faculty Coordinator
              </h1>
              <div className="flex m-2">
                <h6 className=" text-left">
                  {data[event].facultyCoordinator[0]}
                </h6>
              </div>
              <div className="flex m-2">
                <h6 className=" text-left">
                  {data[event].facultyCoordinator[1]}
                </h6>
              </div>
            </div>
          )}

          {/*----------------STUDENT COORDINATOR------------------*/}

          {event !== "cyberconclave" && (
            <div className="w-full">
              <h1 className="text-left m-2 text-[#1EC1C5] text-3xl font-jersey">
                Student Coordinators
              </h1>
              <div className="flex m-2">
                <h6 className=" text-left">
                  {data[event].studentCoordinator[0]}
                </h6>
              </div>
              <div className="flex m-2">
                <h6 className=" text-left">
                  {data[event].studentCoordinator[1]}
                </h6>
              </div>
            </div>
          )}

          {/*----------------Rules------------------*/}
          {event !== "cyberconclave" && (
            <div className="w-full">
              <h1 className="text-left m-2 text-[#1EC1C5] text-3xl font-jersey">
                Rules
              </h1>
              <div className="flex flex-col m-2">
                {data[event].rules.map((rule) => (
                  <div className="flex flex-grow mt-2">
                    <CropSquareIcon sx={{}} />
                    <h6 className=" text-left mx-2">{rule}</h6>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/*----------------EVENT DETAILS------------------*/}
          <div className="w-full">
            <h1 className="text-lest m-2 text-[#1EC1C5] text-3xl font-jersey">
              EVENT DETAILS
            </h1>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <AccessTimeOutlinedIcon />
                <h6 className=" text-center mx-2">
                  {data[event].eventDetails.time}
                </h6>
              </div>
            </div>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <CalendarTodayOutlinedIcon />
                <h6 className=" text-center mx-2">
                  {data[event].eventDetails.date}
                </h6>
              </div>
            </div>
            <div className="flex m-2">
              <div className="flex flex-grow">
                <PaymentsOutlinedIcon />
                <h6 className=" text-center mx-2">
                  {data[event].eventDetails.fees}
                </h6>
              </div>
            </div>
          </div>

          {/*----------------TOPICS OF DISCUSSIONS------------------*/}

          {event == "cyberconclave" && (
            <div className="w-full">
              <h1 className="text-center ml-[40px] text-[#1EC1C5] text-2xl font-jersey">
                TOPICS OF DISCUSSION
              </h1>

              {data[event].discussion.map((i) => (
                <div className="flex m-2">
                  <div className="flex flex-grow">
                    <CropSquareIcon />
                    <h6 className=" text-center mx-2">{i}</h6>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => nav(`register`)}
            className="border-2 border-[#1EC1C5] w-2/3 ml-[40px] p-1 rounded-xl text-[#1EC1C5] text-xl font-jersey"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEvent;
