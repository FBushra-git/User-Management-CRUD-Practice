import UsersTable from '@/components/UsersTable';
import { getusers } from '@/lib/data';
import Link from 'next/link';

const Userspage = async () => {
  const users = await getusers();

  return (
    <div>
      <h2>Users Management: {users.length}</h2>

      <Link href="/users/add">
        Add New User
      </Link>

      <UsersTable users={users} />
    </div>
  );
};

export default Userspage;