import {useState} from "react";
import UserName from "./UserName";

const State = (props) =>{

    // const msg = props.age > 19? "성인" : "미성년";

    let msg = "";
    if(props.age < 19)msg = '미성년'
    else if ( props.age < 39)msg = '청년'
    else msg = '으른들'

    const [age, setAge] = useState(props.age);

    const [name, setName] = useState('Kim');
    const changeName = () => {

        setName(name === "Kim" ? "Hwan" : "Kim");
        //setAge(age + 1);
    }
    return(
        <div>
            <h1>State</h1>
            <h2 id='name'>{name},{age} : {msg}</h2>
            <UserName name = {name}/>
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default State