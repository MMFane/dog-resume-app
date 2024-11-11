import _toLower from 'lodash/toLower'


// todo export types from backend

interface DogType {
    id: string;
    name: string;
    description: string;
    colors: Array<string>;
    birthdate: string;
    weight: number;
}

interface DogProps {
    dog: DogType
}

function Dog(props: DogProps) {

    return(
        <li className="Dog" key={props.dog.id}>
            <p><span>{props.dog.name}</span> | <span>{props.dog.description}</span></p>
            <p>{props.dog.weight} lbs</p>
            <p>Colors: {props.dog.colors.map((color) => {
                return _toLower(color) + ", "
})}</p>
        </li>
    )
}

export default Dog;