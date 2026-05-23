function Item({name}){
  return <li>{name}</li>;
}

export default function App() {
    return(
       <div>
        <h1>Hello React</h1>
        <ul>
          <Item name="Apple" />
          <Item name="Orange" />
          <Item name="Egg" />
        </ul>
    </div>
    );
}
