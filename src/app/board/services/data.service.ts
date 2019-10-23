import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dataAsignee: UserModel.IUser[] = [
    {
      id: "user_1",
      firstName: "Ivan",
      lastName: "Ivanov"
    },
    {
      id: "user_2",
      firstName: "Petr",
      lastName: "Petrov"
    },
    {
      id: "user_3",
      firstName: "Maxim",
      lastName: "Sidorov"
    },
    {
      id: "user_4",
      firstName: "Sergey",
      lastName: "Ptichkin"
    },
   {
      id: "user_5",
      firstName: "Isaak",
      lastName: "Levitan"
    }
  ];

  private readonly data: CardModel.ICardList[] = [
    {
      id: "list_1",
      name: "Backlog",
      cards: [
        {
          id: "item_1",
          name: "Task 1",
          description: "description for task 1",
          dueDate: "2019.10.03",
          assignee: this.dataAsignee[0]
        },
        {
          id: "item_2",
          name: "Task 2",
          description: "description for task 2",
          dueDate: "2019.10.06"
        },
        {
          id: "item_3",
          name: "Task 3",
          description: "description for task 3"
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
          name: "Task 4",
          description: "description for task 4",
          dueDate: "2019.10.04",
          assignee: this.dataAsignee[1]
        },
        {
          id: "item_5",
          name: "Task 5",
          description: "description for task 5",
          assignee: this.dataAsignee[0]
        },
        {
          id: "item_6",
          name: "Task 6",
          description: "description for task 6"
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
          name: "Task 7",
          description: "description for task 7",
          dueDate: "2019.09.01",
          assignee: this.dataAsignee[1]
        },
        {
          id: "item_8",
          name: "Task 8",
          description: "description for task 8",
          dueDate: "2019.09.10",
          assignee: this.dataAsignee[2]
        },
        {
          id: "item_9",
          name: "Task 9",
          description: "description for task 9",
          dueDate: "2019.09.17"
        }
      ],
      isDoneSection: true
    },
  ];

  public getData(): CardModel.ICardList[] {
    return this.data;
  }

  public getAsignee(): UserModel.IUser[] {
    return this.dataAsignee;
  }





  public getDataById(id: String): CardModel.ICard {
    for (const list of this.data) {
      for (const card of list.cards) {
        if (card.id === id) {
          return card;
        }
      }
    }
  }

  public getListById(id: String): CardModel.ICardList {
    for (const list of this.data) {
      if (list.id === id) {
        return list;
      }
    }
  }

  public removeCard(list : CardModel.ICardList, card : CardModel.ICard): void {
      const index = list.cards.findIndex(cardItem => cardItem.id === card.id);
      if (index !== -1) list.cards.splice(index, 1);
  }

  public addCard(list : CardModel.ICardList, card : CardModel.ICard): void {
    list.cards.push(card);
  }

}
