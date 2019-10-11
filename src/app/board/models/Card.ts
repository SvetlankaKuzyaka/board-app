namespace CardModel {
  export interface ICard {
    id: string
    name: string
    description: string
    dueDate?: Date | string
    assignee?: UserModel.IUser
  }

  export interface ICardList {
    id: string
    name: string
    cards: ICard[ ]
    isDoneSection: boolean
  }
}
