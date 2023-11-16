import React, { useState } from "react";
import "./App.css"

export const App = () => {
  const [list, setList] = useState([]);
  const ulRef = React.createRef();
  const input2Ref = React.createRef();

  const h1 = React.createElement('h1',{},'Hi world!');
  const h2 = React.createElement('h2',{className: 'text', style:{color: 'orange'}},'header 2');
  const p = React.createElement('p',{style:{color: 'red'}},'this is p');
  const input = React.createElement('input', {defaultValue:'55'});
  const p1 = React.createElement('p',{},'hi');
  const p2 = React.createElement('p',{},'world');
  const div = React.createElement('div',{className: 'text-grey', style:{backgroundColor: 'darkblue'}}, p1, p2);

  const handleClick = (e) => {
    const val = input2Ref.current.value.trim();
    if (!val) {
      return
    }

    const data = new Date();
    const li = React.createElement('li', {key: data}, val);
    setList([...list, li]);
    input2Ref.current.value = '';
  }
  const input2 = React.createElement('input', {ref:input2Ref});
  const button = React.createElement('button', {type:'button', onClick: handleClick}, 'Add item to list');

  return (
    <div>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {input2}
      {button}
      <ul ref={ulRef}>
        {list.map(item => item)}
      </ul>
    </div>
  );
};

export default App;