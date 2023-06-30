import CloseIcon from 'icons/close'
import HamburgerIcon from 'icons/hamburger'
import { useState } from 'react'
import { Location, useLocation, NavLink } from 'react-router-dom'

const NavigationHeader: () => JSX.Element = (): JSX.Element => {
  const LOGO_TEXT = ['TW', 'Tiffany Williams']
  const location: Location = useLocation()
  const [logoText, setLogoText] = useState<string>(LOGO_TEXT[0])
  const [isOpen, setIsOpen] = useState(false)
  console.log('location.pathname ', location.pathname)
  return (
    <div className="sticky top-0 mb-10 flex bg-gradient-to-r from-fuschia via-violet to-bluepurple-light font-roborto text-white">
      <header className="flex w-full justify-between px-4">
        <div className="flex items-center">
          <h1
            className="font-satisfy text-4xl"
            onMouseOver={() =>
              setLogoText(
                logoText === LOGO_TEXT[0] ? LOGO_TEXT[1] : LOGO_TEXT[0]
              )
            }
          >
            {logoText}
          </h1>
        </div>
        <button className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon color="white" height="48" width="48" />
        </button>
        <ul
          className={`hidden h-24 list-none items-center gap-4 sm:flex ${
            isOpen ? 'hidden' : ''
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }): string =>
                `flex w-24 cursor-pointer justify-center rounded-lg p-2 transition hover:bg-bluepurple-lightest ${
                  isActive ? 'bg-bluepurple-lightest' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }): string =>
                `flex w-24 cursor-pointer justify-center rounded-lg p-2 transition hover:bg-bluepurple-lightest ${
                  isActive ? 'bg-bluepurple-lightest' : ''
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `flex w-24 cursor-pointer justify-center rounded-lg p-2 transition hover:bg-bluepurple-lightest ${
                  isActive ? 'bg-bluepurple-lightest' : ''
                }`
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }): string =>
                `flex w-24 cursor-pointer justify-center rounded-lg p-2 transition hover:bg-bluepurple-lightest ${
                  isActive ? 'bg-bluepurple-lightest' : ''
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }): string =>
                `flex w-24 cursor-pointer justify-center rounded-lg p-2 transition hover:bg-bluepurple-lightest ${
                  isActive ? 'bg-bluepurple-lightest' : ''
                }`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        {isOpen && (
          <div
            className={`fixed left-0 top-0 z-20 h-full w-full bg-violet p-4 text-6xl transition-transform${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            } sm:hidden`}
          >
            <button
              className="absolute right-4 top-4"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon color="white" height="48" width="48" />
            </button>

            <ul className="flex h-full flex-col items-center justify-center gap-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }): string =>
                    `flex cursor-pointer justify-center rounded-full w-60 p-2 transition hover:bg-bluepurple-lightest ${
                      isActive ? 'bg-bluepurple-lightest' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }): string =>
                    `flex cursor-pointer justify-center rounded-full w-60 p-2 transition hover:bg-bluepurple-lightest ${
                      isActive ? 'bg-bluepurple-lightest' : ''
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `flex cursor-pointer justify-center rounded-full w-60 p-2 transition hover:bg-bluepurple-lightest ${
                      isActive ? 'bg-bluepurple-lightest' : ''
                    }`
                  }
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }): string =>
                    `flex cursor-pointer justify-center rounded-full w-60 p-2 transition hover:bg-bluepurple-lightest ${
                      isActive ? 'bg-bluepurple-lightest' : ''
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }): string =>
                    `flex cursor-pointer justify-center rounded-full w-60 p-2 transition hover:bg-bluepurple-lightest ${
                      isActive ? 'bg-bluepurple-lightest' : ''
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  )
}

export default NavigationHeader
