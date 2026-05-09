export const getusers = async () => {
  const res = await fetch('http://localhost:5000/users', {
    cache: 'no-store',
  });

  return res.json();
};

export const getUserById = async (userId) => {
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    cache: 'no-store',
  });

  return res.json();
};