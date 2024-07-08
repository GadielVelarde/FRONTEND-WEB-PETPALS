import React, { useEffect, useState } from 'react';
import { fetchActivities, fetchPets } from '../services/api';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [pets, setPets] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const loadActivities = async () => {
      const data = await fetchActivities(page, size);
      setActivities(data.content);
    };
    const loadPets = async () => {
      const data = await fetchPets(page, size);
      setPets(data.content);
    };
    loadActivities();
    loadPets();
  }, [page, size]);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Activities</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
      <h3>Pets</h3>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;