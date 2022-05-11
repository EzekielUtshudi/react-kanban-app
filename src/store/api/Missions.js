export default async function GetMissionsFromApi() {
  const endpoint = 'https://api.spacexdata.com/v3/missions';

  const response = await fetch(endpoint);
  if (response.status !== 200) {
    throw new Error(
      'Can not fetch the books with the provided Endpoint',
    );
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get JSON from the response');
  }
}
