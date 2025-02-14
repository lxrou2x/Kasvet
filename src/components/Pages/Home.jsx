import React, { useEffect, useState } from 'react'
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';
import { github_username, github_api_key } from '../../../config.json';
import { Helmet } from 'react-helmet'
// lourity
const Home = () => {
  const [repositories, setRepositories] = useState([]);

  const githubApiUrl = `https://api.github.com/users/${github_username}/repos`;
  const githubApiKey = `${github_api_key}`;

  useEffect(() => {
    fetch(githubApiUrl, {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    })
      .then(response => response.json())
      .then(repos => {
        setRepositories(repos);
      })
  }, []);

  const projects = [
    { name: "ViaApp", description: "Discord sunucunuzu yeni nesil sistemlerle yönetin (09.04.2024)", url: "https://viaappdc.xyz", language: "react", extraLanguage: "typescript" },
    { name: "Pastebin", description: "Kullanıcıların metin ve kodlarını geçici olarak paylaşabildiği bir platform (08.04.2024)", url: "https://pastebin.com.tr", language: "react", extraLanguage: "typescript" },
  ]

  return (
    <div>
      <Helmet>
        <title>Kasvet - Full Stack Web Site Geliştirici</title>
        <meta name="description"
          content="Web tabanlı siteler geliştiriyor ve Discord botları ile ilgileniyorum. Portföyüm ve becerilerim için URL lxrouu adresini ziyaret edin." />
        <meta property="og:image" content="/logo.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </Helmet>
      <Navbar />
      <div className='flex justify-center py-48 text-center'>
        <div>
          <h1 className='font-bold text-4xl sm:text-6xl'>Gözlerim Kapkara içim <span className='text-sky-500 underline'>Kasvet</span></h1>
          <p className='text-gray-400 text-lg sm:text-xl mt-2 p-1'><br />Profesyonel ve Güvenlikleriyle Dolu Bir Priv Türk Sunucusu!</p>
        </div>
      </div>

      <div>
        <div className='py-4 px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-github text-2xl mr-2"></i> Github'daki projelerimiz</h2>
          <p className='text-gray-400 text-lg'>Github'daki açık kaynaklı projelerimiz</p>
        </div>

        <div className='gap-4 p-4 sm:py-8 sm:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4'>
          {repositories.length > 0 ? (
            repositories.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repositorie) => (
              repositorie.name !== 'lourityy' && (
                <div key={repositorie.id} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
                  <a rel='nofollow' href={repositorie.html_url} target='_blank'>
                    <div>
                      <h2 className='text-lg font-semibold'><i className="bi bi-journal-code"></i> {repositorie.name}</h2>
                      <span className='text-gray-400 text-sm'>{repositorie.description}</span>
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <p><i className={`bi bi-circle-fill ${repositorie.language === 'JavaScript' ? 'text-yellow-300' : repositorie.language === 'HTML' ? 'text-orange-500' : 'text-gray-400 animate-pulse'}`}></i> {repositorie.language}</p>
                      <div className='flex gap-3'>
                        <span><i className="bi bi-star"></i> {repositorie.stargazers_count}</span>
                        <span><i className="bi bi-usb-symbol"></i> {repositorie.forks_count}</span>
                      </div>
                    </div>
                  </a>
                </div>
              )
            ))
          ) : (<span>Github API key girilmemiş, config'i kontrol ediniz.</span>)}
        </div>
      </div>

      <div>
        <div className='py-4 px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-journal-bookmark text-2xl mr-2"></i> Tüm projelerimiz</h2>
          <p className='text-gray-400 text-lg'>Kendimize ait projeler</p>
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

      <div>
        <div className='py-4 px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-award text-2xl mr-2"></i> Kullandığımız dil ve teknolojiler</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 sm:py-8 sm:px-14'>
          <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
            <img className='w-6 h-6' src="/javascript.svg" alt="javascript" />
            <span className='font-semibold ml-4'>Javascript</span>
          </div>

          <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
            <img className='w-7 h-7' src="/html.svg" alt="html" />
            <span className='font-semibold ml-4'>HTML</span>
          </div>

          <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
            <img className='w-6 h-6' src="/nodejs.svg" alt="nodejs" />
            <span className='font-semibold ml-4'>Node JS</span>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 sm:py-8 sm:px-14'>
          <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
            <img className='w-6 h-6' src="/visual-studio-code.svg" alt="visual-studio-code" />
            <span className='font-semibold ml-4'>Visual Studio Code</span>
          </div>

          <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
            <img className='w-10 h-15' src="/bootstrap-icons.png" alt="bootstrap-icons" />
            <span className='font-semibold ml-4'>Boostrap Icons</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
