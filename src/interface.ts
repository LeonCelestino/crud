interface ItemInterface {
    task: string,
    priority: string,
    date: string
}

interface TableItem {
    taskItem: string,
    taskPriority: string,
    date: string
  }

interface TaskPrio {
  }

export type {
    ItemInterface,
    TaskPrio,
    TableItem
}