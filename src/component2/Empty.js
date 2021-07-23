import {Link} from "react-router-dom";

const Empty = () => {

    return(
        <>
            <h2>잘못된 접근입니다.</h2>
            <Link to = "/">GO BACK</Link>
        </>
    )
}

export default Empty;