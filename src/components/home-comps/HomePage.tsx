import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';

import Gender from '../gender-comps/Gender';

const HomePage = () => {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [gender, setGender] = useState<string>("");
    const [genderProb, setGenderProb] = useState<string>("");
    const [nationalizeArr, setNationalizeArr] = useState<Array>([]);

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
                console.log(dataGender);;
                setGender(dataGender.gender);;
                setGenderProb(dataGender.probability);;
            }
            else {
                console.log("There problem, try again later")
                // toast.error("There problem, try again later")
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const doApiNationalize = async (_nameSearch: string) => {
        let url = (`https://api.nationalize.io//?name=${_nameSearch}`);
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            if (data) {
                console.log(data);;
            }
            else {
                console.log("There problem, try again later")
                // toast.error("There problem, try again later")
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='display-6 my-2'>Discover the most likely Gender and Nationality of your name</h4>
                <input ref={inputRef}
                    placeholder='search name...'
                    type='text'
                    className='form-control'
                    style={{ width: '50%', textAlign: "center", margin: "auto", display: "inline" }} />
                <button className='btn btn-info ms-2' type='submit'>check</button>

            </form>
            <div className='mt-4'>
                <h2>Name: {inputRef.current?.value}</h2>
                <h4>Gender: {gender} </h4>
                <h5>probability: {genderProb}</h5>
                <Gender />
            </div>
        </div>
    );

}

export default HomePage;