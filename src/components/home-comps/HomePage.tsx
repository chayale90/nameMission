import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import ConuntryList from '../country-comps/ConuntryList';

interface MyObject {
    country_id: string;
    probability: number;
}


const HomePage = () => {
    const { handleSubmit } = useForm();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [gender, setGender] = useState<string>("");
    const [genderProb, setGenderProb] = useState<string>("");
    const [countriesArr, setCountriesArr] = useState<MyObject[]>([]);

    const onSubmit = async () => {
        console.log(inputRef.current?.value);
        await doApigenderize(inputRef.current?.value || '');
        await doApiNationalize(inputRef.current?.value || '');
    };

    const doApigenderize = async (_nameSearch: string) => {
        let url = (`https://api.genderize.io/?name=${_nameSearch}`);
        try {
            let resp = await fetch(url);
            let dataGender = await resp.json();
            if (dataGender) {
                console.log(dataGender);
                setGender(dataGender.gender);;
                setGenderProb(dataGender.probability);;
            }
            else {
                console.log("There problem, try again later")
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const doApiNationalize = async (name: string) => {
        let url = (`https://api.nationalize.io/?name=${name}`);
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            if (data) {
                setCountriesArr(data.country);
                console.log(data.country);
            } else {
                console.log("There's a problem, try again later");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='display-6 my-2 text-danger'>Discover the most likely Gender and Nationality of your name</h4>
                <input ref={inputRef}
                    placeholder='search name...'
                    type='text'
                    className='form-control mt-3'
                    style={{ width: '50%', textAlign: "center", margin: "auto", display: "inline" }} />
                <button className='btn btn-info ms-2' type='submit'>check</button>

            </form>
            <div className='mt-4'>
                <h2>Name: {inputRef.current?.value}</h2>
              {
                gender&&<div><h4>Gender: {gender} </h4>
                <h5>probability: {genderProb}</h5>
                </div>
              }  
            </div>
            {
                countriesArr.length > 0 && <ConuntryList countriesArr={countriesArr} />
            }
        </div>
    );


}

export default HomePage;