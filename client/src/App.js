import { Button } from 'react-bootstrap';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let apiString = "";

  function getData(){
    axios.get('http://localhost:5000/' + "data").then(resp => {
      console.log(resp);
      apiString = resp.data;
    })
  }

  return (
    <div className="App">
      <Button onClick={getData} className="m-5">Get API Data</Button>
      <h1>{apiString}</h1>
    </div>
  );
}

export default App;
