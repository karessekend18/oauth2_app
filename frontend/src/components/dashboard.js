import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Dashboard = () => {

const [user, setUser] = useState(null);

useEffect(() => {
axios.get('http://localhost:8080/user-info', { withCredentials: true })
.then(response => {
    setUser(response.data);
})
.catch(error => {
    console.error('There was an error fetching the user data!', error);
});

}, []);
    return (
    <div>
    <h2>Dashboard</h2>
    {user ? (
    <div>
    <p><strong>Name:</strong>{user.name}</p>
    <p><strong>Email:</strong>{user.email}</p>
    {user.picture && <img src={user.picture} alt="User Profile" referrerPolicy="no-referrer"/>}
    </div>
    ):(<p>Loading user data...</p>)}
    </div>
    );
}

export default Dashboard;