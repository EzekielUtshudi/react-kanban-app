import GetMissionsFromApi from '../api/Missions';

const GET_MISSIONS_REQUEST = 'SPACE-TRAVELERS/missions/GET_REQUEST';
const GET_MISSIONS_SUCCESS = 'SPACE-TRAVELERS/missions/GET_SUCCESS';
const GET_MISSIONS_FAILURE = 'SPACE-TRAVELERS/missions/GET_FAILURE';
const JOIN_MISSION = 'SPACE-TRAVELERS/missions/JOIN_MISSION';
const LEAVE_MISSION = 'SPACE-TRAVELERS/missions/LEAVE_MISSION';

const initialState = {
  loading: false,
  missionsList: [],
  error: '',
};

// GET missions action creators
export function getMissionsRequest() {
  return {
    type: GET_MISSIONS_REQUEST,
  };
}

export function getMissionsSuccess(missionsList) {
  return {
    type: GET_MISSIONS_SUCCESS,
    payload: missionsList,
  };
}

export function getMissionsFailure(error) {
  return {
    type: GET_MISSIONS_FAILURE,
    payload: error,
  };
}

export function getMissions() {
  return (dispatch) => {
    dispatch(getMissionsRequest());
    GetMissionsFromApi()
      .then((data) => {
        const usedMissionData = data.map((dataEntry) => {
          const {
            mission_id: id,
            mission_name: mission,
            description,
          } = dataEntry;
          return {
            id,
            mission,
            description,
            reserved: false,
          };
        });

        dispatch(getMissionsSuccess(usedMissionData));
      })
      .catch((error) => {
        dispatch(getMissionsFailure(error.message));
      });
  };
}

// Join mission action creator
export function joinMission(id) {
  return {
    type: JOIN_MISSION,
    payload: id,
  };
}

// Leave mission action creator
export function leaveMission(id) {
  return {
    type: LEAVE_MISSION,
    payload: id,
  };
}

// Missions reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_REQUEST:
      return { ...state, loading: true };

    case GET_MISSIONS_SUCCESS:
      return {
        loading: false,
        missionsList: action.payload,
        error: '',
      };

    case GET_MISSIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case JOIN_MISSION:
      return {
        ...state,
        missionsList: state.missionsList.map(
          (dataEntry) => {
            if (
              String(dataEntry.id)
              !== String(action.payload)
            ) {
              return dataEntry;
            }
            return { ...dataEntry, reserved: true };
          },
        ),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missionsList: state.missionsList.map(
          (dataEntry) => {
            if (
              String(dataEntry.id)
              !== String(action.payload)
            ) {
              return dataEntry;
            }
            return { ...dataEntry, reserved: false };
          },
        ),
      };

    default:
      return state;
  }
};

export default missionsReducer;
