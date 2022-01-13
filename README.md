# Project 2: Crypto Zone - React Application

Group size: ***[Anna Wilczynska](https://github.com/anwilcz), [Rhona Petersen](https:///github.com/rhonabpetersen)*** 
</br>
Duration: ***2 days***
</br>
Technologies used: ***JavaScript, React, Node.js, Axios, CSS, Bulma***
</br>
</br>
![Main image](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026303/ReadMe%20Images/SEI_ReadMes/CryptoZone/crypto_zone-main_dnadvw.png)
</br>
### [✨ View deployment ✨](https://crypto-project-sei.netlify.app/)
</br>

## Brief
The project aim was to build a multi-view React application that consumes a public API within the 48hrs hackathon. 

## Contents

- [Overview](#overview)
 - [Concept](#concept)
- [Technologies used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks and libraries](#frameworks-and-libraries)
  - [Environment](#environment)
  - [Public API's](#public-apis)
  - [Dependencies](#dependencies)
- [Planning](#planning)
  - [Approach and planning](#approach-and-planning)
  - [My contribution](#my-contribution)
- [Project development](#project-development)
  - [Frontend](#frontend)
    - [Frontend frameworks and libraries](#frontend-frameworks-and-libraries)
    - [Featured home page sections](#featured-home-page-sections)
    - [Filters](#filters)
  - [API's](#apis)
- [Deployment](#deployment)
- [Installation](#installation)
- [Wins and challenges](#wins-and-challenges)
- [Key learning](#key-learning)
- [Future upgrades](#future-upgrades)
- [Copyright and licensing](#copyright-and-licensing)

## Overview
Second project built during the Software Engineering Immersive course at the General Assembly.

### Concept
The project consumes a public API - CoinStats that provides data about cryptocurrencies. 
The application executes URL requests with Axios, processes server response and displays data in multiple views. Navigation to different application views, such as home page, coin index, coin detail page and exchanges, is built with the React router, which handles URL endpoints by matching them with respective components. The user can clip data according to the search parameters and filter coins by descending and ascending indicators.

## Technologies used

### Languages
- **JavaScript** - frontend, DOM manipulation  
- **CSS** - styling

### Frameworks and libraries
- **React** - builds frontend of a single-page application
- **Axios** - serves HTTP requests
- **Bulma** - CSS styling library

### Environment
- **Node.js**  - server setup

### Public API's
- **CoinStats** - provides information about cryptocurrencies

### Dependencies
- axios v0.24.0
- bulma v0.9.3
- react v17.0.2
- react-dom v17.0.2
- react-router-dom v5.3.0
- react-scripts v4.0.3
- sass v1.47.0

## Planning

### Approach and planning
Before committing to the development stage we had a group discussion on the concept and split of work. Rhona and I agreed that each person will work on two views. I took responsibility for the home page and coin index and Rhona focused on the coin show page, exchanges and navbar as an addition.

### My contribution
My contribution to the project includes: 
- Pulling data from a CoinStats API by building URL Axios requests based on existing API documentation.
- Building React JSX components for home page and coin index.
- Implementing a filter bar with a search option and ascending & descending sort that allows selecting the scope of data matching the requested conditions.
- Preparing ‘Trending’, ‘Big gainers’ and ‘Highest volume’ home page sections based on the top 5 coins from each category.
- Processing a JSON data object received in a server response.
- Creating a web page template using Bulma and CSS.

## Project development
### Frontend
### Frontend frameworks and libraries
Node.js environment is used to provide an extension to use other features. This allows the use of Axios as a framework managing promise-based HTTP requests to the API and converting Json documents into native JavaScript objects. </br>
</br>
The useEffect React hook executes Axios get requests to retrieve the information from the public API on the initial render and when search parameters included in dependencies array are changed.</br>
</br>
The project uses CSS class-based styling library - Bulma.

### Featured home page sections

![Featured sections](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026303/ReadMe%20Images/SEI_ReadMes/CryptoZone/crypto_zone_featured_rzwky9.png)
</br>
Featured sections on the home page identify the top 5 coins from each category.

- **Trending** - coins from top 5 rank.
- **Big gainers** - The greatest price change within the last 24hrs for the coins with volume equal or more than 500000 USD.
- **Highest volume** - The highest volume in USD

### Filters

![Featured sections](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026304/ReadMe%20Images/SEI_ReadMes/CryptoZone/crypto_zone_filters_gc3nor.png)
</br>

The application includes various filters that allow sorting data in ascending and descending order by the following indicators:
- Rank
- Symbol
- Name
- Price ($)
- Price BTC
- Price change 24h (%)
- Price change 7d (%)
- Volume ($)
</br>
The useState React hooks are used to set the filtered data and also switch sort between ascending and descending.</br>

```
 function sortCoins(label) {
       let text = (label.innerText).split('')
       text.pop()
       text = text.join('').trim()
       console.log(text)

       const sortedCoins = [...coins]

       if (text === 'Price $') {
             setSortPriceAscending(!sortPriceAscending)
             sortPriceAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortPriceAscending ? sortedCoins.sort((a, b) => a.price - b.price) : sortedCoins.sort((a, b) => b.price - a.price)
       } else if (text === 'Rank') {
             setSortRankAscending(!sortRankAscending)
             sortRankAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortRankAscending ? sortedCoins.reverse() : sortedCoins.sort((a, b) => b.rank > a.rank)
       } else if (text === 'Name') {
             setSortNameAscending(!sortNameAscending)
             sortNameAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortNameAscending ? sortedCoins.sort((a, b) => (b.name).localeCompare(a.name)) : sortedCoins.sort((a, b) => (a.name).localeCompare(b.name))
       } else if (text === 'Symbol') {
             setSortSymbolAscending(!sortSymbolAscending)
             sortSymbolAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortSymbolAscending ? sortedCoins.sort((a, b) => (b.symbol).localeCompare(a.symbol)) : sortedCoins.sort((a, b) => (a.symbol).localeCompare(b.symbol))
       } else if (text === 'Price BTC') {
             setSortPriceBtcAscending(!sortPriceBtcAscending)
             sortPriceBtcAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortPriceBtcAscending ? sortedCoins.sort((a, b) => a.priceBtc - b.priceBtc) : sortedCoins.sort((a, b) => b.priceBtc - a.priceBtc)
       } else if (text === 'Price change 24h') {
             setSortPriceChange24hAscending(!sortPriceChange24hAscending)
             sortPriceChange24hAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortPriceChange24hAscending ? sortedCoins.sort((a, b) => a.priceChange1d - b.priceChange1d) : sortedCoins.sort((a, b) => b.priceChange1d - a.priceChange1d)
       } else if (text === 'Price change 7d') {
             setSortPriceChange7dAscending(!sortPriceChange7dAscending)
             sortPriceChange7dAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortPriceChange7dAscending ? sortedCoins.sort((a, b) => a.priceChange1w - b.priceChange1w) : sortedCoins.sort((a, b) => b.priceChange1w - a.priceChange1w)
       } else if (text === 'Volume $') {
             setSortVolumeAscending(!sortVolumelAscending)
             sortVolumelAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
             sortVolumelAscending ? sortedCoins.sort((a, b) => a.volume - b.volume) : sortedCoins.sort((a, b) => b.volume - a.volume)
       }
       setSorted(sortedCoins)
 }

```

Negative and positive values of the indicators expressed in percentages are highlighted in red and green.</br>
</br>
The search option on the top of the list allows users to clip coins data to match the search field typed value.</br>

### API's
The project consumes public API - CoinStats that provides information about the cryptocurrencies, their indicators and news.</br>
**Public API:** [CoinStats](https://coinstats.app/) | [Docs](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3)

## Deployment
The application was deployed on Netlify.</br>
[[View deployment]](https://crypto-project-sei.netlify.app/)

## Installation
1. Clone GitHub project repository to your local machine.
2. Install all dependencies - npm or yarn required.
   - Frontend:</br>
     Run `yarn add/npm install`:
     - axios v0.24.0
     - bulma v0.9.3
     - react v17.0.2
     - react-dom v17.0.2
     - react-router-dom v5.3.0
     - react-scripts v4.0.3
     - sass v1.47.0
3. Run `yarn/npm start` to start the server ~ `react-scripts start`.
4. The server will be running on localhost port: 3000</br>
`http://localhost:3000/`  

### Useful commands:
`yarn/npm build` - to prepare a built version of the project  ~ `react-scripts build`

## Wins and challenges

### Wins
- Building a multi view React application that consumes cryptocurrency public API within the time limit.
- Finding a cryptocurrency API that does not block HTTP requests.
- Exploring and implementing JavaScript sort and search functions.

### Challenges
- Finding a working, public cryptocurrency API that would serve HTTP requests without a cross-origin blockage due to violating CORS policy. This error was presisting for most of the API’s we tried.
- Building an application within 48hrs and testing newly acquired programming skills in practice.

## Key learning
- Practice sending Axios requests in Node.js environment and processing the data included in the public server response.
- Learning how to use public API, manage API keys and secure environment variables before the deployment using dotenv. The final project does not use an API that requires a key but we had practice testing other API’s for this project.
- Trying out a new CSS library - Bulma.

## Future upgrades
- Polishing CSS design.
- Making the webpage responsive to the different screen sizes.
- Adding charts to the coin show page showing the price change in time. This was not possible due to the difficulties with accessing a free public API that would provide information about historical listings. 
- Implementation of a view that would allow comparing selected coins and their mathematical indicators.

## Copyright and licensing
This project was built for educational purposes only.

