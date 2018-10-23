import {loadBoards} from '../data/boardsData.js'

const bindEvents = () => {
    $('#user-boards').on('click', '.board-card', (e) => {
      const clickerBoardId = $(e.target).closest('board-card')
      .attr('id');
      $('#boards-page').hide();
      $('#pins-page').show();
    })
}
const writeBoards = (boards) => {
    let domString = '';
    boards.forEach(bords => {
        domString += `<div id='${bords.id}' class="board-card p-2">
        <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${boards.name}</h5>
          <p class="card-text">42 Pins</p>
        </div>
    </div>`
    });
    $('#user-boards').html(domString)

}

const initalizeBoardView = () => {
    loadBoards().then((boards) => {
        writeBoards(boards)
        bindEvents();
        }).catch((error) => {
        console.error(error);
    })
}
export {initalizeBoardView};