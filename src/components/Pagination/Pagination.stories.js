import React from 'react';
import Pagination from './';


export default { title: 'Pagination' };

const defualtCollection = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const empty = () => <Pagination />;
export const paginationWithCollection = () => <Pagination collection={defualtCollection}/>;


