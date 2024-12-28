import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <h1 className="text-3xl font-bold tracking-wide animate-bounce">Shop.In</h1>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button className="bg-white text-indigo-600 font-bold px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300">
            Search
          </button>
        </div>
        
        <ul className="flex space-x-6 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Cart"
              className="hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className="hover:text-yellow-400 transition transform hover:scale-110 duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
