import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { allRoutes } from './Pages/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((item, index)=> (
          <Route key={index + item.path} element={item.element} path={item.path} />
        ))}
      </Routes>
    </BrowserRouter>
  )
};

export default App;
