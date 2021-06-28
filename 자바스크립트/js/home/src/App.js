import React, { useState, useEffect } from 'react';

export function useInput(initialState) {
  const [val, setVal] = useState(initialState);

  const onChange = (e) => {
    const val = e.target.value; 
    setVal(val)
  }
  return [ val, onChange ]
}

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState('');

  const [name, onChangeName] = useInput('bono');
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count])

  return (
        <div>
          <p>clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>click!!</button>
          <div>
          <input 
            value={name}
            onChange={onChangeName}
          />            
          </div>
        </div>
  );
}




export default App;
