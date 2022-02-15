import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/month-statistics" component={MonthStatistics} exact />
      </Switch>
    </div>
  );
}

export default App;
