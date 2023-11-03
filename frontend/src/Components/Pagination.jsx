import React, {useEffect} from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({setData, data}) => {

    const elements = Array.from({ length: data.totalPages }).map((_, index) => (
        <div key={index}>Element {index + 1}</div>
    ));

    return (
        <div>
            {data.totalPages ? (
                {elements}
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CustomPagination;