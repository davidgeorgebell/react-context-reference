import React from 'react';

import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
    <AuthContextProvider>
      <Navbar />
      <Booklist />
      <ThemeToggle />
    </AuthContextProvider>
    </ThemeContextProvider>
    </div>
  );
}


export default App;
