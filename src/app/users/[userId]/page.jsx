import { getUserById } from '@/lib/data';
import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params;
    const user = await getUserById(useId);
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default UserDetailPage;