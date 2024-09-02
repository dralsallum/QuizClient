import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Train from "./pages/Train";
import Test from "./pages/Test";
import Eng from "./pages/Eng";
import Audio from "./pages/Audio";
import { Delete, Listen, Products, Sun, Who, Write } from "./components";
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
import Words from "./pages/Words";
import Level from "./pages/Level";
import { ProtectedRoute } from "./usePaid";
import Cashout from "./pages/Cashout";
import Condition from "./pages/Condition";
import Forgot from "./pages/Forgot";
import Shop from "./pages/Shop";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Contact from "./pages/Contact";
import Teach from "./pages/Teach";
import Class from "./pages/Class";
import { LessonProvider } from "./redux/LessonContext";
import { TeachProvider } from "./redux/TeachContext";
import Between from "./pages/Between";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LessonProvider>
            <TeachProvider>
              <GlobalStyle />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/contact" element={<Contact />} />
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
                <Route path="/audio" element={<Audio />} />
                <Route path="/meditation/listen/sun" element={<Sun />} />
                <Route
                  path="/audio/listen/:storyUrl"
                  element={
                    <ProtectedRoute>
                      <Listen />
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/train/:questionId" element={<Train />} />
                <Route path="/eng/:knowledgeId" element={<Eng />} />
                <Route
                  path="/signup"
                  element={user ? <Navigate to="/" /> : <SignUp />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/between" element={<Between />} />
                <Route path="/items" element={<Items />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/teach" element={<Teach />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/who" element={<Who />} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/:chapterId/:lessonId" element={<Class />} />
                <Route path="/condition" element={<Condition />} />
                <Route path="/cashout" element={<Cashout />} />
                <Route
                  path="/train/:questionId/test/:chapterId/:chapterName"
                  element={
                    <ProtectedRoute>
                      <Test />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/write/:spellName"
                  element={
                    <ProtectedRoute>
                      <Write />
                    </ProtectedRoute>
                  }
                />
                <Route path="/product/:name" element={<Products />} />
              </Routes>
            </TeachProvider>
          </LessonProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
