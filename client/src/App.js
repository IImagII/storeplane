import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { paths } from './path'
import { HomePage } from './pages/HomePage'
import { PlanePage } from './pages/PlanePage'
import { CreatePlanePage } from './components/CreatePlanePage'
import { OrderPlanePage } from './pages/OrderPlanePage'

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Routes>
               <Route path={paths.home} element={<HomePage />} />
               <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
               <Route path={paths.createPlane} element={<CreatePlanePage />} />
               <Route path={paths.order} element={<OrderPlanePage />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
