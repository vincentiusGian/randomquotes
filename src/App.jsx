import { useState } from "react";
import './App.css';

function App() {

  const [quotes, setQuotes] = useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let random = Math.floor(Math.random() * data.length);
      setQuotes(data[random]);
    });
  }

  return (
    <div className="App min-h-screen dark:text-white dark:bg-slate-700 block grid justify-items-center">
      {/* <div className="w-64 carousel rounded-box">
        <div className="carousel-item w-full">tes</div>
      </div> */}
      <h1 className="text-5xl font-bold text-white">HAI CANTIK!</h1>
      <p className="m-10 mt-0">in case you don't in a good mood today, just remember this websites okayy? &lt;3</p>
      <div className="card w-96 bg-sky-950 shadow-xl min-h-fit">
        <div className="card-body">    
      <h2 className="card-title">Inspirational Quotes!!!</h2>
      <p className="text-lg">{quotes ? <><p>"{quotes.text}" - {quotes.author}.</p> <br /> <p className="text-sm">Have a good day Via! I know sometimes it'll be hard, but I'm here to keep you safe, okayy? I love you!</p></> : <p>Click the button please &lt;3</p>}</p>
      <button name="button" className="btn text-white no-outline bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-600 hover:to-indigo-600 hover:text-white" onClick={getQuotes}>Click Me!!</button>
      </div>
      </div>
    </div>
  );
}

export default App;
