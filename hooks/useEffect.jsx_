import { useState, useEffect} from 'react';
import styles from '../../styles/Hooks.module.css';

function UseEffect() {
    const [resourceType, setResourceType] = useState([])
    const [items, setItems] = useState([])

    useEffect(() =>{
        fetch(`http://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    return (
        <div className={styles.section}>
            <h2>setEffect:</h2>
            <div>
                <button onClick={() => setResourceType('Posts')}>Posts</button>
                <button onClick={() => setResourceType('Users')}>Users</button>
                <button onClick={() => setResourceType('Comments')}>Comments</button>
            </div>
            <h3>{resourceType}</h3>
            {items.map(item => {
                return <div className={styles.data}>{JSON.stringify(item)}</div>
            })}
        </div>
    )
}

export default UseEffect;