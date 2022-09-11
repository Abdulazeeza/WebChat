/* eslint-disable no-unused-vars */
import './assets/styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Fontawesome';
import { useEffect } from 'react';
import pages from './pages';

// layout imports

const App = () => {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        if (process.env.REACT_APP_ENV === "production") window.console.log = () => { }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<pages.Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
