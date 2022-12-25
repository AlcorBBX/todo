import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import "./App.scss";
import { Header } from "./components/layout/Header/Header";

function App() {
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
