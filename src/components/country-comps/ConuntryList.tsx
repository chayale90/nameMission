import React, { useEffect, useState } from 'react'
import CountryItem from './CountryItem'

interface CountryListProps {
    countriesArr: MyObject[];
}

interface MyObject {
    country_id: string;
    probability: number;
}

const CountryList: React.FC<CountryListProps> = ({ countriesArr }) => {

    const [myCountriesArr, setMyCountriesArr] = useState<MyObject[]>([]);

    // Update the myCountriesArr state when the countriesArr prop changes
    useEffect(() => {
        setMyCountriesArr(countriesArr);
    }, [countriesArr]);

    return (
        <div className="row justify-content-center">
            {myCountriesArr.map(item => {
                return (
                    <CountryItem key={item.country_id} item={item} />
                )
            })}
        </div>
    )
}

export default CountryList;