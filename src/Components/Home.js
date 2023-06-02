import React from "react";
import ProgressBar from "./charts/ProgressBar";
const Home = () => {
  return (
    <>
      <div class="mt-10">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <div class="mb-4 sm:mx-2">
            <a
              href="#"
              class="block relative max-w-sm w-80 mx-auto p-6 bg-orange text-white"
            >
              <h5 class="flex items-center justify-between mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Student
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </h5>
              <p class="text-xl font-large font-bold w-20 text-white">26</p>
            </a>
          </div>
          <div class="mb-4 sm:mx-2">
            <a
              href="#"
              class="block relative max-w-sm w-80 mx-auto p-6 bg-blue text-white    "
            >
              <h5 class="flex items-center justify-between mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Departments
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </h5>
              <p class="text-xl font-large font-bold w-20 text-white">5</p>
            </a>
          </div>
          <div class="mb-4 sm:mx-2">
            <a
              href="#"
              class="block relative max-w-sm w-80 mx-auto p-6 bg-green text-white"
            >
              <h5 class="flex items-center justify-between mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Placements
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </h5>
              <p class="text-xl font-large font-bold w-20 text-white">0</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end sm:flex-row">
          <button
            type="button"
            class="text-white bg-[#f97316] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
          >
            Check out with Apple Pay
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2 mb-4 mx-10">
          <p className="text-green font-medium ">
            Upcoming Placement opportunities
          </p>
        </div>
        <div>
          <div class="flex flex-col items-center justify-center sm:flex-row">
            <div class="mb-4 sm:mx-2">
              <a
                href="#"
                class="block relative max-w-sm w-80 mx-auto p-6 bg-white text-white"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="" className="text-blue">Placement Taks</a>
                </h5>
                <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
                  No Placement tasks Scheduled yet.
                </p>
              </a>
            </div>
            <div class="mb-4 sm:mx-2">
              <a
                href="#"
                class="block relative max-w-sm w-80 mx-auto p-6 bg-white text-white"
              >
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="" className="text-blue">Pre Assessments</a>
                </h5>
                <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
                  No Pre Assessments tasks Scheduled yet.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div>
        <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="mb-4 sm:mx-2 mt-10 shadow-md">
            <div className="block relative max-w-sm w-80 mx-auto p-6">
            <label htmlFor="" className="text-orange">Placement Exam History</label>
            <div className="flex justify-center items-center mt-5">
                <ProgressBar percentage={3.8} />
            </div>
            <p className="flex justify-center items-center">26 Customers</p>
            <div className="flex flex-col items-center justify-center sm:flex-row mx-1">
                <div className="flex flex-col items-center justify-center sm:flex-rowblock relative max-w-sm w-80 mx-auto ">
                    <button type="button" className="text-blue bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                        </svg>
                        Total student Attempted
                    </button>
                    <div className="block relative max-w-sm w-80 mx-auto p-6">
                    <button class="bg-green w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    1
                    </button>
                    </div>  
                </div>
                <div className="block relative max-w-sm w-80 mx-auto p-6 ">
                <button type="button" className="text-blue bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                    </svg>
                    Total student Attempted
                </button>
                <div className="block relative max-w-sm w-80 mx-auto p-6">
                <button class="bg-green w-40   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                1
                </button>
                </div>  
                </div>
            </div>
            <div className="absolute top-0 right-0 m-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
            </div>
            <div>
                <p>ajfsgasgfagsfhgashfgajhsgfhjasfasf</p>
                <div className="flex flex-col items-center justify-center sm:flex-row">
                <div className="block relative max-w-sm w-80 mx-auto p-6">
                <button type="button" className="text-blue bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                    </svg>
                    Total student Attempted
                </button>
                <div className="block relative max-w-sm w-80 mx-auto p-6">
                <button class="bg-green w-20   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                1
                </button>
                </div>  
                </div>
                <div className="block relative max-w-sm w-80 mx-auto p-6">
                <button type="button" className="text-blue bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                    </svg>
                    Total student Attempted
                </button>
                <div className="block relative max-w-sm w-80 mx-auto p-6">
                <button class="bg-green w-20   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                1
                </button>
                </div>  
                </div>
            </div>
            </div>
            </div>
            
        </div>
        
        </div>
</div>

            </div>
    </>
  );
};

export default Home;
