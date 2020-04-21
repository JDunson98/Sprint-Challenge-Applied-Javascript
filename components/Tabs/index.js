// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        const newNewTopic = topicCreator(response)
        topicFinal.appendChild(newNewTopic)
        console.log(response);
    })
    .catch((err) => {
        console.log('something went wrong', err)
    })

function topicCreator(arr) {
    let topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent = arr.data.topics[0];

    let topicTwo = document.createElement('div');
    topicTwo.classList.add('tab');
    topicTwo.textContent = arr.data.topics[1];
    topic.appendChild(topicTwo);

    let topicThree = document.createElement('div');
    topicThree.classList.add('tab');
    topicThree.textContent = arr.data.topics[2];
    topic.appendChild(topicThree);

    let topicFour = document.createElement('div');
    topicFour.classList.add('tab');
    topicFour.textContent = arr.data.topics[3];
    topic.appendChild(topicFour);

    let topicFive = document.createElement('div');
    topicFive.classList.add('tab');
    topicFive.textContent = arr.data.topics[4];
    topic.appendChild(topicFive);

    let topicSix = document.createElement('div');
    topicSix.classList.add('tab');
    topicSix.textContent = arr.data.topics[5];
    topic.appendChild(topicSix);

    return topic
    
}
   
let topicFinal = document.querySelector('.topics');