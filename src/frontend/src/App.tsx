import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Finance from "../src/pages/Finance/Finance-Payment"
import Fond from "../src/pages/Fond"
import History from "../src/pages/History"
import Main from "../src/pages/Dashboard/Main"
import Rights from "../src/pages/Rights"
import Safety from "../src/pages/Safety"
import Mainla from './layout/Mainlayout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function App(){
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<Mainla/>}>
          <Route path="/" element = {<Main/>}/>
          <Route path="/finances" element = {<Finance/>}/>
          <Route path="/history" element = {<History/>}/>
          <Route path="/rights" element = {<Rights/>}/>
          <Route path="/safety" element = {<Safety/>}/>
          <Route path="/fond" element = {<Fond/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}