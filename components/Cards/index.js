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
        console.log(response)

        let javascriptNewHeadline = cardComponentCreator(response.data.articles.javascript[0].headline, response.data.articles.javascript[0].authorPhoto, response.data.articles.javascript[0].authorName)
        let javascriptNewHeadline1 = cardComponentCreator(response.data.articles.javascript[1].headline, response.data.articles.javascript[1].authorPhoto, response.data.articles.javascript[1].authorName)
        let javascriptNewHeadline2 = cardComponentCreator(response.data.articles.javascript[2].headline, response.data.articles.javascript[2].authorPhoto, response.data.articles.javascript[2].authorName)
        let javascriptNewHeadline3 = cardComponentCreator(response.data.articles.javascript[3].headline, response.data.articles.javascript[3].authorPhoto, response.data.articles.javascript[3].authorName)

        cardFinal.appendChild(javascriptNewHeadline)
        cardFinal.appendChild(javascriptNewHeadline1)
        cardFinal.appendChild(javascriptNewHeadline2)
        cardFinal.appendChild(javascriptNewHeadline3)

        let bootstrapHeadline = cardComponentCreator(response.data.articles.bootstrap[0].headline, response.data.articles.bootstrap[0].authorPhoto, response.data.articles.bootstrap[0].authorName)
        let bootstrapHeadline1 = cardComponentCreator(response.data.articles.bootstrap[1].headline, response.data.articles.bootstrap[1].authorPhoto, response.data.articles.bootstrap[1].authorName)
        let bootstrapHeadline2 = cardComponentCreator(response.data.articles.bootstrap[2].headline, response.data.articles.bootstrap[2].authorPhoto, response.data.articles.bootstrap[2].authorName)

        cardFinal.appendChild(bootstrapHeadline)
        cardFinal.appendChild(bootstrapHeadline1)
        cardFinal.appendChild(bootstrapHeadline2)

        let techHeadline = cardComponentCreator(response.data.articles.technology[0].headline, response.data.articles.technology[0].authorPhoto, response.data.articles.technology[0].authorName)
        let techHeadline1 = cardComponentCreator(response.data.articles.technology[1].headline, response.data.articles.technology[1].authorPhoto, response.data.articles.technology[1].authorName)
        let techHeadline2 = cardComponentCreator(response.data.articles.technology[2].headline, response.data.articles.technology[2].authorPhoto, response.data.articles.technology[2].authorName)

        cardFinal.appendChild(techHeadline)
        cardFinal.appendChild(techHeadline1)
        cardFinal.appendChild(techHeadline2)

        let jqueryHeadline =  cardComponentCreator(response.data.articles.jquery[0].headline, response.data.articles.jquery[0].authorPhoto, response.data.articles.jquery[0].authorName)
        let jqueryHeadline1 =  cardComponentCreator(response.data.articles.jquery[1].headline, response.data.articles.jquery[1].authorPhoto, response.data.articles.jquery[1].authorName)
        let jqueryHeadline2 =  cardComponentCreator(response.data.articles.jquery[2].headline, response.data.articles.jquery[2].authorPhoto, response.data.articles.jquery[2].authorName)

        cardFinal.appendChild(jqueryHeadline)
        cardFinal.appendChild(jqueryHeadline1)
        cardFinal.appendChild(jqueryHeadline2)
        
        let nodeHeadline = cardComponentCreator(response.data.articles.node[0].headline, response.data.articles.node[0].authorPhoto, response.data.articles.node[0].authorName)
        let nodeHeadline1 = cardComponentCreator(response.data.articles.node[1].headline, response.data.articles.node[1].authorPhoto, response.data.articles.node[1].authorName)

        cardFinal.appendChild(nodeHeadline)
        cardFinal.appendChild(nodeHeadline1)
    }) 
    .catch((err) => {
        console.log('something went wrong', err)
    })

function cardComponentCreator(headline, authorPhoto, authorName) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardHeadline = document.createElement('div');
    cardHeadline.classList.add('headline');
    cardHeadline.textContent = headline;

    let cardAuthor = document.createElement('div');
    cardAuthor.classList.add('author');

    let cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('img-container');

    let cardImg = document.createElement('img');
    cardImg.src = authorPhoto;

    let cardCredits = document.createElement('span');
    cardCredits.textContent = 'By ' + authorName;

    cardImgContainer.appendChild(cardImg);
    cardAuthor.appendChild(cardImgContainer);
    cardAuthor.appendChild(cardCredits);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);

    return card;
}

let cardFinal = document.querySelector('.cards-container');

