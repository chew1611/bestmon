import React, { useState } from 'react';
import About from './About';
import enTranslations from './en.json';
import mnTranslations from './mn.json';
import myanTranslations from './myan.json';
import './App.css';
import Marquee from "react-fast-marquee";

export default function Mon() {
    const [language, setLanguage] = useState('myan'); // Default language is English
    const [translations] = useState({
        'en': enTranslations,
        'mn': mnTranslations,
        'myan': myanTranslations
    });

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    };

    return (
        <div>
            <Marquee className='mar'><h1 style={{color:'red'}}>English to Mon Translation System</h1></Marquee>

            <br />
            <div className="responsive-two-column-grid tc">
                <div style={{ margin: '0 22px 22px 22px' }} className='tc'>
                    <h1 style={{ textShadow: '4px 4px 42px rgba(66, 68, 90, 1)', color: 'red' }}>
                    {translations[language]['monland']}
                    </h1>
                    <p style={{ color: 'gray', textAlign: 'justify', fontSize: '20px', textIndent: '60px' }}>
                        {translations[language]['monland.text']}
                        <br /><br />
                        <select onChange={handleLanguageChange} value={language} className="language-select"
                        style={{background:'#C34A2C',color:'white'}}
                        >
                            <option value="mn">Translate To Mon</option>
                            <option value="myan">Translate To Burmese</option>
                            <option value="en">Translate To English</option>
                        </select>
                    </p>
                </div>
                <div>
                    <div 
                    
                    className='tc1'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', borderRadius: '12px', background: '', height: '50vh',marginTop:'15px' }}>
                        <img src='state.jpg' className='logo' style={{ width: '100%' }} alt="Mon" />
                    </div>
                </div>
            </div>
            <br />
            <About />
        </div>
    );
}
