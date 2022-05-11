import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../../store/rockets/Rockets';
import RocketCard from '../../components/rocket/rocketCard';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchAllRockets());
  }, []);

  const list = rockets.map((rocket) => (
    <RocketCard
      key={rocket.id}
      id={rocket.id}
      reservaton={rocket.reservation}
      name={rocket.name}
      description={rocket.description}
      imgUrl={rocket.imgUrl}
    />
  ));

  return (
    <>
      {list}
    </>
  );
};

export default Rockets;
