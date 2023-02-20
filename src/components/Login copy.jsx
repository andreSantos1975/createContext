
//bustar vídeo no ipfs

export default function Login({login}) {
    return(
        <>
        <button onClick={() => {
            login('sangue.mp4')
        }}>Login</button>
        </>
    )
}