import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const MyPagination = ({lastPage, curentPage, setActivePage}) => {

    return (
        <div>
            <Pagination style={{display: "flex", justifyContent: "center", margin: "20px"}}>
                <Pagination.First onClick={() => setActivePage(1)}/>
                { curentPage > 1 && <Pagination.Prev onClick={() => setActivePage(curentPage - 1)}/>} 
                { curentPage > 3 && <Pagination.Item onClick={() => setActivePage(1)}>{1}</Pagination.Item>}
                { curentPage > 4 && <Pagination.Ellipsis disabled/>} 

                { curentPage > 2 && <Pagination.Item onClick={() => setActivePage(curentPage - 2)}>{curentPage - 2}</Pagination.Item>}
                { curentPage > 1 && <Pagination.Item onClick={() => setActivePage(curentPage - 1)}>{curentPage - 1}</Pagination.Item>}
                <Pagination.Item active>{curentPage}</Pagination.Item>
                { curentPage < lastPage && <Pagination.Item onClick={() => setActivePage(curentPage + 1)}>{curentPage + 1}</Pagination.Item>}
                { curentPage < lastPage - 1 && <Pagination.Item onClick={() => setActivePage(curentPage + 2)}>{curentPage + 2}</Pagination.Item>}

                { curentPage < lastPage - 3 && <Pagination.Ellipsis disabled/>}
                { curentPage < lastPage - 2  && <Pagination.Item onClick={() => setActivePage(lastPage)}>{lastPage}</Pagination.Item>}
                { curentPage < lastPage && <Pagination.Next onClick={() => setActivePage(curentPage + 1)}/>}
                <Pagination.Last onClick={() => setActivePage(lastPage)}/>
            </Pagination>
        </div>
    );
}
 
export default MyPagination;