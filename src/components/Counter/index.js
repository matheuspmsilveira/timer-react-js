import React, { Component } from 'react';
// import { useState, useEffect } from 'react';

// COM HOOKS

// export function Counter({ value }) {
//   const [counter, setCounter] = useState(value);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevState) => prevState - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <p>{counter <= 0 ? '⏳ 0' : `⏳ ${counter}`}</p>;
// }

export class Counter extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      counter: value,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({ counter }) => ({
        counter: counter - 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;
    return <p>{counter <= 0 ? '⏳ 0' : `⏳ ${counter}`}</p>;
  }
}
