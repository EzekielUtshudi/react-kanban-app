import store from '../../configureStore';

test('@rocket store dispatch rocket mock data', () => {
  const FETCH_SUCCESS = 'SPACE-TRAVELERS/rockets/FETCH_SUCCESSFUL';
  const data = [
    {
      id: 'xxxFalcon',
      name: 'falcon 9',
      description: 'Ready for launch',
      imgUrl: 'https://img.png',
      reservation: false,
    },
    {
      id: 'yyyFalcon',
      name: 'falcon 2',
      description: 'Ready for launch',
      imgUrl: 'https://img.png',
      reservation: false,
    },
    {
      id: 'zzzFalcon',
      name: 'falcon 9',
      description: 'Ready for launch',
      imgUrl: 'https://img.png',
      reservation: false,
    },
  ];
  store.dispatch({
    type: FETCH_SUCCESS,
    data,
  });

  expect(store.getState().rockets).toEqual(data);
});

test('@rocket store test reservation toggle [Test 0]', () => {
  const CHANGE_RESERVATION = 'SPACE-TRAVELERS/rockets/CHANGE_RESERVATION';
  store.dispatch({
    type: CHANGE_RESERVATION,
    id: 'zzzFalcon',
  });

  expect(store.getState().rockets[2].reservation).toBeTruthy();
});

test('@rocket store test reservation toggle [Test 1]', () => {
  const CHANGE_RESERVATION = 'SPACE-TRAVELERS/rockets/CHANGE_RESERVATION';
  store.dispatch({
    type: CHANGE_RESERVATION,
    id: 'xxxFalcon',
  });
  store.dispatch({
    type: CHANGE_RESERVATION,
    id: 'xxxFalcon',
  });

  expect(store.getState().rockets[0].reservation).toBeFalsy();
});
