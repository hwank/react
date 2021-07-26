import useFetch from "../Hooks/useFetch";
import {useRef} from "react";
import {useHistory} from "react-router-dom";
const CreateWord = () => {

    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    function onSubmit(e) {
        e.preventDefault();

        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);

        fetch('http://localhost:3001/words',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                day : dayRef.current.value,
                eng : engRef.current.value,
                kor : korRef.current.value,
                isDone: false,
            }),
        })
            .then(res => {
                if(res.ok){
                    alert("추가 되었습니다.");
                    history.push(`/day/${dayRef.current.value}`)
                }
            });

    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>ENG</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>KOR</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>즈장</button>
        </form>
    );
}

export default CreateWord;