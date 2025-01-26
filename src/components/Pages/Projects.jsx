import React from 'react'
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';
import { Helmet } from 'react-helmet';
// lxrouu
const Home = () => {
  const projects = [
    { name: "Wicas", description: "Partnerimiz olan Wicas, Sanalın En Kral Ailesi'dir👑", url: "https://discord.gg/wicas", language: "react", extraLanguage: "typescript" },
  ]

  const educations = [
    { name: "Sunucu P4tl4tm4 Botumuz", description: "Kurulumu En Kolay olan ve En Kral Bot'tur, Satın alım için Tıklayınız.", url: "https://discord.gg/wicas" },
  ]

  return (
    <div>
      <Helmet>
        <title>Kasvet - Partnerimiz</title>
        <meta name="description" content="Lxrouu'nun geliştirdiği projeleri inceleyin. Web geliştirme, Discord botları ve daha fazlası." />
        <meta property="og:image" content="/logo.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </Helmet>
      <Navbar />
      <div className='mt-20'>
        <div className='px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-journal-bookmark text-2xl mr-2"></i> Partnerlerimiz</h2>
          <p className='text-gray-400 text-lg'>Partnerler</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:py-8 sm:px-14'>
          {projects.map((project, index) => (
            <div key={++index} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
              <a rel='nofollow' href={project.url} target='_blank'>
                <div className='min-h-[5rem]'>
                  <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'><i className="bi bi-journal-code"></i> {project.name}</h2>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <span className='text-gray-400 text-sm'>{project.description}</span>
                </div>
                <div className='mt-4 flex justify-between'>
                  <p><i className="bi bi-link-45deg"></i> {project.url}</p>
                  <div className='flex gap-3'>
                    <span>{project.language === 'react' ? <div className='flex'><img className='w-8 h-8' src="/react.svg" alt="react" /> {project.extraLanguage === 'typescript' ? <img className='w-6 h-6 mt-1' src="/typescript.svg" alt="typescript" /> : project.extraLanguage === 'javascript' ? <img className='w-6 h-6 mt-1' src="/javascript.svg" alt="javascript" /> : ''}</div> : ''}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-20'>
        <div className='px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i class="bi bi-backpack text-2xl mr-2"></i> Yazılımlar</h2>
          <p className='text-gray-400 text-lg'>Sattığımız Yazılımlar veya Discord Botları</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:py-8 sm:px-14'>
          {educations.map((education, index) => (
            <div key={++index} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
              <a rel='nofollow' href={education.url} target='_blank'>
                <div className='min-h-[5rem]'>
                  <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'><i class="bi bi-backpack"></i> {education.name}</h2>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <span className='text-gray-400 text-sm'>{education.description}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
