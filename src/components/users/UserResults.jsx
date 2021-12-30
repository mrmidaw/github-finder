import { useContext } from 'react';
import { Spinner } from '../layout/Spinner';
import { UserItem } from './UserItem';
import GithubContex from '../../contex/github/GithubContex';

export const UserResults = () => {
    const { users, loading } = useContext(GithubContex);

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user, index) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
};