
const loadPinsForBoard = (boardId) => {
    return new Promise((resolve, reject) => {
      $.get('../db/pins.json')
        .done((data) => {
          const pinsForBoards = data.pins.filter(pin => pin.board_id == boardId)
          resolve(pinsForBoards);
        })
        .fail((error) => {
          reject(error);
        })
    })
  }
  
  const loadPinsOnBoards = (boards) => {
    return new Promise((resolve, reject) => {
      $.get('../db/pins.json')
        .done((data) => {
          /// var x = [1,2,3].map(num => num * 2) // [2,4,6]
          const boardsWithPins = boards.map(board => {
            const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
            board.pins = matchingPins;
            return board;
          })
          resolve(boardsWithPins);
        })
        .fail((error) => {
          reject('error loadPinsOnBoards', error);
        })
    })
  }
  
  export {loadPinsForBoard, loadPinsOnBoards};