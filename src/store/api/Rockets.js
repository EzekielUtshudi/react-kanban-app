const fetchRockets = async () => {
  const data = await fetch('https://api.spacexdata.com/v3/rockets');
  return data;
};

export default fetchRockets;
