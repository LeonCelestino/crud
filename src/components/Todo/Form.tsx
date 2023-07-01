import React, { useState, ChangeEvent, FormEvent } from 'react';
import FormControls from './FormControls';
import { ItemInterface } from '../../interface';

type Props = {
  item: ItemInterface,
  setItem: React.Dispatch<React.SetStateAction<ItemInterface>>,
  handleSubmit: (e:FormEvent) => void
};

const Form: React.FC<Props> = ({ item, setItem, handleSubmit }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => setItem({ ...item, [e.target.name]: e.target.value });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-item">
        <p>Item</p>
        <input
          type="text"
          name="task"
          id="input-item"
          onChange={handleChange}
          value={item.task}
        />
      </label>
      <FormControls
        handleChange={handleChange}
       />
       <input type="submit" id="create todo" value="Create Item"/>
    </form>
  );
};

export default Form;
