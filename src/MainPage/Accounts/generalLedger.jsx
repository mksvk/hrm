import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from '../paginationfunction';
import '../antdstyle.css';
import { fetchPayment } from '../../lib/api';

const GeneralLedger = () => {
    // useEffect(() => {
    //   (async () => {
    //     const res = await fetchPayment();

    //     setData(res);
    //   })();
    // }, []);

  const [data, setData] = useState([
    {
      id: 1,
      lead: 'Rahul Tiwari',
      account: 'Accounts Payable',
      amount_credit: '0.00',
      amount_debit: '0.00',
      balance: '0.00',
    },
    {
      id: 2,
      lead: 'Virat Sharma',
      account: 'Accounts Receivable',
      amount_credit: '0.00',
      amount_debit: '0.00',
      balance: '0.00',
    }
  ]);

  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'lead',
      sorter: (a, b) => a.client.length - b.client.length,
    },

    {
      title: 'Account',
      dataIndex: 'account',
      sorter: (a, b) => a.paymenttype.length - b.paymenttype.length,
    },
    {
      title: ' Amount Credited',
      dataIndex: 'amount_credit',
      render: (text, record) => <span>₹ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: ' Amount Debited',
      dataIndex: 'amount_debit',
      render: (text, record) => <span>₹ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
        sorter: (a, b) => a.balance.length - b.balance.length,
    }
  ];
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Customer Ledger</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Ledgers</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Ledgers</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_job"
              >
                <i className="fa fa-plus" /> Add Ledger
              </a>
            </div>
          </div>
        </div>
        <div id="add_job" className="modal custom-modal fade" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Maintain Customer Ledger</h5>
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
                  <div className="row">
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Customer Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Account</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Balance</label>
                        <input
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Amount Credited</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Amount Debited</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" defaultValue={''} />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      className="btn btn-primary submit-btn"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}
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
                // onChange={this.handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default GeneralLedger;
