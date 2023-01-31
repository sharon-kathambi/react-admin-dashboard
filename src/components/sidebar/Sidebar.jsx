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
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration: 'none'}}>
        <span className="logo">CodeJobs</span>
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
            <Link to='/companies' style={{textDecoration: 'none'}}>
            <li>
                <GroupRoundedIcon className='icon' />
                <span>Companies</span>
            </li>
            </Link>
            <Link to='/jobs/:userId' style={{textDecoration: 'none'}}>
            <li>
                <QrCodeScannerIcon className='icon'/>
                <span>Jobs</span>
            </li>
            </Link>
            <Link to='/applications/:applicationId' style={{textDecoration: 'none'}}>
            <li>
                <CreditCardIcon className='icon'/>
                <span>Applications</span>
            </li>
            </Link>
            <p className="title">USEFUL</p>
            
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
