import './App.css';
import React, {useState,useEffect} from 'react'
import {callBackendAPI} from './services/testService'
import UserInput from './components/UserInput'

function App() {
  const [data, setData] = useState('null');
  const [user, setUser] = useState(null);

  useEffect(() => {
    callBackendAPI()
      .then(res => {
        setData(res.express)
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <p>
        {data}
      </p>
      <UserInput setUser = {setUser}/>
      {user? "Pog":null}
    </div>
  );
}

export default App;
