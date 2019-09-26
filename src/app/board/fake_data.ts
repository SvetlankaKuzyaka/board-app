const fake_data = [
  {
    id: "list_1",
    name: "Backlog",
    cards: [
      {
        id: "item_1",
        name: "Task 1",
        description: "description for task 1",
        dueDate: "01.11.2019",
        assignee: {
          id: "user_1",
          firstName: "Ivan",
          lastName: "Ivanov"
        }
      },
      {
        id: "item_2",
        name: "Task 2",
        description: "description for task 2",
        dueDate: "05.11.2019"
      },
      {
        id: "item_3",
        name: "Task 3",
        description: "description for task 3"
      }
    ]
  },
  {
    id: "list_2",
    name: "In progress",
    cards: [
      {
        id: "item_4",
        name: "Task 4",
        description: "description for task 4",
        dueDate: "01.10.2019",
        assignee: {
          id: "user_2",
          firstName: "Petr",
          lastName: "Petrov"
        }
      },
      {
        id: "item_5",
        name: "Task 5",
        description: "description for task 5",
        assignee: {
          id: "user_1",
          firstName: "Ivan",
          lastName: "Ivanov"
        }
      },
      {
        id: "item_6",
        name: "Task 6",
        description: "description for task 6"
      }
    ]
  },
  {
    id: "list_3",
    name: "Done",
    cards: [
      {
        id: "item_7",
        name: "Task 7",
        description: "description for task 7",
        dueDate: "01.09.2019",
        assignee: {
          id: "user_2",
          firstName: "Petr",
          lastName: "Petrov"
        }
      },
      {
        id: "item_8",
        name: "Task 8",
        description: "description for task 8",
        dueDate: "10.09.2019",
        assignee: {
          id: "user_3",
          firstName: "Maxim",
          lastName: "Sidorov"
        }
      },
      {
        id: "item_9",
        name: "Task 9",
        description: "description for task 9",
        dueDate: "17.09.2019"
      }
    ]
  },
];

export default fake_data;
