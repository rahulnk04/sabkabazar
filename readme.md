
<img src="https://user-images.githubusercontent.com/56837281/168779466-1e3bde99-f714-42d1-aa83-b1431d225599.gif" width="150" height="150">
<img src="https://user-images.githubusercontent.com/56837281/168780471-257e2a90-2460-4b42-8cb3-6a61d3276cc5.jpg" width="250" height="250">
<img src="https://user-images.githubusercontent.com/56837281/168780586-27931e9e-d2ca-4cf3-b709-efd6c633dfd5.jpg" width="250" height="250">
<img src="https://user-images.githubusercontent.com/56837281/168780731-a5934f71-a336-42d8-b290-73608b69c56e.jpg" width="250" height="250">

**Reference -------- Final Case Study - Framework**
Reference document can be found on above folder Final Case Study - Framework

**Static data for canned server ----------- shopping-cart-assignment**
static data can be found on above folder shopping-cart-assignment


**Setup Project**
**Step 1**
npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
npm i canned node-sass react-redux react-router-dom redux @reduxjs/toolkit
npm i bootstrap react-bootstrap
npm install @mui/icons-material
npm install @mui/material @emotion/react @emotion/styled

**Step 2**
_modifying Package.json start script._
"start": "canned -p 5000 --cors=false ./server | react-scripts start",

**Step 3**
initiating Browser router in index.jsx file
root.render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
);

**Step 4**
Adding Static data inside server Folder so that canned can access


#### initiate Routes and route/switch in app.jsx

**Development**
**Step 1**

*creating Redux store, reducers and actions.*

productReducer
userReducer
categoryReducer
cartReducer
store

**Step 2**

*making use of createSlice from @reduxjs/toolkit*

**starting with category Reducer**

*Folder structure*
***src -> Redux -> reducer & store***


**Step 3**

***import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";***
setting initial state
const initialState = {
categories: [],
isLoading: false,
hasError: false,
};

making use of fetch api rather axios
creating states for loading, success and reject or pending, fullfilled and rejected

**Step 4**
creating Reducer actions for 
**productReducer, userReducer & cartReducer**

**Step 5**
Final setting the store for use in store.jsx

**Step 6**
Initiating Store provider in index.jsx

**TESTING DATA**
Creating a test component to retive the data by dispaching actions.
  ***TEST SUCCESS***
  data retived from json


**Development**

***Step 1***
Header and footer
creating a wrapper - which will hold header content and footer as combined 

***Step 2***
Completing Header and footer design


***Step 3***
impodrting shopping cart svg and adding to Header navbar 



***Step 4***
Working with page not found componet and designing with scss


***Step 5***
creating routes for home products
Starting with Home page design
working with list products component using redux and retriving with fecth api and useSelector to access the data from store 

***Step 6***
working on cart add delete from cart 

***Step 7***
creating Slider component for images 
fetching the data image path from canned server using fetch api and resolving through redux resucer 

***Step 8***
importing slider comp to home page

***Step 9***
Auth pages
Signin and signup component 
designing 
creating form inputs
styling with css

using Hooks setting the onChange and button click actions 
storing data in redux store 

