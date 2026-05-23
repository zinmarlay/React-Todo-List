import { useState } from "react";

function Item({ item }) {
    return <li>{item.name}</li>;
}

export default function App() {
    const [data, setData] = useState([
        { id: 3, name: "Bread", done: false },
        { id: 2, name: "Butter", done: true },
        { id: 1, name: "Banana", done: false },
    ]);

    const addItem = () => {
        setData([{ id: 4, name: "Egg", done: false }, ...data]);
    }

    return (
        <div>
            <h1>Hello React ({data.length})</h1>
            <button onClick={addItem}>Add</button>
            <ul>
                {data.map(item => {
                    return <Item key={item.id} item={item} />
                })}
            </ul>
        </div>
    );
}