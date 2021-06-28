import React, { Component, createRef } from 'react';
import { v4 } from 'uuid';

const AddColorForm = ({ store }) => {
  // constructor(props) {
  //   super(props);
  //   this.submit = this.submit.bind(this);
  //   this._title = createRef();
  //   this._color = createRef();
  // }
  let _color, _title;
  const submit = e => {
    e.preventDefault();
    store.dispatch({
      type: 'ADD_COLOR',
      id: v4(),
      title: _title,
      color: _color,
      timestamp: new Date().toString(),
    });
    // this.props.onNewColor(this._title.current.value, this._color.current.value);
    // this._title.current.value = '';
    // this._color.current.value = '#000000';
    // this._title.current.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={title => (_title = title)}
        type="text"
        placeholder="색 이름..."
        required
      />
      <input ref={color => (_color = color)} type="color" required />
      <button>추가</button>
    </form>
  );
};

export default AddColorForm;
