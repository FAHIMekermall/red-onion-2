import React from 'react';
import usedinner from '../../../../hooks/useDinner';
import Food from '../../../../Shared/food/Food';

const Dinner = () => {
    const dinners = usedinner()
    return (
        <div className='grid grid-cols-3 justify-items-center'>
        {dinners.map(dinner => <Food key={dinner.id} food={dinner}></Food>)}
    </div>
    );
};

export default Dinner;