import DividerTop from './DividerTop'
import DividerBottom from './DividerBottom'

export default function Projects(): JSX.Element {
  return (
    <>
      <section id="project1">
        <DividerTop />
        <div className="flex flex-col h-[450px] md:h-[600px] lg:h-[800px] justify-center items-center self-center flex-grow bg-gradient-to-b from-black to-blue-800">
          <div className="flex justify-center items-center bg-neutral-100 dark:bg-gray-800 shadow-lg rounded-xl w-5/6 sm:w-4/6 h-auto">
            <div className="p-3 sm:p-6 text-xl lg:text-4xl">
              <img src='/Screenshot-betmates.png' />
            </div>
          </div>
        </div>
        <DividerBottom />
        <div className="flex space-x-4 justify-center py-3 relative -mt-20 z-auto">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-700 rounded-2xl shadow-md py-2 px-3 sm:p-3">
              <span className="text-center text-white font-semibold text-xs sm:text-lg xl:text-xl">
                Demo
              </span>
            </div>
          </a>
          <a
            href="https://github.com/MaxwellGr33n/BetMatesVue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[40px] md:w-[52px]">
              <img src="github-mark.svg" height="auto" width="auto" />
            </div>
          </a>
        </div>
        <div className="bg-neutral-50 dark:bg-gray-900 px-10 pt-4 pb-10 mt-4 sm:mt-0">
          <h1 className="dark:text-neutral-50 pb-2 font-semibold text-lg sm:text-2xl">
            Betting platform inspired by Ladbrokes
          </h1>
          <p className="dark:text-neutral-50 text-sm sm:text-xl">
          Presenting my Ladbrokes website clone—a showcase of my expertise in modern web development technologies. Leveraging Vue 3 for its robust and reactive framework, I've employed Pinia for state management, ensuring a streamlined user experience. My implementation of TypeScript underscores my commitment to type-safe and maintainable code, while Axios handles seamless API integrations. Complementing these technologies, the sleek and responsive design is achieved using Tailwind CSS. This project encapsulates my proficiency in Vue 3, Pinia, Axios, TypeScript, and Tailwind, demonstrating my ability to create dynamic and user-centric web applications.
          </p>
        </div>
      </section>

      <section id="project2">
        <DividerTop />
        <div className="flex flex-col h-[450px] md:h-[600px] lg:h-[800px] justify-center items-center self-center flex-grow bg-gradient-to-t from-black to-blue-800">
          <div className="flex justify-center items-center bg-neutral-100 dark:bg-gray-800 shadow-lg rounded-xl w-5/6 sm:w-4/6 h-auto">
            <div className="p-3 sm:p-6 text-xl lg:text-4xl">
              <img src='/Screenshot-weddingWebsite.png' />
            </div>
          </div>
        </div>
        <DividerBottom />
        <div className="flex space-x-4 justify-center py-3 relative -mt-20 z-auto">
          <a href="https://www.maxnjem.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-700 rounded-2xl shadow-md py-2 px-3 sm:p-3">
              <span className="text-center text-white font-semibold text-xs sm:text-lg xl:text-xl">
                Live
              </span>
            </button>
          </a>
          <a
            href="https://github.com/MaxwellGr33n?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[40px] md:w-[52px]">
              <img src="github-mark.svg" height="auto" width="auto" />
            </div>
          </a>
        </div>
        <div className="bg-neutral-50 dark:bg-gray-900 px-10 pt-4 pb-10 mt-4 sm:mt-0">
          <h1 className="dark:text-neutral-50 pb-2 font-semibold text-lg sm:text-2xl">
            My own wedding website
          </h1>
          <p className="dark:text-neutral-50 text-sm sm:text-xl">
          Introducing my personal wedding website—a testament to the timeless elegance of pure web development. Crafted entirely with Vanilla JavaScript and CSS, this project embodies the foundational skills and craftsmanship that underpin modern web technologies. Eschewing frameworks and libraries, I've embraced the essence of web development to create a bespoke, responsive, and enchanting platform to celebrate a momentous occasion. This project not only showcases my proficiency in core web technologies but also highlights my ability to create meaningful and personalized digital experiences from scratch.
          </p>
        </div>
      </section>

      <section id="project3">
        <DividerTop />
        <div className="flex flex-col h-[450px] md:h-[600px] lg:h-[800px] justify-center items-center self-center flex-grow bg-gradient-to-b from-black to-blue-800">
          <div className="flex justify-center items-center bg-neutral-50 dark:bg-gray-800 shadow-lg rounded-xl w-4/6 h-auto">
            <h1 className="text-blue-800 dark:text-neutral-100 p-6 sm:p-14 text-xl lg:text-4xl">
              Project - This is a placeholder
            </h1>
          </div>
        </div>
        <DividerBottom />
        <div className="flex space-x-4 justify-center py-3 relative -mt-20 z-auto">
          <a href="" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-700 rounded-2xl shadow-md py-2 px-3 sm:p-3">
              <span className="text-center text-white font-semibold text-xs sm:text-lg xl:text-xl">
                Demo
              </span>
            </div>
          </a>
          <a
            href="https://github.com/MaxwellGr33n?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[40px] md:w-[52px]">
              <img src="github-mark.svg" height="auto" width="auto" />
            </div>
          </a>
        </div>
        <div className="bg-neutral-50 dark:bg-gray-900 px-10 pt-4 pb-10 mt-4 sm:mt-0">
          <h1 className="dark:text-neutral-50 font-semibold text-lg sm:text-2xl">
            A Brief description of my project
          </h1>
          <p className="dark:text-neutral-50 text-sm sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            ea rerum deserunt tempora nobis ad, dolorem, sequi quo in ipsam nemo
            similique nam? Eius inventore quisquam doloremque modi quidem.
            Corporis ut voluptates quam, quia vero magnam necessitatibus minima
            atque commodi praesentium, recusandae nobis vitae repudiandae facere
            quas perferendis. Assumenda nostrum, molestias sint illo iure
            veritatis dicta maxime ipsam velit?
          </p>
        </div>
      </section>
    </>
  )
}
