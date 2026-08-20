import { useEffect, useState } from 'react'
import NavBar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Techstack from './components/Techstack'
import Contact from './components/Contact'
import RunningDivider from './components/RunningDivider'
 
function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <main className="min-h-screen bg-[#FFFAEF] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <NavBar isDark={isDark} onThemeChange={setIsDark} />
      <section id='home' className='min-h-screen flex flex-col justify-center'><Home /></section>
      <RunningDivider/>
      <section id='about' className='min-h-screen flex flex-col justify-center'><About /></section>
      <RunningDivider/>
      <section id='portfolios' className='min-h-screen flex flex-col justify-center'><Project /></section>
      <RunningDivider/>
      <section id='skills' className='min-h-screen flex flex-col justify-center'><Techstack/></section>
      <section id='contact'><Contact/></section>

      <p className='flex justify-center items-center font-inter text-xs pt-12'>&copy; 2026 SAY VAHRAK's Portfolio. All Rights Reserved.</p>
    </main>
  )
}

export default App
