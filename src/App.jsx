import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Train from "./pages/Train";
import Test from "./pages/Test";
import { Listen, Meditation, Products, Sun, Vocabulary } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { LessonProvider } from "./redux/LessonContext";
import Words from "./pages/Words";
import Level from "./pages/Level";
import { ProtectedRoute } from "./usePaid";
import Cashout from "./pages/Cashout";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LessonProvider>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/vocabulary/:vocabSet"
                element={
                  <ProtectedRoute>
                    <Words />
                  </ProtectedRoute>
                }
              />
              <Route path="/level/:gradeSet" element={<Level />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/meditation/listen/sun" element={<Sun />} />

              <Route
                path="/meditation/listen/:storyUrl"
                element={
                  <ProtectedRoute>
                    <Listen />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/train" element={<Train />} />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <SignUp />}
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/test/:chapterName" element={<Test />} />
              <Route path="/items" element={<Items />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/cashout" element={<Cashout />} />
              <Route path="/product/:name" element={<Products />} />
            </Routes>
          </LessonProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
