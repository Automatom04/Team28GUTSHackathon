import React, { useEffect, useState } from "react";
import './App.css';
import FindLocationAndNearby from './FindLocationAndNearby.js';

export function SyncedPlaceData(activityOrLocation, budget, radius, type) {
  var [data, setData] = useState(null);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState(null);
  useEffect(() => {
  FindLocationAndNearby(activityOrLocation, budget, radius, type)
    .then(response => {
      setData(response);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (data);
  };

export default SyncedPlaceData;