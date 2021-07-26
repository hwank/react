import Word from '../component2/Word'
import { useParams} from "react-router-dom";
import useFetch from "../Hooks/useFetch";
const Day = () => {

    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    return(
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Day;