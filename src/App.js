import Empty from "./component2/Empty"
import Header from "./component2/Header";
import DayList from "./component2/DayList";
import Day from "./component2/Day"
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Header/>
            <Switch>

                <Route exact path="/">
              <DayList/>
              </Route>

                <Route path="/day/:day">
              <Day/>
              </Route>

                <Route>
                    <Empty/>
                </Route>
            </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
