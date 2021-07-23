import { useState } from 'react';
const Hello = () => {

    const showName = () =>{
        console.log('Kim')
        alert("Kim")
    }

    const showAge = () =>{
        alert(26)
    }

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const showText = (setText) => {
        alert(setText.target.value)
    }
    return(
        <>
         <p>Hi, Buddy</p>
            <input className='showText' onChange={onChange} value={text} type='text' />
            <button value={text} onClick={showText}>확인하기</button>

            <br/>
            <button onClick={showName}>Show Name</button>
            <br/>
            <button onClick={showAge}>Show Age</button>
        </>
    )
}

export default Hello;