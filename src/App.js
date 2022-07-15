import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import LanguagesRoute from './components/LanguagesRoute/LanguagesRoute';
import CropNamesRoute from './components/CropNamesRoute/CropNamesRoute';
import CropRecommendationRoute from './components/CropRecommendationRoute/CropRecommendationRoute';
import OrderDetailsRoute from './components/OrderDetailsRoute/OrderDetailsRoute';
import Home from './components/Home/Home';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
      <Route exact path="/languages" element={<LanguagesRoute />} />
      <Route exact path="/crop-names" element={<CropNamesRoute/>} />
      <Route exact path="/crop-recommendation" element={<CropRecommendationRoute/>} />
      <Route exact path="/order-details" element={<OrderDetailsRoute />} />
    </Routes>
  </BrowserRouter>
)

export default App;

