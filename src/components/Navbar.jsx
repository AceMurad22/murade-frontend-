import React from 'react'

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
    <h1 className="text-2xl font-serif text-gray-800">Muradé</h1>
    <ul className="flex gap-6 text-sm text-gray-600">
      <li>Home</li><li>Shop</li><li>About</li><li>Contact</li><li>Login</li>
    </ul>
  </nav>
)

export default Navbar