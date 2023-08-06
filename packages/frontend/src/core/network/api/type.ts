export interface IApiGames {
  gameId: 'string'
  host: {
    id: 'string'
    name: 'string'
  }
}

// 玩家打牌 棄牌
export interface IplayCard {
  playerId: string
  card: {
    x: number
    y: number
    cardIndex: number
    cardId: string
    cardName: string
  } //1張
}
