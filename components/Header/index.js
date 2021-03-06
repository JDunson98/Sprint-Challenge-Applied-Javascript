// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerComponent = document.createElement('div');
    headerComponent.classList.add('header');

    let headerDate = document.createElement('span');
    headerDate.classList.add('date');
    headerDate.textContent = 'March 28, 2019';

    let headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Lambda Times';

    let headerTemp = document.createElement('span');
    headerTemp.classList.add('temp');
    headerTemp.textContent = '98°';

    headerComponent.appendChild(headerDate);
    headerComponent.appendChild(headerTitle);
    headerComponent.appendChild(headerTemp);

    console.log(headerComponent);
    return headerComponent;
}

let headerFinal = document.querySelector('.header-container');
headerFinal.appendChild(Header());
