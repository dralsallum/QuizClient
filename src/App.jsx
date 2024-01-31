import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Train from "./pages/Train";
import Test from "./pages/Test";
import { Products } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { useSelector } from "react-redux";
import LessonProvider from "./LessonContext";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const lessonsCompleted = useSelector(
    (state) => state.lessons.lessonsCompleted
  );
  const basketCount = useSelector((state) => state.basket.basketCount); // Access basket count from Redux

  return (
    <LessonProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/train" element={<Train />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/test/:chapterName" element={<Test />} />
          <Route path="/items" element={<Items />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:name" element={<Products />} />
        </Routes>
      </Router>
    </LessonProvider>
  );
};

export default App;
