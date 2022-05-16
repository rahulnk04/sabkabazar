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