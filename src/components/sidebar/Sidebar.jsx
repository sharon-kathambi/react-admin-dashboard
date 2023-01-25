import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration: 'none'}}>
        <span className="logo">SKadmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <Link to='/' style={{textDecoration: 'none'}}>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to='/users' style={{textDecoration: 'none'}}>
            <li>
                <GroupRoundedIcon className='icon' />
                <span>Users</span>
            </li>
            </Link>
            <Link to='/products' style={{textDecoration: 'none'}}>
            <li>
                <QrCodeScannerIcon className='icon'/>
                <span>Products</span>
            </li>
            </Link>
            <li>
                <CreditCardIcon className='icon'/>
                <span>Orders</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <LocalShippingIcon className='icon' />
                <span>Delivery</span>
            </li>
            <li>
                <AnalyticsIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <MonitorHeartIcon className='icon' />
                <span>System Health</span>
            </li>
            <li>
                <ListAltIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleIcon className='icon' />
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar
