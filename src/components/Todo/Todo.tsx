import React, { useState, FormEvent } from 'react';
import { ItemInterface, TaskPrio, TableItem } from "../../interface";
import Form from './Form';
import Table from './Table';

type Props = {
};


const Todo = (props: Props) => {
  const [item, setItem] = useState<ItemInterface>({
    task: '',
    priority: "",
    date: new Date()
  });

  const [tableData, setTableData] = useState<TableItem[]>([])

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    
    setTableData([...tableData, {
      taskItem: item.task,
      taskPriority: item.priority,
      date: new Intl.DateTimeFormat("en-GB").format(item.date)
    }])

    console.log(tableData)

  }


  return (
    <div className="Todo">
      <Form 
        item={item}
        setItem={setItem}
        handleSubmit={handleSubmit}
      />
      <Table tableData={tableData} />
    </div>
  );
}

export default Todo;