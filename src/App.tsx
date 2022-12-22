import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
