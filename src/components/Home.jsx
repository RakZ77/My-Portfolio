import React from 'react'
import MyPic from '../assets/MyPic.svg'
import { Download } from 'lucide-react'

const cardClasses = "rounded-2xl border-2 border-black dark:border-gray-500 px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 cursor-pointer hover:bg-gray-200 hover:-translate-y-2 dark:hover:bg-gray-800 ease-out"

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-12 sm:px-10 md:px-16 lg:px-32 md:py-20">
      <div className="w-full md:w-auto text-center md:text-left">
        {/* Profile Infomation */}
        <h1 className="lg:text-5xl text-3xl font-extrabold font-inter">Hi, I'm <span className="text-green-900 dark:text-sky-600">Say Vahrak!</span></h1>
        <h1 className="lg:text-4xl text-2xl font-mono font-bold dark:text-gray-400 my-4 sm:my-5">Information Technology Engineering <br className="hidden sm:block" /> Student & Developer</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-5 text-left">

          {/* Email */}
          <div className={cardClasses}>
            <svg width="30" height="24" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white shrink-0">
              <path d="M3.7 30C2.6825 30 1.80375 29.6406 1.06375 28.9219C0.354584 28.1719 0 27.2813 0 26.25V3.75C0 2.71875 0.354584 1.84375 1.06375 1.125C1.80375 0.375 2.6825 0 3.7 0H33.3C34.3175 0 35.1808 0.375 35.89 1.125C36.63 1.84375 37 2.71875 37 3.75V26.25C37 27.2813 36.63 28.1719 35.89 28.9219C35.1808 29.6406 34.3175 30 33.3 30H3.7ZM18.5 16.875L33.3 7.5V3.75L18.5 13.125L3.7 3.75V7.5L18.5 16.875Z" fill="currentColor" />
            </svg>
            <div className="flex flex-col min-w-0">
              <span className="body-1 text-black dark:text-white">Email</span>
              <span className="sub-body text-gray-500 truncate">vahraksay@gmail.com</span>
            </div>
          </div>

          {/* Github */}
          <a href="https://github.com/RakZ77" target="_blank" rel="noopener noreferrer" className={cardClasses}>
            <svg width="26" height="26" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="text-black dark:text-white shrink-0">
              <title>github</title>
              <defs></defs>
              <g id="page1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="dribbblePreview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="flex flex-col min-w-0">
              <span className="body-1 text-black dark:text-white">Github</span>
              <span className="sub-body text-gray-500 truncate">RakZ77</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/vahraksay" target="_blank" rel="noopener noreferrer" className={cardClasses}>
            <svg height="26" width="26" version="1.1" id="layerLinkedIn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 382" fill="none" className="text-black dark:text-white shrink-0">
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" fill="currentColor" />
            </svg>
            <div className="flex flex-col min-w-0">
              <span className="body-1 text-black dark:text-white">LinkedIn</span>
              <span className="sub-body text-gray-500 truncate">linkedin.com/in/vahraksay</span>
            </div>
          </a>
        </div>

        {/* Download CV Button */}
        <div className='flex'>
          <a href="/CV.pdf" target="_blank"
            rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-200 text-black font-inter body-1 px-4 py-2 rounded-xl hover:bg-blue-300 dark:bg-sky-600 dark:text-slate-900 dark:hover:bg-sky-500">
            <Download size={20} />
            Download CV
          </a></div>
      </div>

      {/* Profile Picture */}
      <div className="flex shrink-0">
        <img src={MyPic} alt="Profile" className="w-50 md:w-64 lg:w-92 h-auto" />
      </div>

    </div>
  )
}

export default Home