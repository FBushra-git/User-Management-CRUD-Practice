import UsersTable from "@/components/UsersTable";
import { getusers } from "@/lib/data";


const Userspage = async () => {
    const users = await getusers();
    return (
        <div>
           <h2>Users Management : {users.length}</h2> 
           <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default Userspage;