'use client';

import { useRouter } from 'next/navigation';

const UpdateUserForm = ({ user }) => {
  const router = useRouter();

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedUser = {
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
    };

    const res = await fetch(`http://localhost:5000/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      alert('User updated successfully');
      router.push('/users');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleUpdateUser}>
      <input
        name="name"
        type="text"
        defaultValue={user.name}
        required
      />

      <input
        name="email"
        type="email"
        defaultValue={user.email}
        required
      />

      <input
        name="role"
        type="text"
        defaultValue={user.role}
        required
      />

      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUserForm;