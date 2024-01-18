# BruceCoin

## Get started:
1. Clone repository
2. Open terminal in root of repo
3. Run ```docker-compose up```


- The frontend will run at ```localhost:3000```
- Backend swagger docs available at: ```localhost:4000/api-docs```
- To run the tests: 
    1. Open a terminal in the backend directory
    2. Run ```npm install```
    3. Run ```npm run test```


## Frontend Libraries
- React: For building reusable, state driven components.
- React-router-dom: For elegantly handling the routes in this app
- Bootstrap: For styling
- Axios: For making api requests to the backend

## Backend Libraries
- Axios: For making requests to CoinGecko
- Swagger: For documenting and testing the api calls
- Express: For routing the api calls
- cors: For managing CORS headers
- jest: For unit testing

## Further Improvements
- Visualisation of exchange rate history across exchanges: I think it would be valuable to plot the exchange rates on each exchange for each currency, to give the user better understanding of fluctuations across exchanges.
- A minor point, but I would have liked to present the 250 cryptos in a paginated table, at least for the desktop view, as I think this would be a cleaner user experience.

## Pride points:
- Beyond a fleeting attempt during the GameStop short squeeze, this is my first attempt at making a finance related app. I was happy to be able to get my head around order books and then use that knowledge to produce a meaningful implementation.

## Time Allocation:
- I spent 8 hours on this project, with an split of 3 hours for the frontend and 4 hours on the backend, with an additional hour tidying up and writing documentation.

## Overall Experience:
- I thoroughly enjoyed this experience, as it provided me with useful contextual knowledge that I was then able to apply to this app. 


## Directory Structure:
```
BruceCoin
├─ .DS_Store
├─ README.md
├─ backend
│  ├─ .dockerignore
│  ├─ Dockerfile
│  ├─ app.js
│  ├─ docs
│  │  └─ swagger.yaml
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ controllers
│     │  └─ exchangeController.js
│     ├─ routes
│     │  └─ apiRoutes.js
│     ├─ services
│     │  ├─ binanceService.js
│     │  └─ coinbaseService.js
│     ├─ swaggerConfig.js
│     └─ tests
│        ├─ binanceService.test.js
│        ├─ coinbaseService.test.js
│        └─ exchangeController.test.js
├─ docker-compose.yml
├─ frontend
│  ├─ .DS_Store
│  ├─ .dockerignore
│  ├─ .node-version
│  ├─ Dockerfile
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ components
│     │  ├─ CryptoList.js
│     │  ├─ ExchangeForm.js
│     │  └─ ExchangePage.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     ├─ services
│     │  └─ cryptoApi.js
│     └─ setupTests.js
└─ package-lock.json

```