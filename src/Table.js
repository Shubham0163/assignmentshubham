// src/components/Table.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://fe-test.dev.rampnow.io:8000/api/books?page=${currentPage}&limit=${pageSize}`);
      setData(response.data.data);
      setTotalEntries(response.data.count);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table>
        {/* Table headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Country</th>
            <th>Language</th>
            <th>Link</th>
            <th>Pages</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        {/* Table data */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.author}</td>
              <td>{item.country}</td>
              <td>{item.language}</td>
              <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></td>
              <td>{item.pages}</td>
              <td>{item.title}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination and page size selector */}
      <div>
        <span>Total entries: {totalEntries}</span>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
        {/* Pagination logic */}
        {Array.from({ length: Math.ceil(totalEntries / pageSize) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Table;
