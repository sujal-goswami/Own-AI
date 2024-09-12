import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages/index.js';

const App = () => {
  const [theme, setTheme] = useState(() => {
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
   const contrastStyle = {
    filter: theme=='dark' ? 'contrast(0.1)' : 'contrast(1)', 
  };
  return (
    <BrowserRouter>
     <header className="w-full flex justify-between items-center bg-white  dark:bg-custom-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-gray-600">
        <Link to="/">
            <div className="flex items-center">
                  <img
                    src={logo}
                    alt="logo"
                    style={contrastStyle} 
                    className="object-contain size-full"
                  />
                  <h2 className="text-2xl font-bold font-serif text-left text-black dark:text-white">OwnAI</h2>
            </div>
        </Link>

        <div className="flex items-center gap-4">
          
          <button
            id='button'
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="display-none"
          >           
            {/* {theme === 'light' ? 'Dark Mode' : 'Light Mode'} */}
          </button>
            <label class="relative cursor-pointer p-2 "  for="button">
                        <svg class="dark:hidden"  width="20" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                            <path class="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                        </svg>
                        <svg class="hidden dark:block" width="20" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                            <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                        </svg>
                  
                </label>

          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-black min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
