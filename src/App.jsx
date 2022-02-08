import React from 'react';
import ContactBook from './components/ContactBook';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <div className="container">
            <Header />   
            <ContactBook />
            <Footer />
        </div>
    );
};

export default App;

