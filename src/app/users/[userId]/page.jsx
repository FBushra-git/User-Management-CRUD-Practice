import { getUserById } from '@/lib/data';
import Link from 'next/link';

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;

  const user = await getUserById(userId);

  return (
    <div>
      <h2>User Details</h2>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <Link href="/users">Back</Link>
    </div>
  );
};

export default UserDetailPage;