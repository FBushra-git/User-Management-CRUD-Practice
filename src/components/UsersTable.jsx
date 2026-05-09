'use client';

import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UsersTable = ({ users }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    const confirmDelete = confirm('Are you sure?');

    if (!confirmDelete) return;

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      alert('Deleted successfully');
      router.refresh();
    }
  };

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Users table" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>

                <Table.Cell>
  <Link href={`/users/${user._id}`}>
    <Button>Details</Button>
  </Link>

  <Link href={`/users/${user._id}/edit`}>
    <Button>Edit</Button>
  </Link>

  <Button onClick={() => handleDelete(user._id)}>
    Delete
  </Button>
</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersTable;