import fetchRockets from '../api/Rockets';

const FETCH_SUCCESS = 'SPACE-TRAVELERS/rockets/FETCH_SUCCESSFUL';
const FETCH_FAILED = 'SPACE-TRAVELERS/rockets/FETCH_FAILED';
const CHANGE_RESERVATION = 'SPACE-TRAVELERS/rockets/CHANGE_RESERVATION';

export const fetchAllRockets = () => (dispatch) => {
  fetchRockets().then((response) => {
    if (response.status === 200 && response.ok) {
      response.json().then((data) => {
        const rocketdata = [];
        data.forEach((rocket) => {
          rocketdata.push({
            id: rocket.rocket_id,
            name: rocket.rocket_name,
            description: rocket.description,
            imgUrl: rocket.flickr_images[0],
            reservation: false,
          });
        });
        dispatch(
          {
            type: FETCH_SUCCESS,
            data: rocketdata,
          },
        );
      });
    } else {
      dispatch(
        {
          type: FETCH_FAILED,
          data: [],
        },
      );
    }
  });
};

export const changeState = (id) => ({
  type: CHANGE_RESERVATION,
  id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.data;

    case CHANGE_RESERVATION:
      return state.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        imgUrl: rocket.imgUrl,
        reservation: rocket.id === action.id ? !rocket.reservation : rocket.reservation,
      }));

    default:
      return state;
  }
};

export default rocketsReducer;
