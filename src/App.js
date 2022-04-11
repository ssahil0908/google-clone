import React, { useState } from 'react';

import { Footer } from './componenets/Footer';
import { Navbar } from './componenets/Navbar';
import { Routes, Routess } from './componenets/Routess';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
                <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                <Routess />
                <Footer />
            </div>
        </div>

    );
};

export default App;
