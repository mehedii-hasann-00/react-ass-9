import { NavLink, Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();
import { useState } from 'react';

export default function Header() {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleGoogleBtn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch(er => console.log(er))
    }
    const sign_out = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch(er => console.log(er));
    }
    return (
        <div className="px-8 mx-4 py-8 flex flex-col lg:flex-row items-center justify-between">
            <div className='flex' >
                <Link to="/" className="flex items-center">
                    <img src="/lg.png" alt="" className='h-16 w-16' />
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
            {/* <div>
                {!user ?
                    <button onClick={() => handleGoogleBtn()} className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-400 transition-all duration-300">
                        <span className="text-white font-medium">Register / Login</span>
                    </button>
                    :
                    <button onClick={() => sign_out()} className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-400 transition-all duration-300">
                        <img src={user.photoURL} alt="profile" className="h-8 w-8 rounded-full object-cover border border-white"/>
                        <span className="text-white font-medium">{user.displayName}</span>
                    </button>
                }
            </div> */}
            <div className="relative">
                {!user ? (
                    <button
                        onClick={handleGoogleBtn}
                        className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-green-700 to-green-500 px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-400 transition-all duration-300"
                    >
                        <span className="text-white font-medium">Register / Login</span>
                    </button>
                ) : (
                    <div className="relative">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center gap-2 cursor-pointer px-4 py-2 transition-all duration-300"
                        >
                            <i
                                className="lni lni-user-4 text-green-700"
                                style={{ fontSize: '48px' }}
                            ></i>

                        </button>

                        {/* Dropdown */}
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100">
                                <div className="px-4 py-2 border-b border-gray-200 text-gray-700 font-medium">
                                    {user.displayName}
                                </div>
                                <button
                                    onClick={sign_out}
                                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
