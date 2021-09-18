import './App.css';
import { Route, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import HomePage from './components/home-page/home-page';
import MoviePage from './components/movie-page/movie-page';
import database from './database';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <HomePage database={database}/>
                </Route>
                <Route exact path='/movies/:movieID'>
                    <MoviePage database={database}/>
                </Route>
            </Switch>
        </div>
    );
}
//Dan abramov

export default App;
