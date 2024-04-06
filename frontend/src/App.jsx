import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import AboutPage from "./MyComponents/AboutPage";
import MyProfile from "./MyComponents/MyProfile";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path="/about" element={authUser ? <AboutPage /> : <Navigate to={"/login"} />} />
          {/* <Route path="/contactus" element={authUser ? <ContactPage /> : <Navigate to={"/login"} />} />
          <Route path="/profile" element={authUser ? <MyProfile /> : <Navigate to={"/login"} />} /> */}

          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
export default App