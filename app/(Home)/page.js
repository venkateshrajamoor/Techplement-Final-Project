import Link from 'next/link';
import ImgTilt from './ImgTilt';
const page = () => {
    return (
        <>
            <div className="  bg-gradient-to-r from-purple-500 to-pink-500 mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col-reverse items-center justify-center gap-8 overflow-hidden px-3 py-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="">
                <h4 className=" text-center text-base md:text-xl">
                    <span className="text-black">A Free and Open Source Resume Builder</span>
                </h4>
                <h1 className="text-center text-green-100 text-3xl md:mt-2 md:text-4xl 2xl:text-[2.75rem] ">
                    <span className="text-gradient">Resume Building Made Simple</span>
                </h1>
                <p className=" text-center mt-3 max-w-screen-sm text-sm text-gray-100 md:mt-10 md:text-lg">
                    Resume Builder is an ATS-friendly resume maker designed to simplify the process of creating professional
                    resumes without the hassle of login or sign-up. With Resume Builder, users can easily input their
                    details, generate a well-formatted resume, and export it in A4 PDF format.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-16 md:flex-row md:gap-8">
                    <Link href={'/editor'} className="btn-filled w-full md:w-auto">
                        <span>Create My Resume</span>
                        
                    </Link>

                    
                </div>
            </div>
            <div>
                <ImgTilt>
                    <img src="/sample.png" />
                </ImgTilt>
            </div>
            
            
        </div>
        <div>
            <footer >
                <h5 className='text-center'>Project Created By Team Web 20</h5>
            </footer>
        </div>
        </>
        
    );
};

export default page;