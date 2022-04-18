import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Goods from "./goods/Goods";
import Main from "./main/Main";
import Navigation from "./navigation/Navigation";
import User from "./user/User";

const App = observer(() => {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route
          path="/"
          // caseSensitive={false}
          element={<Main />}
        />
        <Route
          path="/goods"
          // caseSensitive={false}
          element={<Goods />}
        />
        <Route
          path="/users"
          // caseSensitive={false}
          element={<User />}
        />
      </Routes>
    </Router>
  );
});

export default App;
