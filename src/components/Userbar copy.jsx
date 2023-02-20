
//ArrayVideo


import Login from "./Login";

export default function Userbar({usuario, login}) {
    return(
        <>
          <hr/>
          usuario: {usuario}
          <hr />
          <Login login={login}/>
        </>
    )
}