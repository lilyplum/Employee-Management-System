import React, {useEffect, useState} from 'react';
import Loading from "./Loading.jsx";
import ResponsivePagination from 'react-responsive-pagination';



const CustomPagination = ({fetchEmployeeList, data}) => {
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

export default CustomPagination;