import {Button, Form} from 'react-bootstrap';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000", { transports : ['websocket'] });

function App() {
  const [apiString, setApiString] = useState("Hello From React!");
  const [msg, setMsg] = useState("");
  let BaseUrl = "http://localhost:5000/";

  function getData(){
    axios.get(BaseUrl + "data").then(resp => {
      setApiString(resp.data);
    })
  }

  function sendMsg(e) {
    e.preventDefault();
    if (msg) {
      socket.emit('chat_message', msg);
      setMsg("");
    }
  }

  return (
    <div className="App">
      <Button onClick={getData} className="m-5">Get API Data</Button>
      <h1>{apiString}</h1>
      <Form onSubmit={e => sendMsg(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control value={msg} onChange={e => setMsg(e.target.value)} type="text" placeholder="Message" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
