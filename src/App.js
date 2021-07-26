import Empty from "./component2/Empty"
import Header from "./component2/Header";
import DayList from "./component2/DayList";
import CreateWord from "./component2/CreateWord";
import Day from "./component2/Day"
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateDay from "./component2/CreateDay";

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

                <Route path="/create_word">
                    <CreateWord />
                </Route>
                <Route path="/create_day">
                    <CreateDay/>
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
