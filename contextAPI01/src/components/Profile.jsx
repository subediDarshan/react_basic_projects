import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) {
        return <div>Please enter username</div>
    }
    
    return <div>Hello {user.username}</div>
    

}

export default Profile