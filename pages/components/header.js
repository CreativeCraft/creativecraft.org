const Header = () => (
  <div className="fixed z-10 w-full bg-white shadow">
    <div className="text-white bg-black bg-opacity-90">
      <div className="px-4 py-3 lg:px-16">
        <div className="flex items-center">
          <div className="flex items-center text-2xl font-light">
            <img
              loading="lazy"
              alt="CreativeCraft"
              className="w-8 mr-3"
              src="/images/logo-small.png"
            />
            <span className="text-green-500">Creative</span>Craft
          </div>

          <div className="ml-auto -my-3 -mr-4 lg:-mt-6 lg:-mb-8 lg:mx-auto lg:transform lg:-translate-x-full">
            <div className="flex flex-col items-center px-8 py-2 leading-none text-center text-white bg-green-500 shadow-lg cursor-default lg:px-3 text-shadow-lg">
              <span className="text-3xl">0</span>{' '}
              <span className="text-xs uppercase transform scale-90">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
