import { useState } from "react"
import Userbar from "./components/Userbar"

export default function App () {

    const [Videos, setVideos] = useState('raio.mp4')

  return(
    <>
    <h3>REACT PROP-DRILLING</h3>
    <Userbar videos={Videos} login={setVideos}/>
    </>
  )
}