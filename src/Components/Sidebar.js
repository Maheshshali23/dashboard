import React, {useState} from 'react';


const Sidebar = () =>{
    const [open, setOpen] = useState(true);

    const toggleSidebar = () =>{
        setOpen(!open);
    };
    return(
        <div className='h-screen flex items-end justify-end'>
        <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-dark-gray w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
      >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>
      <div
        className={` ${
          open ? 'w-48 px-2 ' : 'w-0 '
        } lg:w-72 bg-dark-gray h-screen relative duration-500`}
      >
    <div className='justify-center mt-3'>
    <div className='overflow-y-auto overflow-x-hidden flex-grow'>
    <ul className="flex flex-col space-y-1">
        <li className="px-2">
          <div className="flex flex-row items-center text-white">
            <div className="text-sm font-bold tracking-wide text-white-600">My Projects</div>
          </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer tracking-wide text-white-600 mr-10 ml-2">My Dashboard</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white   hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer tracking-wide text-white-600 mr-10 ml-2 ">Department</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white   hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Slideview Data</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">View Schedule</span>
            </div>
        </li>
        <li className="px-2 mt-6">
          <div className="flex flex-row items-center text-white mt-6 ">
            <div className="text-sm font-bold tracking-wide text-white-600">Assessments</div>
          </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Explore Skills</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Placement Tasks</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Pre Assessments</span>
            </div>
        </li>
        <li className="px-2">
          <div className="flex flex-row items-center text-white mt-6">
            <div className="text-sm font-bold tracking-wide text-white-600">Organization</div>
          </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Assign Skills</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Manage Students</span>
            </div>
        </li>
        <li className="px-10">
            <div className="mt-4 flex flex-row items-center text-white  hover:bg-white hover:text-blue rounded-lg">
            <span class="inline-flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
            </span>
                <span className="text-sm font-bold cursor-pointer ml-2 tracking-wide text-white-600 mr-10">Report</span>
            </div>
        </li>
    </ul>
    </div>
    <div className="px-5">
    <div className="flex -space-x-1 overflow-hidden mt-10">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
          alt=""
        />
        <div className='px-4'>
            <p className='text-white font-bold'>College ADmin</p>
            <span className='text-sm text-white'>College Admin</span>
        </div>
        </div>
    </div>
    </div>
  </div>
</div>
    )
};

export default Sidebar;