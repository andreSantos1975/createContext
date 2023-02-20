//bustar vídeo no ipfs e definir o vídeo no papal de parede
import AuthContext from "../providers/AuthContext";
import { useContext } from "react";

export default function Login({login}) {

    const AuthDados = useContext(AuthContext)

    function alterarVideo() {
        AuthDados.setVideos({
            videos: 'Ana',
            perfil: 'User'
        })
    }
    return(
        <>
        <button onClick={alterarVideo}>Alterar vídeo</button>
        </>
    )
}