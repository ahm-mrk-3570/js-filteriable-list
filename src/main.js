const filterInput = document.querySelector('#filterInput');

filterInput.addEventListener('keyup', filterName);

function filterName() {
  //get input value
  const filterValue = document.querySelector('#filterInput').value.toUpperCase();

  //get UL
  const ul = document.getElementById('names');

  //get lis from ul
  const li = ul.querySelectorAll('li.collection-item');

  //loop through collection-item lis
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    //if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].classList.remove('hidden');
    } else {
      li[i].classList.add('hidden');
    }
  }
}