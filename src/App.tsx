import { BrowserRouter } from "react-router-dom";

import { initializeApp } from "firebase/app";

import { AppRouter } from "./routes/AppRouter";
import "./App.scss";
import { Header } from "./components/layout/Header/Header";
import { firebaseConfig } from "./config/firebase/config";
import { useInitialStorage } from "./hooks";

initializeApp(firebaseConfig);

function App() {
  useInitialStorage();
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
