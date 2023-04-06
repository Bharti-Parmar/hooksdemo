import "./styles.css";
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {
  const [res, getData] = useState([]);
  const [show, showItem] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => getData(res.data))
  },[])

  const setItem = (val) => {
    console.log('value : ',val)
    showItem(val)
  }

  return (
    <div className="App">
      <select value={show} onChange={(e) => setItem(e.target.value)}>
      {res.map((item) => {
        return <option key={item.id} value={item.email}>{item.name}</option>
      })}
      </select>
      <br /><br />
      <span>Email: <span>{show}</span></span>
    </div>
  );
}
