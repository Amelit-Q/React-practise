import React from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data)); //dispatch выполняется после get запроса (промис), когда произойдёт первый рендер, отправь на сервак запрос по указанной ссылке
    }); //после ответа от сервера (данные, выполни функцию dispatch), функция получает все пиццы, создаёт объект, и этот объект передаёт в dispatch
  }, []); // после dispatch уже передаёт это всё внутрь redux
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
