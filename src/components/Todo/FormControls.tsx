import React, { ChangeEvent } from 'react'

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void,
}

const FormControls: React.FC<Props> = ({handleChange}) => {
  return (
    <div className="controls-container">
      <div>
        <label htmlFor="priority-input">
          Priority of the task:
          <select name="priority" id="priority-input" onChange={handleChange}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="critic">Critical</option>
          </select>
        </label>
        <label htmlFor="input-time">
          <p>Day to conclude task:</p>
          <input type="date" name="date" id="input-time" onChange={handleChange}/>
        </label>
      </div>

    </div>
  )
}

export default FormControls