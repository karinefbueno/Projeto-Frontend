import './App.css'
import CardContainer from './components/CardContainer/Index';
// import Header from './components/Header/Index';
import { useFetch } from './utils/useFetch'
import { Routes, Route } from 'react-router-dom';
import Favorites from '../src/pages/Favorites/Index';
import Layout from './components/Layout';


function App() {

  useFetch();

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>

  )
}

export default App;