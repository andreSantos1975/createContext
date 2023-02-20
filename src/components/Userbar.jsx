
//ArrayVideo
import Login from "./Login";
import AuthContext from "../providers/AuthContext";
import { useContext } from "react";

export default function Userbar({videos, login}) {

    const AuthDados = useContext(AuthContext)
    console.log(AuthDados)
    
    return(
        <>
          <hr/>
          usuário: {AuthDados.videos.videos}
          perfil: {AuthDados.videos.perfil}
          <hr />
          <Login login={login}/>
        </>
    )
}