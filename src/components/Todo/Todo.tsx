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
    date: ""
  });

  const [tableData, setTableData] = useState<TableItem[]>([])

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const stringToDate = new Date(item.date)
    const formattedDate = new Intl.DateTimeFormat("en-GB").format(stringToDate)
  
    console.log(formattedDate)
    setTableData([...tableData, {
      taskItem: item.task,
      taskPriority: item.priority,
      date: formattedDate
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