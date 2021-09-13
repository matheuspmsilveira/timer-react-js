import { Component } from 'react';

// export function Input({ value, onChange }) {
//   return (
//     <input
//       type="number"
//       value={value}
//       onChange={onChange}
//       placeholder="Insira os segundos"
//     />
//   );
// }

export class Input extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="Insira os segundos"
      />
    );
  }
}
