import { useState } from "react";
import Logo from "../images/logo.png";


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-white ">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10" />
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-8">
                        <li className="text-gray-700 text-xl">Home</li>
                        <li className="text-gray-700 text-xl">Flashcard</li>
                        <li className="text-gray-700 text-xl">Contact</li>
                        <li className="text-gray-700 text-xl">FAQ</li>
                    </ul>
                    <button className="text-xl bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white px-10 py-2 rounded-full">
                        Login
                    </button>
                </div>
                <div className="md:hidden">

                    <button
                        className="text-xl text-gray-700"
                        onClick={toggleMenu}
                    >

                        &#9776;
                    </button>
                    
                    {isMenuOpen && (
                        <div className="mt-4">
                            <ul className="flex flex-col space-y-2">
                                <li className="text-gray-700 text-lg">Home</li>
                                <li className="text-gray-700 text-lg">Flashcard</li>
                                <li className="text-gray-700 text-lg">Contact</li>
                                <li className="text-gray-700 text-lg">FAQ</li>
                            </ul>
                            <button className="mt-2 text-lg bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white px-6 py-2 rounded-full">
                                Login
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
