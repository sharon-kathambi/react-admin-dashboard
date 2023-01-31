import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
      {
        id: 1143155,
        company: "Shamiri Institute",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        jobtitle: "Tech Product Intern",
        date: "21 January",
        rating: '5/5',
        status: "Interviewing",
      },
      {
        id: 1143155,
        company: "Amazon",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        jobtitle: "Software Engineering Intern",
        date: "5 January",
        rating: '4/5',
        status: "Pending",
      },
      {
        id: 1143155,
        company: "Intern Match",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        jobtitle: "Junior Python Developer",
        date: "5th December",
        rating: '5/5',
        status: "Interviewing",
      },
      {
        id: 1143155,
        company: "Microsoft",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        jobtitle: "Software Engineering Intern",
        date: "7 January",
        rating: '5/5',
        status: "Rejected",
      },
      {
        id: 1143155,
        company: "DirectEd Foundation",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        jobtitle: "Technical Mentor",
        date: "8 December",
        rating: '5/5',
        status: "Interviewing",
      },
      
    ];

  return (
    <TableContainer component={Paper} className ='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Company</TableCell>
            <TableCell className="tableCell">Job Title</TableCell>
            <TableCell className="tableCell">Date of application</TableCell>
            <TableCell className="tableCell">Rating</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
            <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.company}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.jobtitle}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.rating}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
