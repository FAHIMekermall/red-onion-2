import React from 'react';
import useLunch from '../../../../hooks/useLunch';
import Food from '../../../../Shared/food/Food';

const Lunch = () => {
    const lunch = useLunch()
    return (
        <div className='grid grid-cols-3 justify-items-center'>
        {lunch.map(lunchItem => <Food key={lunchItem.id} food={lunchItem}></Food>)}
    </div>
    );
};

export default Lunch;