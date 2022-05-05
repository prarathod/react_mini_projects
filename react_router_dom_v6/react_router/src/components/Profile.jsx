import React from "react";
import {useParams} from 'react-router-dom'
const Profile = ()=>{
    const {name} = useParams()
    return (
        <>
            <div>HEllo {name}</div>
        </>
    )
}
export default Profile
