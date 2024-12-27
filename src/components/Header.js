import React from 'react';
import { categories } from '../data/sampleData';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src={`${process.env.PUBLIC_URL}/images/logo.webp`} alt="Snapdeal" className="h-8" />
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search your item here"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4.41 0-8 3.59-8 8h16c0-4.41-3.59-8-8-8z" />
            </svg>
            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1.35 13.72A4 4 0 0115.65 20H8.35a4 4 0 01-3.98-3.28L3 3z" />
            </svg>
          </div>
        </div>
        
        <nav className="mt-4">
          <ul className="flex space-x-8">
            {Object.keys(categories).map(category => (
              <li key={category} className="group relative">
                <div className="flex items-center space-x-1 py-2">
                  <span>{category}&nbsp;&nbsp;</span>
                  ▼
                </div>
                <div className="hidden group-hover:block absolute z-10 w-48 bg-white shadow-lg mt-1" >
                  <ul className="py-2" style={{listStyle: 'none', margin: 0, padding: 0}}>
                    {categories[category].map((subCategory, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100"  style={{
                        padding: '8px 16px',
                        backgroundColor: '#fff',
                        border:"none",
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}>
                        {subCategory}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;