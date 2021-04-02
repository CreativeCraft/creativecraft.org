const Header = () => (
  <div className="fixed z-10 w-full bg-white shadow">
    <div className="text-white bg-black bg-opacity-90">
      <div className="px-4 py-3 lg:px-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center text-xl group">
            <img
              loading="lazy"
              alt="CreativeCraft"
              className="w-8 mr-3 -mt-px"
              src="/images/logo-small.png"
            />
            <span className="text-green-500 transition group-hover:text-green-400">
              Creative
            </span>
            <span className="font-light">Craft</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Header
