import './App.css';
import Hello from './component/Hello';
import Welcome from "./component/Welcome";
import styles from './component/css/App.module.css'
import State from "./component/State";
{/*<Hello/>*/}
{/*<Welcome/>*/}
{/*<div className={styles.box}></div>*/}

function Test() {

    return (
        <div className="Test">
            <Hello/>
            <State age={10}/>
            <State age={20}/>
            <State age={50}/>
        </div>
    );
}

export default Test;
