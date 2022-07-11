import React from 'react';
import {connect} from 'react-redux';

const ViewDetails = ({user}) => {
    return (
        <>
            <div>
                <h2>First Name: {user.firstName}</h2>
                <h2>Middle Name: {user.middleName}</h2>
                <h2>Last Name: {user.lastName}</h2>
                <h2>Address: {user.address}</h2>
                <h2>Gender: {user.gender}</h2>
                <h2>Contact Number: {user.contactNumber}</h2>
            </div>
        </>
    )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps)(ViewDetails);