import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">
            Total Applications
        </div>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className="title">Total applications made today</p>
        <p className="amount">5</p>
        <p className="desc">Previous day may not reflect</p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult">
                    <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                <div className="resultAmount">10</div>
                </div>

            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult">
                    <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                <div className="resultAmount">25</div>
                </div>

            </div>
            <div className="item">
                <div className="itemTitle">Last month</div>
                <div className="itemResult">
                    <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                
                <div className="resultAmount">50</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
