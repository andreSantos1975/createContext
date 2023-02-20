//ArrayVideos

import { createContext, useState } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {

  // const AuthDados = {

    //  videos: 'Jõao',
    //  perfil: 'Admins Literal'
 //  }

    const [videos, setVideos] = useState({
      videos: 'André',
      perfil: 'Admin'
    })

 return(
   <AuthContext.Provider value={{videos, setVideos}}>
      {children}
   </AuthContext.Provider>
 )
}

export default AuthContext