let rotators = document.querySelectorAll( '.rotator' );
const counts = [];

rotators.forEach( (item) => {
  counts.push(0);
} );

rotators.forEach( (item, index) => {
  let cases = Array.from(item.querySelectorAll( '.rotator__case' ));
  item.querySelector( '.rotator__case_active' ).style.color = item.querySelector( '.rotator__case_active' ).dataset.color

  setInterval( () => {

    cases.forEach( (item) => {
      item.classList.remove( 'rotator__case_active' );
      item.style.color = cases[counts[index]].dataset.color;
    });

    cases[counts[index]].classList.add( 'rotator__case_active' );
    counts[index]++;
    if ( counts[index] >= cases.length ) counts[index] = 0;
  }, 1000 );
} );
