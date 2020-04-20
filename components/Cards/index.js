// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then((response) => {
        let articleLoop = response
        const newCard = cardComponentCreator(articleLoop)
            cardFinal.appendChild(newCard)
        console.log(response)
    })
    .catch((err) => {
        console.log('something went wrong', err)
    })

function cardComponentCreator(obj) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeadline = document.createElement('div');
    cardHeadline.classList.add('headline');
    cardHeadline.textContent = obj.data.articles.headline;

    let cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');

    let cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('img-container');

    let cardImg = document.createElement('img');
    cardImg.src = obj.data.articles.authorPhoto;

    let cardCredits = document.createElement('span');
    cardCredits.textContent = 'By ' + obj.data.articles.authorName;

    cardImgContainer.appendChild(cardImg);
    cardAuthor.appendChild(cardImgContainer);
    cardAuthor.appendChild(cardCredits);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);

    return card;
}

let cardFinal = document.querySelector('.cards-container');

