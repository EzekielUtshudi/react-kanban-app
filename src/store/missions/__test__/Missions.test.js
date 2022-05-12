import { cleanup } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer, {
  getMissionsRequest,
  getMissionsSuccess,
  getMissionsFailure,
  joinMission,
  leaveMission,
} from '../Missions';

const initialState = {
  loading: false,
  missionsList: [],
  error: '',
};

describe('missionsReducer', () => {
  describe('getMissions actions', () => {
    afterEach(cleanup);

    it('should return the exact initial state', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );

      expect(store.getState()).toEqual(initialState);
    });

    it('should return an object that have a property loading set to true on getMissionsRequest action', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );

      store.dispatch(getMissionsRequest());

      expect(store.getState().loading).toBeTruthy();
    });

    it('should return an object with the correct value for the missionList property on getMissionsSuccess action', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const mockMissionData = [
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: false,
        },
      ];

      store.dispatch(getMissionsSuccess(mockMissionData));

      expect(store.getState().loading).toBeFalsy();
      expect(store.getState().missionsList).toEqual(
        mockMissionData,
      );
    });

    it('should return an object with the correct value for the error property on getMissionsFailure action', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const error = 'error';

      store.dispatch(getMissionsFailure(error));

      expect(store.getState().loading).toBeFalsy();
      expect(store.getState().error).toEqual(error);
    });
  });

  describe('joinMission and leaveMission', () => {
    afterEach(cleanup);

    it('should return the correct state after joining one mission', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const mockMissionData = [
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: false,
        },
        {
          id: 2,
          mission: 'mission-2',
          description: 'mission 2 description',
          reserved: false,
        },
        {
          id: 3,
          mission: 'mission-3',
          description: 'mission 3 description',
          reserved: false,
        },
      ];
      store.dispatch(getMissionsSuccess(mockMissionData));

      store.dispatch(joinMission(3));

      expect(
        store.getState().missionsList[2].reserved,
      ).toBeTruthy();
    });

    it('should return the correct state after joining two mission', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const mockMissionData = [
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: false,
        },
        {
          id: 2,
          mission: 'mission-2',
          description: 'mission 2 description',
          reserved: false,
        },
        {
          id: 3,
          mission: 'mission-3',
          description: 'mission 3 description',
          reserved: false,
        },
      ];
      store.dispatch(getMissionsSuccess(mockMissionData));

      store.dispatch(joinMission(1));
      store.dispatch(joinMission(3));

      expect(store.getState().missionsList).toEqual([
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: true,
        },
        {
          id: 2,
          mission: 'mission-2',
          description: 'mission 2 description',
          reserved: false,
        },
        {
          id: 3,
          mission: 'mission-3',
          description: 'mission 3 description',
          reserved: true,
        },
      ]);
    });

    it('should return the correct state after joining one mission and leaving it', () => {
      const store = createStore(
        missionsReducer,
        applyMiddleware(thunk),
      );
      const mockMissionData = [
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: false,
        },
        {
          id: 2,
          mission: 'mission-2',
          description: 'mission 2 description',
          reserved: false,
        },
        {
          id: 3,
          mission: 'mission-3',
          description: 'mission 3 description',
          reserved: false,
        },
      ];
      store.dispatch(getMissionsSuccess(mockMissionData));

      store.dispatch(joinMission(1));
      store.dispatch(leaveMission(1));

      expect(store.getState().missionsList).toEqual([
        {
          id: 1,
          mission: 'mission-1',
          description: 'mission 1 description',
          reserved: false,
        },
        {
          id: 2,
          mission: 'mission-2',
          description: 'mission 2 description',
          reserved: false,
        },
        {
          id: 3,
          mission: 'mission-3',
          description: 'mission 3 description',
          reserved: false,
        },
      ]);
    });
  });
});
