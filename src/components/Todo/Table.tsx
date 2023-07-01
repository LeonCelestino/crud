import React, { useState } from 'react';
import {TableItem} from "../../interface";


type Props = {
  tableData: TableItem[]
}

const Table: React.FC<Props> = ({tableData}) => {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Priority</th>
            <th>Limit time</th>
          </tr>
        </thead>
        <tbody>
          {
            
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table