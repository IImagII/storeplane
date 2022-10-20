import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { paths } from './path'
import { HomePage } from './pages/HomePage'
import { PlanePage } from './pages/PlanePage'
import { CreatePlanePage } from './components/CreatePlanePage'

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Routes>
               <Route path={paths.home} element={<HomePage />} />
               <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
               <Route path={paths.createPlane} element={<CreatePlanePage />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
