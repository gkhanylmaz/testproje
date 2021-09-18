import './App.css';
import database from './database';
import 'antd/dist/antd.css';
import ListView from './components/list-view/list-view';

function App() {
    return (
        <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ListView 
                //prop olarak database'i yolluyoruz
                database={database}
            />
        </div>
    );
}
//Dan abramov

export default App;
