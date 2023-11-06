import React, {useEffect, useState} from 'react';
import ResponsivePagination from 'react-responsive-pagination';


const Pagination = ({fetchEmployeeList, data}) => {
    const [currentPage, setCurrentPage] = useState(data.number + 1);
    const totalPages = data.totalPages;

    useEffect(() => {
        const controller = new AbortController();

        fetchEmployeeList(controller, currentPage - 1);

        return () => controller.abort();
    }, [currentPage]);

    return (

        <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
            maxWidth={500}
        />
    );
};

export default Pagination;