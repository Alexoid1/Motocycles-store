const fetchConfig = () => {
  const token = localStorage.getItem('motoToken');

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  };
};

export default fetchConfig;
