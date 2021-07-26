import dummy from '../db/data.json'
import { useParams} from "react-router-dom";
const Day = () => {

    const day = useParams().day;
    const wordList = dummy.words.filter(word => word.day === Number(day));
    console.log(wordList);
    return(
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {wordList.map(word => (
                    <tr>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Day;