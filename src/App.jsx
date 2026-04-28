
import './App.css'
import { Home } from './Component/Home'
import{BioProvider} from '../src/Hooks/index'
import { ReducerCounter } from './Hooks/UseReducer/ReducerCounter'
import { Controlled } from './Component/Controlled'
import { Uncontrolleres_form } from './Component/Uncontrolleres_form'

function App() {


  return (
    <>
    <BioProvider>
      <Home/>

    </BioProvider>
<ReducerCounter/>
{/* <Controlled/> */}
<Uncontrolleres_form/>

    </>
  )
}

export default App
