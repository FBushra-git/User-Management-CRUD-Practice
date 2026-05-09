import { getUserById } from '@/lib/data';
import UpdateUserForm from '@/components/UpdateUserForm';

const EditUserPage = async ({ params }) => {
  const { userId } = await params;

  const user = await getUserById(userId);

  return (
    <div>
      <h2>Edit User</h2>
      <UpdateUserForm user={user} />
    </div>
  );
};

export default EditUserPage;