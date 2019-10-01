import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private readonly data = [
    {
      id: "list_1",
      name: "Backlog",
      cards: [
        {
          id: "item_1",
          name: "Task1",
          description: "description for task1",
          dueDate: "2019.10.03",
          assignee: {
            id: "user_1",
            firstName: "Ivan",
            lastName: "Ivanov"
          }
        },
        {
          id: "item_2",
          name: "Task2",
          description: "description for task2",
          dueDate: "2019.10.06"
        },
        {
          id: "item_3",
          name: "Task3",
          description: "description for task3"
        }
      ],
      isDoneSection: false
    },
    {
      id: "list_2",
      name: "In progress",
      cards: [
        {
          id: "item_4",
          name: "Task4",
          description: "description for task4",
          dueDate: "2019.10.04",
          assignee: {
            id: "user_2",
            firstName: "Petr",
            lastName: "Petrov"
          }
        },
        {
          id: "item_5",
          name: "Task5",
          description: "description for task5",
          assignee: {
            id: "user_1",
            firstName: "Ivan",
            lastName: "Ivanov"
          }
        },
        {
          id: "item_6",
          name: "Task6",
          description: "description for task6"
        }
      ],
      isDoneSection: false
    },
    {
      id: "list_3",
      name: "Done",
      cards: [
        {
          id: "item_7",
          name: "Task7",
          description: "description for task7",
          dueDate: "2019.09.01",
          assignee: {
            id: "user_2",
            firstName: "Petr",
            lastName: "Petrov"
          }
        },
        {
          id: "item_8",
          name: "Task8",
          description: "description for task8",
          dueDate: "2019.09.10",
          assignee: {
            id: "user_3",
            firstName: "Maxim",
            lastName: "Sidorov"
          }
        },
        {
          id: "item_9",
          name: "Task9",
          description: "description for task9",
          dueDate: "2019.09.17"
        }
      ],
      isDoneSection: true
    },
  ];

  public getData(): CardModel.ICardList[] {
    return this.data;
  }

  public removeCard(list : CardModel.ICardList, card : CardModel.ICard): void {
      const index = list.cards.findIndex(cardItem => cardItem.id === card.id);
      if (index !== -1) list.cards.splice(index, 1);
  }

}
