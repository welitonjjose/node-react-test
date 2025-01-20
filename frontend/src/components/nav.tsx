import { logout } from "./util_service";


const Nav = () => {
  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-8 md:px-auto" >
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap" >
        {/* Logo */}
        < div className="text-indigo-500 md:order-1" >
          {/* Heroicon - Chip Outline */}
          < svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>

        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2" >
          <ul className="flex font-semibold justify-between" >
            {/* Active Link = text-indigo-500, Inactive Link = hover:text-indigo-500 */}
            < li className="md:px-4 md:py-2 text-indigo-500" >
              <a href="#" > Dashboard </a>
            </li>
            < li className="md:px-4 md:py-2 hover:text-indigo-400" >
              <a href="/people" > Pessoas </a>
            </li>
            < li className="md:px-4 md:py-2 hover:text-indigo-400" >
              <a href="/books" > Livros </a>
            </li>
            < li className="md:px-4 md:py-2 hover:text-indigo-400" >
              <a href="/copies" > Cópias </a>
            </li>
            < li className="md:px-4 md:py-2 hover:text-indigo-400" >
              <a href="#" > Contact </a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400 cursor-pointer" onClick={logout}>
              Sair
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default Nav;
