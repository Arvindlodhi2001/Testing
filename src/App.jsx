import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./ReduxStore/ReduxStore";
import CreatePerson from "./Component/CreatePerson/CreatePerson";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-secondary pb-5">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<CreatePerson />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
