import React, { useState, FormEvent, ChangeEvent } from 'react';
import useAddTodo from '../../hooks/useAddTodo';

function TodoInsert() {
  const [ value, setValue ] = useState('');
  const { addTodo } = useAddTodo();

  const onChange = (e: ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    setValue(value);
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoInsert;