import { useState } from 'react';
import UseEffect from '../components/hooks/useEffect';
import UseState from '../components/hooks/useState';
import styles from '../styles/Hooks.module.css';

function Hooks() {
    return (
        <div className={styles.container}>
            <h1>React Hook Lessons</h1>
            <UseState />
            <UseEffect />
        </div>
     );
}
 
export default Hooks;

