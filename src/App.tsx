import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { StatisticPage } from './pages/StatisticPage'
import { Header } from './shared/Header'
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { composeEnhancers, rootReducer } from './store/store';
import { Layout } from './shared/Layout';

const store = createStore(
  rootReducer,
  composeEnhancers()
);



function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='statistic' element={<StatisticPage />} />
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
