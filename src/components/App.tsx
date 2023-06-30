import profilePic320w from '../public/images/profile-pic-320w.jpg'
import profilePic480w from '../public/images/profile-pic-480w.jpg'
import profilePic768w from '../public/images/profile-pic-768w.jpg'
import profilePic1024w from '../public/images/profile-pic-1024w.jpg'
import profilePic2048w from '../public/images/profile-pic-2048w.jpg'
import { useNavigate } from 'react-router-dom'

const images: { src: string; width: string }[] = [
  { src: profilePic320w, width: '320w' },
  { src: profilePic480w, width: '480w' },
  { src: profilePic768w, width: '768w' },
  { src: profilePic1024w, width: '1024w' },
  { src: profilePic2048w, width: '2048w' }
]

const App: () => JSX.Element = (): JSX.Element => {
  const navigate = useNavigate()
  const srcSet = images.map((image) => `${image.src} ${image.width}`).join(', ')

  return (
    <div className="relative bg-white">
      <div className="mx-auto flex flex-col flex-wrap items-center justify-center gap-4 bg-gradient-to-r from-fuschia via-violet to-bluepurple-light px-4 sm:h-screen">
        <div className="mt-4 flex w-full flex-col items-center justify-center space-y-4 sm:mt-0 sm:flex-row sm:space-x-12 sm:space-y-0">
          <img
            srcSet={srcSet}
            sizes="(max-width: 320px) 280px,
                (max-width: 480px) 440px,
                (max-width: 768px) 728px,
                (max-width: 1024px) 984px,
                2048px"
            src={profilePic1024w}
            className="h-auto max-w-full rounded-full border-8 border-bluepurple-lightest sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            alt="profile picture"
          />
          <div className="flex flex-col items-center gap-y-4 text-white sm:items-start sm:gap-y-8">
            <p className="font-satisfy text-4xl md:text-6xl lg:text-8xl">
              Tiffany Williams, PhD
            </p>
            <p className="text-lg md:text-2xl lg:text-4xl">
              PROGRAMMER &#183; RESEARCHER
            </p>
            <p className="font-satisfy text-2xl md:text-4xl lg:text-6xl">
              Building for a better world
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 pb-8 text-xl  sm:flex-row lg:px-8">
          <button
            onClick={() => navigate('/about')}
            className="flex h-24 w-48 items-center justify-center rounded-full border-8 border-violet-darkest bg-white px-4 py-2 font-bold text-violet-darkest transition-all duration-200 ease-in-out hover:scale-110 hover:bg-violet-darkest hover:text-white hover:shadow-lg"
          >
            About Me
          </button>
          <button
            onClick={() => navigate('/resume')}
            className="flex h-24 w-48 items-center justify-center rounded-full border-8 border-bluepurple-dark bg-white px-4 py-2 font-bold text-bluepurple-dark transition-all duration-200 ease-in-out hover:scale-110 hover:bg-bluepurple-dark hover:text-white hover:shadow-lg"
          >
            Resume
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="flex h-24 w-48 items-center justify-center rounded-full border-8 border-bluepurple-light bg-white px-4 py-2 font-bold text-bluepurple-light transition-all duration-200 ease-in-out hover:scale-110 hover:bg-bluepurple-light hover:text-white hover:shadow-lg"
          >
            Projects
          </button>
          <button
            onClick={() => navigate('/blog')}
            className="flex h-24 w-48 items-center justify-center rounded-full border-8 border-bluepurple-lightest bg-white px-4 py-2 font-bold text-bluepurple-lightest transition-all duration-200 ease-in-out hover:scale-110 hover:bg-bluepurple-lightest hover:text-white hover:shadow-lg"
          >
            Blog
          </button>
        </div>
      </div>
    </div>
  )
}
export default App
