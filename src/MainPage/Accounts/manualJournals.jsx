import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Dropdown, Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from '../paginationfunction';
import '../antdstyle.css';
import { fetchPayment } from '../../lib/api';
import { Checkbox, MenuItem, Select } from '@mui/material';



const ManualJournals = () => {

  const [itemsToAdd, setItemsToAdd] = useState([
    {
      item: '',
      description: '',
      unitCost: 0,
      quantity: 0,
      amount: 0,
    },
  ]);
  

  const [data, setData] = useState([
    {
      id: 2,
      item: '',
      description: 'JN-12',
      unitCost: '0.00',
      quantity: '10',
      amount: '0.00',
    },
    {
      id: 3,
      item: '',
      description: 'JN-12',
      unitCost: '0.00',
      quantity: '20',
      amount: '0.00',
    }
  ]);

  const columns = [
    {
      title: 'Item',
      dataIndex: 'item',
      
      sorter: (a, b) => a.item.length - b.item.length,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => a.description.length - b.description.length,
    },

    {
      title: 'Unit Cost',
      dataIndex: 'unitCost',
      sorter: (a, b) => a.unitCost.length - b.unitCost.length,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity.length - b.quantity.length,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (text, record) => <span>₹ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
  ];
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Manual Journals </title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Manual Journals</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Manual Journals</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_job"
              >
                <i className="fa fa-plus" /> Add Journals
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
                <div className='row'>
                  <div className='col-sm-6 col-md-4'>
                    <div className='form-group'>
                      <label>
                      Customer <span className="text-danger">*</span>
                      </label>
                      <input className='form-control' type="text" />
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-4'>
                    <div className='form-group'>
                      <label>
                      Expense date <span className="text-danger">*</span>
                      </label>
                      <input className='form-control' type="date" />
                    </div>
                  </div>
                  <div className='col-sm-6 col-md-4'>
                    <div className='form-group'>
                      <label>
                        Due date <span className="text-danger">*</span>
                      </label>
                      <input className='form-control' type="date" />
                    </div>
                </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 col-sm-12'>
                    <div className='table-responsive'>
                      <table className='table table-hover table-white'>
                        <thead>
                          <tr>
                            <th style={{ width: '20px' }}>#</th>
                            <th className="col-sm-2">Item</th>
                            <th className="col-md-6">Description</th>
                            <th style={{ width: '100px' }}>Unit Cost</th>
                            <th style={{ width: '80px' }}>Qty</th>
                            <th>Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {itemsToAdd.map((item, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <input
                                onChange={(e) => {
                                  const items = itemsToAdd.map((item, i) => {
                                    if (index === i) {
                                      item.item = e.target.value;
                                    }
                                    return item;
                                  });
                                  setItemsToAdd(items);
                                }}
                                className="form-control"
                                type="text"
                                style={{ minWidth: '150px' }}
                              />
                            </td>
                            <td>
                              <input
                                className="form-control"
                                type="text"
                                style={{ minWidth: '150px' }}
                                onChange={(e) => {
                                  const items = itemsToAdd.map((item, i) => {
                                    if (index === i) {
                                      item.description = e.target.value;
                                    }
                                    return item;
                                  });
                                  setItemsToAdd(items);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                className="form-control"
                                style={{ width: '100px' }}
                                type="text"
                                onChange={(e) => {
                                  const items = itemsToAdd.map((item, i) => {
                                    if (index === i) {
                                      item.unitCost = e.target.value;
                                      item.amount =
                                        e.target.value * item.quantity;
                                    }
                                    return item;
                                  });

                                  setItemsToAdd(items);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                className="form-control"
                                style={{ width: '80px' }}
                                type="text"
                                onChange={(e) => {
                                  const items = itemsToAdd.map((item, i) => {
                                    if (index === i) {
                                      item.quantity = e.target.value;
                                      item.amount =
                                        e.target.value * item.unitCost;
                                    }
                                    return item;
                                  });

                                  setItemsToAdd(items);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                className="form-control"
                                readOnly
                                style={{ width: '120px' }}
                                type="text"
                                value={item.amount}
                              />
                            </td>
                            <td>
                              <a
                                href="javascript:void(0)"
                                className={`${
                                  index + 1 !== itemsToAdd.length
                                    ? 'text-danger'
                                    : 'text-success'
                                } font-18`}
                                title="Add"
                                onClick={() => {
                                  if (index + 1 !== itemsToAdd.length) {
                                    setItemsToAdd((d) =>
                                      d.filter((_, i) => i !== index)
                                    );
                                    return;
                                  }
                                  setItemsToAdd([
                                    ...itemsToAdd,
                                    {
                                      item: '',
                                      description: '',
                                      unitCost: 0,
                                      quantity: 0,
                                      amount: 0,
                                    },
                                  ]);
                                }}
                              >
                                {index + 1 === itemsToAdd.length ? (
                                  <i className="fa fa-plus" />
                                ) : (
                                  <i className="fa fa-trash-o" />
                                )}
                              </a>
                            </td>
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                    <div className='table-responsive'>
                      <table className='table table-hover table-white'>
                        <tbody>
                          <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td className="text-right">Total</td>
                            <td
                              style={{
                                textAlign: 'right',
                                paddingRight: '30px',
                                width: '230px',
                              }}
                            >
                              {itemsToAdd.reduce((p, c) => p + c.amount, 0)}
                            </td>
                          </tr>
                          <tr>
                              <td colSpan={5} className="text-right">
                              Tax
                            </td>
                            <td
                              style={{
                                textAlign: 'right',
                                paddingRight: '30px',
                                width: '230px',
                              }}
                            >
                              <input
                                className="form-control text-right"
                                defaultValue={0}
                                readOnly
                                type="text"
                              />
                            </td>
                          </tr>
                          <tr>
                              <td colSpan={5} className="text-right">
                              Discount %
                            </td>
                            <td
                              style={{
                                textAlign: 'right',
                                paddingRight: '30px',
                                width: '230px',
                              }}
                            >
                              <input
                                className="form-control text-right"
                                type="text"
                              />
                            </td>
                          </tr>
                          <tr>
                              <td
                              colSpan={5}
                              style={{ textAlign: 'right', fontWeight: 'bold' }}
                            >
                              Grand Total
                            </td>
                            <td
                              style={{
                                textAlign: 'right',
                                paddingRight: '30px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                width: '230px',
                              }}
                            >
                              ₹ {itemsToAdd.reduce((p, c) => p + c.amount, 0)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Other Information</label>
                          <textarea className='form-control' defaultValue={''}></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='submit-section'>
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
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
                // onChange={this.handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualJournals;
