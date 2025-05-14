import React from 'react'

const Featured = () => (
  <section className="py-10 px-6">
    <h3 className="text-2xl font-serif text-gray-800 mb-6">Featured Products</h3>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="p-4 border rounded shadow-sm">
        <div className="bg-gray-200 h-40 mb-2"></div>
        <h4 className="font-semibold">Product Name</h4>
        <p className="text-sm text-gray-600">$99.00</p>
      </div>
      <div className="p-4 border rounded shadow-sm">
        <div className="bg-gray-200 h-40 mb-2"></div>
        <h4 className="font-semibold">Product Name</h4>
        <p className="text-sm text-gray-600">$89.00</p>
      </div>
      <div className="p-4 border rounded shadow-sm">
        <div className="bg-gray-200 h-40 mb-2"></div>
        <h4 className="font-semibold">Product Name</h4>
        <p className="text-sm text-gray-600">$79.00</p>
      </div>
    </div>
  </section>
)

export default Featured