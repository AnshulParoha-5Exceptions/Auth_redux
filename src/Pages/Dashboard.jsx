import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../api/services'; // Import the fetchUserProfile function
import '../assets/styles/dashboard.css';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (user) {
      // Fetch the user's profile data based on their ID
      fetchUserProfile(user.id)
        .then(response => {
          setUserProfile(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="dashboard-content">
        {userProfile && (
          <div className="card">
            <div className="card-header">Profile</div>
            <div className="card-body">
              <div className="avatar-container">
                <img className="avatar" src={userProfile.image} alt="User Avatar" />
              </div>
              <div className="profile-info">
                <p className="user-detail">Name: {userProfile.firstName} {userProfile.lastName}</p>
                <p className="user-detail">Email: {userProfile.email}</p>
                <p className="user-detail">Phone: {userProfile.phone}</p>
                <p className="user-detail">Birth: {userProfile.birthDate}</p>
              </div>
            </div>
          </div>
        )}

        {userProfile && (
          <div className="card">
            <div className="card-header">Company Details</div>
            <div className="card-body">
              <p className="user-detail">Company Name: {userProfile.company.name}</p>
              <p className="user-detail">Department: {userProfile.company.department}</p>
              <p className="user-detail">Title: {userProfile.company.title}</p>
            </div>
          </div>
        )}

        {userProfile && (
          <div className="card">
            <div className="card-header">Card Details</div>
            <div className="card-body">
              <p className="user-detail">Card Number: {userProfile.bank.cardNumber}</p>
              <p className="user-detail">Card Type: {userProfile.bank.cardType}</p>
              <p className="user-detail">Card Expire: {userProfile.bank.cardExpire}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
