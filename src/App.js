import {Routes, Route} from 'react-router-dom'
import NewsList from './components/NewsList';
import NewsPage from './components/NewsPage';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NewsPage></NewsPage>}></Route>
      <Route path='/:category' element={<NewsPage></NewsPage>}></Route>
    </Routes>
  );
};

export default App;