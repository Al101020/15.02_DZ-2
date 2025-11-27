function btnBlWr(e) {
  const allFilter = e.target.parentElement.getElementsByTagName('*');
  
  for (let i = 0; i < allFilter.length; i++) {
    if (allFilter[i].classList.contains('black-wheat')) { // 
      allFilter[i].classList.remove('black-wheat');
    };
  }
  e.target.classList.add('black-wheat');
};

export default btnBlWr;