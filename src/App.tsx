import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ContentRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Switch>
        <ContentRoutes />
      </Switch>
    </Router>
  );
}

export default App;
