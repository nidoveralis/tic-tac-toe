const itemsList =document.querySelectorAll('.tic__item');
const circle = "url('./images/circl.png')";
const cross = "url('./images/cross.png')";
let player = 'cross';
const positions = {};
const x=[0,1,2];

function clearField() {
  for(let key in positions) {
    delete positions[key];
  };
  player = 'cross';
  itemsList.forEach((item)=>{
    item.classList.remove('winner');
    item.style.backgroundImage=null;
  });
};

function openPopup(win) {
  const popup = confirm(`Победил(а) ${win}. Хотите сыграть ещё раз?`);
  clearField();
};

function winnerShow(ar, win) {
  setTimeout(openPopup, 500, win);
  ar.forEach(elem=>{
    itemsList[elem].classList.add('winner');
  })
};

function addPosition(user) {//проверяет кто выйграл
    if(positions[0]===user && positions[1]===user && positions[2]===user){
      winnerShow([0,1,2], user)
    }else if(positions[3]===user && positions[4]===user && positions[5]===user){
     winnerShow([3,4,5], win)
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
    }else {
      if(Object.keys(positions).length == 9){
        setTimeout(openPopup, 500, 'дружба');
      };
    };
};

function makeMove(e, ind) {////ставит крестик или нолик
  const cell = e.target;
  if(player === 'circle' && cell.style.backgroundImage ==='') {
    cell.style.backgroundImage = circle;
    positions[ind]='circle';
    addPosition('circle');
    player = 'cross';
  }else if(player === 'cross' && cell.style.backgroundImage ==='') {
    cell.style.backgroundImage = cross;
    positions[ind]='cross';
    addPosition('cross');
    player = 'circle';
  }
};



  itemsList.forEach((item,ind)=>{
    item.addEventListener('click',(e)=>makeMove(e,ind));
  });