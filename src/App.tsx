import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './view/Home';
import { TodoList } from './view/ToDoList';
import { Calculator } from './view/Calculator';

function App() {
	return (
		<Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </Router>
		
	);
}

export default App;


