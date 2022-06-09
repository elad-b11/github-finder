import React, { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/githubcontext';

const Users = () => {
    const {loading, users} = useContext(GithubContext);

    if(loading) {
        return <Spinner/>
    }

    return (
        <div style={userStyle}> 
            {users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    )
}

Users.propTypes = {
    
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gripGap: '1re'
}

export default Users