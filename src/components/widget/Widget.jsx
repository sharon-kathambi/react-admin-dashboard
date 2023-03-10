import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

const Widget = ({ type }) => {
    let data;

    //temporary
    let amount = 100;
    let percentage = 20

    switch (type) {
        case 'user':
            data = {
                title: 'COMPANIES',
                isMoney: false,
                link: 'See all companies',
                icon: <PersonOutlineOutlinedIcon 
                className='icon' 
                style={{
                    color: 'crimson',
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                }}/>
            };
            break;
            case 'order':
                data = {
                    title: 'JOBS',
                    isMoney: false,
                    link: 'View all jobs',
                    icon: <WorkIcon 
                    className='icon'
                    style={{
                        color: 'goldenrod',
                        backgroundColor: 'rgba(218, 165, 32, 0.2)'
                    }} />
                };
                break;
                case 'earning':
                    data = {
                        title: 'APPLICATIONS',
                        isMoney: false,
                        link: 'View all interviews',
                        icon: <BusinessIcon 
                        className='icon' 
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)'
                        }}/>
                    };
                    break;
                case 'balance':
                    data = {
                            title: 'BALANCE',
                            isMoney: true,
                            link: 'See details',
                            icon: <AccountBalanceOutlinedIcon 
                            className='icon' 
                            style={{
                                color: 'purple',
                                backgroundColor: 'rgba(128, 0, 128, 0.2)'
                            }}/>
                        };
                break;
        default:
        break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title"> {data.title} </span>
            <span className="counter">{data.isMoney && '$'} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
               <KeyboardArrowUpOutlinedIcon />
               {percentage}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
