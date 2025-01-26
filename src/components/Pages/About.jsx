import Footer from './Main/Footer';
import Navbar from './Main/Navbar';
import { Helmet } from 'react-helmet';
// lourity
const About = () => {
    return (
        <div>
            <Helmet>
                <title>Kasvet - Hakkımızda</title>
                <meta name="description" content="Web Tabanlı Siteler geliştiriyoruz, ve Discord Sunucularımız ile ilgileniyorum." />
                <meta property="og:image" content="/logo.png" />
                <meta name="theme-color" content="#0ea5e9" />
            </Helmet>
            <Navbar />
            <div className='mt-20'>
                <div className='px-10'>
                    <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-file-earmark-person text-2xl mr-2"></i> Hakkımızda</h2>
                    <p className='text-gray-400 text-lg'>Bizim hakkımızda bir şeyler öğrenmek ister misin?</p>
                </div>

                <div className='py-0 px-0 sm:py-8 sm:px-20'>
                    <div className='flex gap-2 py-8 px-20'>
                        <span className='font-bold text-2xl text-gray-300 sm:mt-2'>Biz kimiz?</span>
                    </div>
                    <div className='p-4 sm:p-1'>
                        <h2 className='text-lg text-gray-300 font-medium'>Merhaba, ben Lxrouu! ♕</h2>
                        <p className='text-gray-400 mt-1'>Sanal alemde Memo olarak tanınan Kasvet'in Owner'lerinden biriyim, aynı zamanda Siteyi kuran benim.</p>
                        <h2 className='text-lg text-gray-300 font-medium mt-2'>Merhaba, ben Verrous! ♕</h2>
                        <p className='text-gray-400 mt-1'>Sanal alemde Polat olarak tanınan Kasvet'in Sahibiyim.</p>
                        <h2 className='text-lg text-gray-300 font-medium mt-2'>Merhaba, ben Lxrta! ♕</h2>
                        <p className='text-gray-400 mt-1'>Sanal alemde Eren olarak tanınan Wicas'ın sahibi, aynı zamanda Kasvet'in ownerlerinden biriyim.</p>
                        <h2 className='text-lg text-gray-300 font-medium mt-2'>iletişim</h2>
                        <p className='text-gray-400 mt-1'>Bizim ile iletişim kurmak için Discord sunucumuza katılabilir yada, bizlere yazabilirsiniz: 1lxrouu,1verrous,lxrta</p>
                    </div>
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
                        <img className='w-6 h-6' src="/nodejs.svg" alt="nodejs" />
                        <span className='font-semibold ml-4'>Node JS</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/typescript.svg" alt="typescript" />
                        <span className='font-semibold ml-4'>TypeScript</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/mongo.svg" alt="mongo" />
                        <span className='font-semibold ml-4'>MongoDB</span>
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

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/vercel.svg" alt="vercel" />
                        <span className='font-semibold ml-4'>Vercel</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
