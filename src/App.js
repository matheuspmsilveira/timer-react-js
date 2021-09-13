import React, { Component } from 'react';
// import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';

// USANDO HOOKS

// function App() {
//   const [working, setWorking] = useState(false);
//   const [input, setInput] = useState('');

//   return (
//     <div className="App">
//       <div>
//         {working ? (
//           <Counter value={input} />
//         ) : (
//           <Input
//             value={input}
//             onChange={({ target: { value } }) => setInput(Number(value))}
//           />
//         )}
//       </div>
//       <button
//         type="button"
//         onClick={() => {
//           if (working) setInput('');
//           setWorking((prevState) => !prevState);
//         }}
//       >
//         {working ? 'Desligar contador' : 'Ligar contador'}
//       </button>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      working: false,
      input: '',
    };
  }

  render() {
    const { working, input } = this.state;

    return (
      <div className="App">
        <h1>TRYMER</h1>
        <div>
          {working ? (
            <Counter value={input} />
          ) : (
            <Input
              value={input}
              onChange={({ target: { value } }) =>
                this.setState({ input: value })
              }
            />
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            if (working) this.setState({ input: '' });
            this.setState(({ working }) => ({ working: !working }));
          }}
        >
          {working ? 'Desligar contador' : 'Ligar contador'}
        </button>
      </div>
    );
  }
}

export default App;
