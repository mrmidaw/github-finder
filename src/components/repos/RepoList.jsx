import React from 'react';
import PropTypes from 'prop-types';
import { RepoItem } from './RepoItem';

export const RepoList = ({ repos }) => {
    return (
        <div>
            <div className='rounded-lg shadow-lg card bg-slate-700 '>
                <div className='card-body'>
                    <h2 className='text-3xl my-4 font-bold card-title'>
                        Latest Repositories
                    </h2>
                    {repos.map((repo) => (
                        <h3 key={repo.id}>
                            <RepoItem repo={repo} />
                        </h3>
                    ))}
                </div>
            </div>
        </div>

    );
};


RepoList.propTypes = {
    repos: PropTypes.array.isRequired
};