import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="px-8 mx-4 py-8 flex flex-col lg:flex-row items-center justify-between">
            <div className='flex' >
                <Link to="/" className="flex items-center">
                    <i class="lni lni-leaf-1"></i>
                    <p className="text-xl font-bold ml-2 text-green-700">GreenNest</p>
                </Link>
            </div>
            <div className='my-4'>
                <nav className="flex gap-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 font-semibold underline' : 'text-gray-700'}>
                        Home
                    </NavLink>
                    <NavLink to="/plants" className={({ isActive }) => isActive ? 'text-green-500 font-semibold underline' : 'text-gray-700'}>
                        Plants
                    </NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-green-500 font-semibold underline' : 'text-gray-700'}>
                        My Profile
                    </NavLink>
                </nav>
            </div>
            <div>
                <button className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-400 transition-all duration-300">
                    <span className="text-white font-medium">Register / Login</span>
                </button>
            </div>
        </div>
    );
}
