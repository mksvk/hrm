/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  headerlogo,
  Avatar_02,
  Avatar_03,
  Avatar_05,
  Avatar_06,
  Avatar_08,
  Avatar_09,
  Avatar_13,
  Avatar_17,
  Avatar_21,
} from '../../Entryfile/imagepath';

class Header extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;
    return (
      <div className="header" style={{ right: '0px' }}>
        {/* Logo */}
        <div className="header-left">
          <Link to="/app/main/dashboard" className="logo">
            <img src={headerlogo} width={40} height={40} alt="" />
          </Link>
        </div>
        {/* /Logo */}
        <a
          id="toggle_btn"
          href=""
          style={{
            display: pathname.includes('tasks')
              ? 'none'
              : pathname.includes('compose')
              ? 'none'
              : '',
          }}
        >
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        {/* Header Title */}
        <div className="page-title-box">
          <h3>KN Multiprojects</h3>
        </div>
        {/* /Header Title */}
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <i className="fa fa-bars" />
        </a>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-bell-o" />{' '}
              <span className="badge badge-pill badge-purple">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="" className="clear-noti">
                  {' '}
                  Clear All{' '}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/app/administrator/activities"
                    >
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Prateek Tiwari</span>{' '}
                            added new task{' '}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/app/administrator/activities"
                    >
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_03} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{' '}
                            changed the task name{' '}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/app/administrator/activities"
                    >
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_06} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span>{' '}
                            added{' '}
                            <span className="noti-title">Domenic Houston</span>{' '}
                            and <span className="noti-title">Claire Mapes</span>{' '}
                            to project{' '}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/app/administrator/activities"
                    >
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_17} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>{' '}
                            completed task{' '}
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/app/administrator/activities"
                    >
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_13} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Marathi Manush</span>{' '}
                            added new task{' '}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              2 days ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link
                  onClick={() => localStorage.setItem('minheight', 'true')}
                  to="/app/administrator/activities"
                >
                  View all Notifications
                </Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* Message Notifications */}
          {/* <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-comment-o" />{' '}
              <span className="badge badge-pill badge-purple">8</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="" className="clear-noti">
                  {' '}
                  Clear All{' '}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/conversation/chat"
                    >
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_09} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Bhupesh Audichya
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/conversation/chat"
                    >
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_02} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Prateek Tiwari</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/conversation/chat"
                    >
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_03} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {' '}
                            Tarah Shropshire{' '}
                          </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/conversation/chat"
                    >
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_05} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeet Khatri</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link
                      onClick={() => localStorage.setItem('minheight', 'true')}
                      to="/conversation/chat"
                    >
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_08} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Chinki Singh </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link
                  onClick={() => localStorage.setItem('minheight', 'true')}
                  to="/conversation/chat"
                >
                  View all Messages
                </Link>
              </div>
            </div>
          </li> */}
          {/* /Message Notifications */}
          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img src={Avatar_03} alt="" />
                <span className="status online" />
              </span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <Link
                className="dropdown-item"
                to="/app/profile/employee-profile"
              >
                My Profile
              </Link>
              <Link className="dropdown-item" to="/settings/">
                Settings
              </Link>
              <Link
                onClick={(e) => {
                  localStorage.removeItem('auth');
                }}
                className="dropdown-item"
                to="/login"
              >
                Logout
              </Link>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/app/profile/employee-profile">
              My Profile
            </Link>
            <Link className="dropdown-item" to="/settings/companysetting">
              Settings
            </Link>
            <Link
              onClick={() => {
                localStorage.removeItem('auth');
              }}
              className="dropdown-item"
              to="/login"
            >
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
    );
  }
}

export default withRouter(Header);
