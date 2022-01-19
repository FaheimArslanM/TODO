import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/AppNavbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar></AppNavbar>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
