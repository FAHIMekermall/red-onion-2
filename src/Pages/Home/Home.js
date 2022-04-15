import React from 'react';
import useBreakfirst from '../../hooks/useBreakfirst';
import Foods from './Foods/Foods';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner/>
            <Foods></Foods>
        </div>
    );
};

export default Home;