import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/rockets/Rockets';
import Button from '../button/Button';
import Badge from '../badge/Badge';

const RocketCard = ({
  id, reservaton, name, description, imgUrl,
}) => {
  const dispatch = useDispatch();
  const onButtonPressed = (event) => {
    dispatch(changeState(event.target.id));
  };

  return (
    <div className="flex flex-row h-48 ml-10 w-11/12 mb-5">
      <img src={imgUrl} className="w-56" alt="rocket-img" />
      <div className="ml-2.5 flex flex-col justify-between pb-3">
        <h1 className="font-semibold text-2xl mb-1">{name}</h1>
        <div>
          <Badge twClasses={reservaton ? 'bg-blue-400 w-fit text-white px-1 py-1 inline-block mr-1 text-sm' : 'hidden'} text="Reserved" />
          {description}
        </div>
        <Button
          id={id}
          twClasses={`${reservaton ? 'bg-gray-400' : 'bg-sky-500'} text-white mt-2 border-2 text-lg font-medium w-fit px-2 py-1`}
          text="Reserve Rocket"
          handleClick={onButtonPressed}
          type="button"
        />
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.string.isRequired,
  reservaton: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default RocketCard;
