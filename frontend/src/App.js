import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import { useDispatch, useSelector } from "react-redux";
import Login from  './Components/Login/Login';
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Register from "./Components/Register/Register";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UserProfile from "./Components/UserProfile/UserProfile";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";
import { useEffect } from "react";
import { loadUser } from "./Actions/User";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  
const { isAuthenticated } = useSelector((state) => state.user);
  return <Router>
    <div className='App'> </div>
       {isAuthenticated && <Header/>}
 <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />

       <Route
          path="/account"
          element={isAuthenticated ? <Account /> : <Login />}
        />

        <Route
          path="/newpost"
          element={isAuthenticated ? <NewPost /> : <Login />}
        />

<Route
          path="/forgot/password"
          element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />}
        />


<Route
          path="/register"
          element={isAuthenticated ? <Account /> : <Register />}
        />

<Route
          path="/update/profile"
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />


<Route
          path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

<Route path="/search"
 element= {isAuthenticated ? <Search /> : <Login/>} />
<Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
}

export default App;
