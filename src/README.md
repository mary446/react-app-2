## Flatiron Bank 
-This is basically a bank app that is going to be created using react library or framework
-Its supposed to display transactions that a person using the app makes.

## Project Description

1. What it does
-Its supposed to fetch data from a given API from a json file I named mine db.json that is in this project folder
-After fetching the data , structure it so that the data from Api is displayed when the user opens the page 
-The user can add a transaction by filing out a form and submitting it to add a transaction that will be added to the backend API 
-A user will have the priviledge of searching the transaction and the fetched data will only display what matches the users search

2. Technologies used
-Basically used react so in the escense of using react 
- Fetched data Asynchronously
- Used useEffect hook to fetch the data
- UseState was also used in this 
-Using react is much easier and better compared to vanilla Javascript as it displays a single-page-application and the code has few lines of codes.
-Also contains css file for styling.
 
## Table of Contents
A walkthrough you'll have to link all the extra files created to make this app functional in app.js
--in my project I linked:
- db.json
- TransactionForm.js
- TransactionTable.js
- TransactionFilter.js
- Styles.css

## Installation & Running 
- Since am using stalkblitz I dont need to run npm install or npm start Ill just run
<!-- json-server --watch db.json -->in my terminal inside the folder to get my json data running so that it can display data and not run into an error fetching data

## How to use the project
- To make use of the project and to display the data ull have to click on the search button to display all the transactions and if you wanna search by description you can type the first letter of the transaction you need and hit the search button and it will display all transactions that begins with the letter that you input 
- To add a transaction input all the fields provided then hit the button addTransaction and the transaction will be added to your table.

## Conclusion 
Make sure that all files are linked to the app by importing and exporting and also all functions should be defined.




