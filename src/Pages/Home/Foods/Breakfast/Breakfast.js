import React from 'react';
import useBreakfirst from '../../../../hooks/useBreakfirst';
import Food from '../../../../Shared/food/Food';

const Breakfast = () => {
    const breakfasts = useBreakfirst()
    return (
        <div className='grid grid-cols-3 justify-items-center'>
            {breakfasts.map(breakfast => <Food key={breakfast.id} food={breakfast}></Food>)}
        </div>
    );
};

export default Breakfast;