import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from "../redux/users/userAction";


const UserContainer = ({userData, fetchUsers}) => {
    useEffect(()=> {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>
            loading Text
        </h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {
                    userData && userData.users & userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);