import React from 'react';

interface CountryItemProps {
    item: {
        country_id: string;
        probability: number;
    };
}
const CountryItem: React.FC<CountryItemProps> = ({ item }) => {

    return (
        <div className='col-md-3 col-sm-5 p-2 m-2 shadow border'>
            <div>country: {item.country_id}</div>
            <div>probability: {item.probability}</div>
        </div>
    )
}

export default CountryItem;