import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { StatisticPage } from './pages/StatisticPage'
import { Header } from './shared/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='statistic' element={<StatisticPage />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
