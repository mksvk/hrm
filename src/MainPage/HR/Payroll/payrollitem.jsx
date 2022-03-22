import React, { useEffect,useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import '../../antdstyle.css';
import { itemRender, onShowSizeChange } from '../../paginationfunction';

import {
  Avatar_02,
  Avatar_10,
  Avatar_20
} from '../../../Entryfile/imagepath';

const PayrollItems = () => {
  const [data,setData] = useState([
    {
      id: 1,
      image: Avatar_02,
      name: 'Prateek Tiwari',
      fromDate: '27 Feb 2021',
      toDate: '27 Feb 2021',
      unitAmount: '₹5',
    },
    {
      id: 7,
      image: Avatar_10,
      name: 'Shital Agarwal',
      fromDate: '13 Jan 2021',
      toDate: '14 Jan 2021',
      unitAmount: '₹8' 
    },
    {
      id: 9,
      image: Avatar_20,
      name: 'Shital Agarwal',
      role: 'CIO',
      fromDate: '8 Mar 2021',
      toDate: '9 Mar 2021',
      unitAmount: '₹8'
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);

  useEffect(() => {
    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%',
      });
    }
  });

  const columns = [
    {
      title: 'Employee',
      dataIndex: 'name',
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to="/app/profile/employee-profile" className="avatar">
            <img alt="" src={record.image} />
          </Link>
          <Link to="/app/profile/employee-profile">
            {text} <span>{record.role}</span>
          </Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: 'From',
      dataIndex: 'fromDate',
      sorter: (a, b) => a.fromDate.length - b.fromDate.length,
    },
    {
      title: 'To',
      dataIndex: 'toDate',
      sorter: (a, b) => a.toDate.length - b.toDate.length,
    },


    {
      title: 'Unit Amount',
      dataIndex: 'unitAmount',
      sorter: (a, b) => a.reason.length - b.reason.length,
    },
    
    {
      title: 'Action',
      render: (text, record) => (
        <div className="dropdown dropdown-action text-right">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#edit_leave"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#delete_approve"
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Payroll Items </title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Payroll Items</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Payroll Items</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_payroll"
              >
                <i className="fa fa-plus" /> Add Payroll
              </a>
            </div>


          </div>

        </div>

        <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <Table
              className="table-striped"
              pagination={{
                total: data.length,
                showTotal: (total, range) =>
                  `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                showSizeChanger: true,
                onShowSizeChange: onShowSizeChange,
                itemRender: itemRender,
              }}
              style={{ overflowX: 'auto' }}
              columns={columns}
              // bordered
              dataSource={data}
              rowKey={(record) => record.id}
              onChange={console.log('chnage')}
            />
          </div>
        </div>
      </div>

      </div>

      <div id="add_payroll" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Payroll</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Employee Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    From <span className="text-danger">*</span>
                  </label>
                  <div>
                    <input
                      className="form-control datetimepicker"
                      type="date"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    To <span className="text-danger">*</span>
                  </label>
                  <div>
                    <input
                      className="form-control datetimepicker"
                      type="date"
                    />
                  </div>
                </div>
               
                <div className="form-group">
                  <label>
                    Amount <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    defaultValue={5}
                    type="text"
                  />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayrollItems;