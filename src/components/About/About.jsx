import React from 'react'
import RupplLogo from '../../assets/RUPP_Logo.png'
import IflLogo from '../../assets/IFL_Logo.png'
import FelLogo from '../../assets/FE_Logo.png'
import { useInView } from './useInView'

const education = [
  {
    school: "Royal University of Phnom Penh",
    degree: "Bachelor degree of Information Technology Engineering",
    period: "2023 - Present",
    logos: [RupplLogo, FelLogo],
  },
  {
    school: "Royal University of Phnom Penh",
    degree: "Bachelor of Education in Teaching English as a Foreign Language (B.Ed. in TEFL)",
    period: "2023 - Present",
    logos: [RupplLogo, IflLogo],
  },
]

function About() {
  const [timelineRef, isInView] = useInView({ threshold: 0.2 });

  return (
    <div className="*:font-inter flex flex-col items-start w-full justify-between gap-10 px-6 py-12 sm:px-10 md:px-16 lg:px-32 md:py-20">
      <h1 className="heading-1">About <span className="text-green-900 dark:text-sky-600">Me</span></h1>
      <p className="rounded-xl bg-[#E0D3C7] dark:bg-gray-800 p-4.5 sub-body w-full">Currently a fourth-year Information Technology Engineering student at the Royal University of Phnom Penh, I have a strong interest in software engineering and technology. Through academic and personal projects, I have gained hands-on experience in programming, web and mobile application development, databases, and game development. I enjoy solving technical problems and learning new technologies. Driven by these interests, I am eager to apply my skills in a professional environment, gain practical experience, and continue developing as a software developer.</p>

      <div className="w-full">
        <div className="flex flex-row items-center gap-2 mb-6">
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-900 dark:text-sky-600">
            <path d="M4 7.44102V13.4521C4 13.8111 4 13.9905 4.05465 14.149C4.10299 14.2891 4.18187 14.4168 4.28558 14.5226C4.40287 14.6424 4.5634 14.7227 4.88446 14.8832L10.2845 17.5832C10.5468 17.7144 10.678 17.78 10.8156 17.8058C10.9375 17.8286 11.0625 17.8286 11.1844 17.8058C11.322 17.78 11.4532 17.7144 11.7155 17.5832L17.1155 14.8832C17.4366 14.7227 17.5971 14.6424 17.7144 14.5226C17.8181 14.4168 17.897 14.2891 17.9453 14.149C18 13.9905 18 13.8111 18 13.4521V7.44102M1 5.94098L10.6422 1.11987C10.7734 1.05428 10.839 1.02148 10.9078 1.00858C10.9687 0.99714 11.0313 0.99714 11.0922 1.00858C11.161 1.02148 11.2266 1.05428 11.3578 1.11987L21 5.94098L11.3578 10.7621C11.2266 10.8277 11.161 10.8605 11.0922 10.8734C11.0313 10.8848 10.9687 10.8848 10.9078 10.8734C10.839 10.8605 10.7734 10.8277 10.6422 10.7621L1 5.94098Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="heading-2">Education</h1>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative pl-6">
          {/* vertical line */}
          <div className="absolute left-1.25 top-2 bottom-2 w-0.5 bg-green-900 dark:bg-sky-600" />

          <div className="flex flex-col gap-8">
            {education.map((item, i) => (
              <div
                key={i}
                className={`relative transition-all duration-900 ease-out
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* dot */}
                <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-green-900 dark:bg-sky-600" />

                <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-1 sm:gap-3">
                  <div className="flex flex-row items-start gap-3 min-w-0">
                    {/* logos */}
                    {item.logos && (
                      <div className="flex -space-x-2 shrink-0 mt-0.5">
                        {item.logos.map((logo, j) => (
                          <img
                            key={j}
                            src={logo}
                            alt=""
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white dark:border-gray-900 bg-white"
                          />
                        ))}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h2 className="body-1">{item.school}</h2>
                      <p className="text-gray-500 dark:text-gray-400 sub-body font-semibold">{item.degree}</p>
                    </div>
                  </div>
                  <span className="body-1 whitespace-nowrap shrink-0">{item.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About