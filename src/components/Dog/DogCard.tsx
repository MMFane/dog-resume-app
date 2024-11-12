import _toLower from 'lodash/toLower'
import './Dog.css'
import tempDog from "./temp-dog.jpg"


// todo export types from backend

interface DogType {
    id: string;
    birthdate: string;
    breed: string,
    colors: Array<string>;
    description: string;
    name: string;
    weight: number;
}

interface DogProps {
    dog: DogType
}

function DogCard(props: DogProps) {
    return(
        <li className="p-4 m-4 border border-amber-200 bg-amber-200/50 rounded flex items-center" key={props.dog.id}>
            <img className="w-20 h-20" src={tempDog} alt="temp of my dog daisy"/>
            <div className='p-2 flex flex-col items-start'>
                <h3 className='text-lg font-bold'>{props.dog.name}</h3>
                <p>{props.dog.weight} lbs, {props.dog.breed}</p>
                <p>{props.dog.description} lbs</p>
                <p>Colors: {props.dog.colors.map((color) => {
                    return _toLower(color) + ", "
                })}</p>
            </div>
        </li>
    )
}

export default DogCard;