import React, { useState, useContext } from 'react';
import GithubContex from '../../contex/github/GithubContex';
import AlertContex from '../../contex/alert/AlertContex';
import { searchUsers } from '../../contex/github/GithubActions';

export const UserSearch = () => {

    const [text, setText] = useState('');
    const { users, dispatch } = useContext(GithubContex);
    const { setAlert } = useContext(AlertContex);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Pleace enter something', 'error')
        } else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({ type: 'GET_USERS', payload: users })
            setText('')
        }
    };

    return (
        <div className='grid grig-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black '
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}
                            />

                            <button
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg '
                                type='submit'
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {users.length > 0 && (
                <div>
                    <button
                        className='btn btn-lg'
                        onClick={() => dispatch({type: 'CLEAR_USERS'})}
                    >
                        Clear
                    </button>
                </div>
            )}

        </div>
    );
};
