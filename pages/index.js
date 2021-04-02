import Particles from 'react-particles-js'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Toast from 'light-toast'

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          loading="lazy"
          alt="Hub Screenshot"
          className="absolute inset-0 object-cover w-full h-full"
          src="/images/splash.jpg"
        />

        <Particles
          className="absolute inset-0 w-full h-full"
          params={{
            particles: {
              color: '#3BBE3B',
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                direction: 'right',
                speed: 0.15,
              },
              size: {
                value: 2,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.075,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push',
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />

        <div className="container relative h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="mb-2 text-5xl lg:text-6xl">
              <span className="text-green-500">Creative</span>
              <span className="font-light">Craft</span>
            </h1>

            <p className="mb-4 text-base lg:text-lg">
              A Builder-focused{' '}
              <span className="text-green-500">Minecraft</span> Experience
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 md:grid-cols-3">
              <div
                onClick={() => {
                  Toast.success('Copied to Clipboard')
                }}
              >
                <CopyToClipboard text="play.creativecraft.org">
                  <span className="flex items-center justify-center px-2 text-sm leading-9 text-white transition transform bg-green-500 rounded shadow cursor-pointer hover:bg-opacity-95 text-shadow-md hover:scale-105">
                    <svg
                      className="w-4 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Play Now
                  </span>
                </CopyToClipboard>
              </div>

              <a
                href="https://donate.creativecraft.org"
                target="_blank"
                className="flex items-center justify-center px-2 text-sm leading-9 text-white transition transform bg-green-500 rounded shadow hover:bg-opacity-95 text-shadow-md hover:scale-105"
              >
                <svg
                  className="w-4 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Donate
              </a>

              <a
                href="/discord"
                target="_blank"
                className="flex items-center justify-center px-2 text-sm leading-9 text-white transition transform rounded shadow hover:bg-opacity-95 bg-social-discord text-shadow-md hover:scale-105"
              >
                <span>
                  <svg
                    className="w-4 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.328 10.068a1.337 1.337 0 000 2.664 1.278 1.278 0 001.224-1.332 1.271 1.271 0 00-1.224-1.332zm4.38 0a1.337 1.337 0 101.224 1.332 1.278 1.278 0 00-1.224-1.332z"></path>
                    <path d="M19.54 0H3.46A2.466 2.466 0 001 2.472V18.7a2.466 2.466 0 002.46 2.472h13.608l-.636-2.22 1.536 1.428 1.452 1.34L22 24V2.472A2.466 2.466 0 0019.54 0zm-4.632 15.672s-.432-.516-.792-.972a3.787 3.787 0 002.172-1.428 6.867 6.867 0 01-1.38.708 7.9 7.9 0 01-1.74.516 8.406 8.406 0 01-3.108-.012 10.073 10.073 0 01-1.76-.516 6.846 6.846 0 01-1.368-.708 3.732 3.732 0 002.1 1.416c-.36.456-.8 1-.8 1a4.351 4.351 0 01-3.66-1.824 16.07 16.07 0 011.728-7 5.934 5.934 0 013.372-1.26l.12.144a8.1 8.1 0 00-3.164 1.572s.264-.144.708-.348a9.012 9.012 0 012.724-.76 1.182 1.182 0 01.2-.024 10.153 10.153 0 012.424-.024A9.782 9.782 0 0116.3 7.308a7.986 7.986 0 00-2.988-1.524l.168-.192a5.934 5.934 0 013.372 1.26 16.07 16.07 0 011.728 7 4.386 4.386 0 01-3.672 1.82z"></path>
                  </svg>
                </span>
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
