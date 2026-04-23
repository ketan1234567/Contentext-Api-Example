
import './App.css'
import { Home } from './Component/Home'
import{BioProvider} from '../src/Hooks/index'
import { ReducerCounter } from './Hooks/UseReducer/ReducerCounter'

function App() {


  return (
    <>
    <BioProvider>
      <Home/>

    </BioProvider>
<ReducerCounter/>

    </>
  )
}

export default App
