import Axios from "axios";
import React, { useState} from "react";
import "./App.css";
import Kafkap from "./Kafkap";

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    Axios.get("https://api.quotable.io/random").then
      (res=> {
      console.log(res.data.content);
        setQuote(res.data.content);
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>React REST (API)</h2>
      </header>
     <div className="body-wrapper"> 
     <div className="widget-wrapper">
        <div className="widget-item">
          <h2>API Output(GET)
            REACTIVE (D8 CALL)
          </h2>
          <button onClick={getQuote}>Get</button>
{quote && <p>{quote}</p>}
        </div>

        <div className="widget-item1">
          <h2>Threads</h2>  
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">GET</button>
        </div>

        <div className="widget-item2">
          <h2>API Output(GET)
            REACTIVE (API Consumption</h2>
            <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">GET</button>
        </div>

        <div className="widget-item3">
          <h2>KAFKA Producer Reactive</h2>
          <p id="demo"></p>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">Date and Time.</button>
  </div> 

        <div className="widget-item4">
          <h2>KAFKA Consumer Reactive Listener</h2>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">GET</button>
        </div>

        <div className="widget-item5">
          <h2>AZURE PIPES</h2>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">GET</button>
        </div>

        <div className="widget-item6">
          <h2>KUBERNETES CLUSTER</h2>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">GET</button>
        </div>
     </div> 

     <div className="Quality">
     <hr></hr> 
     <h1>Quality Checks</h1>
     </div>
  </div> 

  <div className="wrapper-body">
     <div className="widget-wrapper2">
        <div className="widget-item00">
          <h2>SONARCUBE</h2>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">CALL API</button>
        </div>

        <div className="widget-item10">
          <h2>JACACO</h2>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">CALL API</button>
        </div>

        <div className="widget-item20">
          <h2>JUNIT/Mockito</h2>
          <button type="button"
onclick="document.getElementById('demo').innerHTML = demo">CALL API</button>
        </div>
        </div>
        </div>
</div>
  );
}
export default App;
