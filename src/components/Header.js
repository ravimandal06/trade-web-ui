import React from 'react';
import people from '../assets/people.png';
import ai from '../assets/ai.png';
import './Header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Trade Physical Commodity
            <br /> With Ease</h1>
            <p>Stay on top of the market with our innovative technology, extensive
                product access, personalized education, and award-winning service.</p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} alt='' />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} alt='' />
        </div>
    </div>
);

export default Header;