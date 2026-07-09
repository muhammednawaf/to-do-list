import './App.css';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Monday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e) => { setToDo(e.target.value) }} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => { setToDos([...toDos, { id: Date.now(), status: false, text: toDo }]) }}></i>
      </div>
      {
        toDos.map((obj) => {
          return (
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input type="checkbox" value={obj.status} onChange={(e) => {
                    setToDos(toDos.map(obj2 => {
                      if (obj2.id === obj.id) {
                        return {
                          ...obj2,
                          status: e.target.checked
                        };
                      }
                      return obj2;
                      // if (obj2.id === obj.id) {
                      //   obj2.status = e.target.checked;
                      // }
                      // return obj2;
                    }));
                  }} name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => {
                    setToDos
                      (toDos.filter
                        (obj2 => {
                          return (obj2.id !== obj.id)
                        }
                        ))
                  }}></i>
                </div>
              </div>
            </div>
          )

        })

      }<br></br>
      <h2>Active Checklist :</h2><br></br>
      {
        toDos.map((obj) => {
          if (obj.status) {
            return (<h3>{obj.text}</h3>)
          }
          return null
        })
      }

    </div>
  );
}

export default App;
