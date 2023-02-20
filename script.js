const itemsList =document.querySelectorAll('.tic__item');
const circle = "url('./images/circl.png')";
const cross = "url('./images/cross.png')";
let player = 'cross';
const positions = {};
const x=[0,1,2];

function clearField() {
  player = 'cross';
  itemsList.forEach((item)=>{
    item.classList.remove('winner');
    item.style.backgroundImage=null;
  });
};

function openPopup(win) {
  const popup = confirm(`Победил ${win}. Хотите сыграть ещё раз?`);
  if(popup) {
    for(let key in positions) {
      delete positions[key];
      clearField();
    };
  };
};

function addPosition(zz,s) {//проверяет кто выйграл
 if(positions[0]===zz && positions[1]===zz && positions[2]===zz){
  itemsList[0].classList.add('winner');
  itemsList[1].classList.add('winner');
  itemsList[2].classList.add('winner');
  setTimeout(openPopup, 1000, zz)
  }else if(positions[3]===zz && positions[4]===zz && positions[5]===zz){
    openPopup(zz);
  }else if(positions[6]===zz && positions[7]===zz && positions[8]===zz){
    openPopup(zz);
  }else if(positions[0]===zz && positions[3]===zz && positions[6]===zz){
    openPopup(zz);
  }else if(positions[1]===zz && positions[4]===zz && positions[7]===zz){
    openPopup(zz);
  }else if(positions[2]===zz && positions[5]===zz && positions[8]===zz){
    openPopup(zz);
  }else if(positions[0]===zz && positions[4]===zz && positions[8]===zz){
    openPopup(zz);
  }else if(positions[2]===zz && positions[4]===zz && positions[6]===zz){
    openPopup(zz);
  }
};

function a(e, ind) {////ставит крестик или нолик
  const s = e.target
  
  if(player === 'circle' && s.style.backgroundImage ==='') {
    s.style.backgroundImage = circle;
   // positions.circle.push(ind)
    positions[ind]='circle'
    //addPosition('circle',ind)
    //addPosition()
    addPosition('circle',ind)
    player = 'cross'
  }else if(player === 'cross' && s.style.backgroundImage ==='') {
    s.style.backgroundImage = cross;
    //positions.cross.push(ind)
    positions[ind]='cross'
   // addPosition('cross',ind)
   addPosition('cross',ind)
    player = 'circle'
  }
};



  itemsList.forEach((item,ind)=>{
    
    item.addEventListener('click',(e)=>a(e,ind))
  })

///выйгрыш
const win = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
