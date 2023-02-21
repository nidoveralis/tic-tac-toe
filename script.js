const itemsList = document.querySelectorAll('.tic__item');
const modeGame = document.querySelector('.tic__select');
const circle = "url('./images/circl.png')";
const cross = "url('./images/cross.png')";
const positions = new Object();

function clearField() {
  for(let key in positions) {
    delete positions[key];
  };
  itemsList.forEach((item)=>{
    item.classList.remove('winner');
    item.style.backgroundImage=null;
  });
};

function openPopup(win) {
  const popup = confirm(`Победил(а) ${win}. Хотите сыграть ещё раз?`);
  clearField();
  clickCell();
};

function winnerShow(ar, win) {
  setTimeout(openPopup, 500, win);
  ar.forEach(elem=>{
    itemsList[elem].classList.add('winner');
  });
};

function addPosition(user) {//проверяет кто выйграл
    if(positions[0]===user && positions[1]===user && positions[2]===user){
      winnerShow([0,1,2], user)
    }else if(positions[3]===user && positions[4]===user && positions[5]===user){
     winnerShow([3,4,5], user)
    }else if(positions[6]===user && positions[7]===user && positions[8]===user){
      winnerShow([6,7,8], user)
    }else if(positions[0]===user && positions[3]===user && positions[6]===user){
      winnerShow([0,3,6], user)
    }else if(positions[1]===user && positions[4]===user && positions[7]===user){
      winnerShow([1,4,7], user)
    }else if(positions[2]===user && positions[5]===user && positions[8]===user){
      winnerShow([2,5,8], user)
    }else if(positions[0]===user && positions[4]===user && positions[8]===user){
      winnerShow([0,4,8], user)
    }else if(positions[2]===user && positions[4]===user && positions[6]===user){
      winnerShow([2,4,6], user)
    };
};

function searchFreeCells() {//определяет наличие свободных ячеек
  const freeCells=[];
  for(i in positions) {
    if(positions[i]===''){
      freeCells.push(i);
    };
  };
  if(freeCells.length === 0) {
    setTimeout(openPopup, 500, 'дружба');
  } else {
  moveComp(freeCells);
  };
};

function moveComp(move) {///ход компьютера
  const numberCell = Math.floor(Math.random() * move.length)
  itemsList[move[numberCell]].style.backgroundImage = circle;
  positions[move[numberCell]]='circle';
  addPosition('circle');
};

function moveUser(e, ind) {////ход игрока
  const cell = e.target;
  if(cell.style.backgroundImage ==='') {
    cell.style.backgroundImage = cross;
    positions[ind]='cross';
    addPosition('cross');
    searchFreeCells();
  }
};

function clickCell() {
  itemsList.forEach((item,ind)=>{
  positions[ind]=''
  item.addEventListener('click',(e)=>{
    moveUser(e,ind)});
  });
};

clickCell();