function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }

  
  

  //sidebar - samping

const panahkanan = document.querySelector('#panahkanan');
const samping = document.querySelector('#samping');



function Dropdown(nomor){
  var tombol = 'dropdownmenu'+nomor;
  var panahku = 'panahku'+nomor;
  const Dropdown = document.getElementById(tombol);
  const Panah = document.getElementById(panahku);

  if (Dropdown.classList.contains('hidden')){
    Dropdown.classList.remove('hidden');
    Panah.classList.add('putarpanah');
    Panah.classList.remove('balikputarpanah');

  }else{
    Dropdown.classList.add('hidden');
    Panah.classList.add('balikputarpanah');
    Panah.classList.remove('putarpanah');
  }
}

function Melebarjuga(){
    const panahkanan = document.querySelector('#panahkanan');
    const samping = document.querySelector('#samping');

    if(samping.classList.contains('melebar')){
      samping.classList.remove('melebar');
      
    }else{
      samping.classList.add('melebar');
     
    }
  }

  
  



