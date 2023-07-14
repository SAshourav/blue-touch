import React from 'react';
import Hero from './Hero';
import Services from './Services/Services';
import ReviewHero from './ReviewHero';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <ReviewHero></ReviewHero>
            <Contact></Contact>
        </div>
    );
};

export default Home;