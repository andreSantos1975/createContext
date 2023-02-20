import { useState } from "react"
import Userbar from "./components/Userbar"

export default function App () {

    const [Usuario, setUsuario] = useState('raio.mp4')

  return(
    <>
    <h3>REACT PROP-DRILLING</h3>
    <Userbar usuario={Usuario} login={setUsuario}/>
    </>
  )
}