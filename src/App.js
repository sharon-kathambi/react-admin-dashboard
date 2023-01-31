import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs  } from "./formSource";
import './style/dark.scss'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app dark">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login />} />
        <Route path="companies">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} /> 
          <Route path="new" element={<New inputs={userInputs} title='Add New Company'/> } />
        </Route>
        <Route path="jobs">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} /> 
          <Route path="new" element={<New inputs={productInputs} title='Add New Job'/> } />
        </Route>
        <Route path="applications">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} /> 
          <Route path="new" element={<New inputs={productInputs} title='Add New Application'/> } />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
