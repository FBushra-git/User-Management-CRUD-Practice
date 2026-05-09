'use client';

import { useRouter } from 'next/navigation';

const AddUserForm = () => {
  const router = useRouter();

  const handleAddUser = async (e) => {
    e.preventDefault();

    const form = e.target;

    const newUser = {
      name: form.name.value,
      email: form.email.value,
      role: form.role.value,
    };

    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const data = await res.json();

    if (data.insertedId) {
      alert('User added successfully');
      form.reset();
      router.push('/users');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleAddUser}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="role"
        type="text"
        placeholder="Role"
        required
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;