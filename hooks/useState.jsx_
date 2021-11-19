import { useState } from 'react';
import styles from '../../styles/Hooks.module.css';

function UseState() {
    const [count, setCount] = useState(0)

    function decreaseCount() {
        setCount(prevCount => prevCount - 1)
    }

    function increaseCount() {
        setCount(prevCount => prevCount + 1)
    }

    return ( 
        <div className={styles.section}>
            <h2>Simple counter with setState:</h2>
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
     );
}
 
export default UseState;