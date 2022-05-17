<img src="https://user-images.githubusercontent.com/56837281/168781306-ba3ebe19-c11e-469f-b8d4-0208cdafdf56.png" height="50">
<p float="left">
 <img src="https://user-images.githubusercontent.com/56837281/168780586-27931e9e-d2ca-4cf3-b709-efd6c633dfd5.jpg" height="250">
 <img src="https://user-images.githubusercontent.com/56837281/168780731-a5934f71-a336-42d8-b290-73608b69c56e.jpg" height="250">
 <img src="https://user-images.githubusercontent.com/56837281/168780471-257e2a90-2460-4b42-8cb3-6a61d3276cc5.jpg" height="250">
</p>
<video width="320" height="240" controls>
  <source src="https://user-images.githubusercontent.com/56837281/168788625-f8f60237-c5d6-4f15-a6cc-bffdfd6ba075.mp4" type="video/mp4">
</video>

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

_creating Redux store, reducers and actions._

productReducer
userReducer
categoryReducer
cartReducer
store

**Step 2**

_making use of createSlice from @reduxjs/toolkit_

**starting with category Reducer**

_Folder structure_
**_src -> Redux -> reducer & store_**

**Step 3**

**_import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";_**
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
**_TEST SUCCESS_**
data retived from json

**Development**

**_Step 1_**
Header and footer
creating a wrapper - which will hold header content and footer as combined

**_Step 2_**
Completing Header and footer design

**_Step 3_**
impodrting shopping cart svg and adding to Header navbar

**_Step 4_**
Working with page not found componet and designing with scss

**_Step 5_**
creating routes for home products
Starting with Home page design
working with list products component using redux and retriving with fecth api and useSelector to access the data from store

**_Step 6_**
working on cart add delete from cart

**_Step 7_**
creating Slider component for images
fetching the data image path from canned server using fetch api and resolving through redux resucer

**_Step 8_**
importing slider comp to home page

**_Step 9_**
Auth pages
Signin and signup component
designing
creating form inputs
styling with css

using Hooks setting the onChange and button click actions
storing data in redux store
