/**
 * TermsCondition Page
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Avatar_19 } from '../../../Entryfile/imagepath';
import { getACustomer } from './../../../lib/api/index';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from '../../paginationfunction';
import '../../antdstyle.css';
import httpService from '../../../lib/httpService';
import Swal from 'sweetalert2';
import { Backdrop } from '@mui/material';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const Invoices = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if ($('.select').length > 0) {
      $('.select').select2({
        minimumResultsForSearch: -1,
        width: '100%',
      });
    }
    fetchInvoice();
  }, []);

  useEffect(() => {
    fetchInvoice();
  }, [props.invoice]);

  const handleDelete = async (id) => {
    console.log(id);
    Swal.fire({
      title: 'Delete Invoice',
      text: 'Are you sure you want to delete this invoice?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed',
      preConfirm: () => {
        return httpService.delete(`/sale-invoice/${id}`);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetchInvoice();
        Swal.fire(
          'Invoice Deleted',
          'Invoice has been deleted successfully',
          'success'
        );
      }
    });
  };

  const handleMarkAsPaid = async (invoice) => {
    Swal.fire({
      title: 'Mark as Paid',
      text: 'Are you sure you want to mark this invoice as paid?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed',
      preConfirm: () => {
        return httpService.post(`/sale-payment`, {
          invoice: invoice._id,
          customer: invoice.customer._id,
          amount: invoice.total,
          paymentMode: 'Manual Record',
          paymentDate: new Date(),
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetchInvoice();
        Swal.fire(
          'Invoice Marked as Paid',
          'Invoice has been marked as paid successfully',
          'success'
        );
      }
    });
  };

  const fetchInvoice = async () => {
    console.log('========Inv Prop========');
    const invoices = props.invoice;
    console.log(invoices);

    setData(
      invoices?.map((invoice, index) => ({
        ...invoice,
        id: index + 1,
        invoicenumber: 'INV-' + invoice._id.toString().padStart(4, '0'),
        createddate: new Date(invoice.createdAt).toGMTString().substring(4, 16),
        duedate: new Date(invoice.invoiceDate).toGMTString().substring(4, 16),
        client: invoice.customer.name,
        amount: invoice.total,
        status:
          invoice.type === 'RECURRING'
            ? 'Monthly ' + invoice.status
            : invoice.status,
      }))
    );
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: 'Invoice Number',
      dataIndex: 'invoicenumber',
      render: (text, record) => (
        <Link to="/app/sales/invoices-view">#{text}</Link>
      ),
      sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
    },
    {
      title: 'Created Date',
      dataIndex: 'createddate',
      sorter: (a, b) => a.createddate.length - b.createddate.length,
    },
    {
      title: 'Due Date',
      dataIndex: 'duedate',
      sorter: (a, b) => a.duedate.length - b.duedate.length,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (text, record) => <span>₹ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text, record) => (
        <span
          className={
            text.includes('Paid')
              ? 'badge bg-inverse-success'
              : 'badge bg-inverse-info'
          }
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
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
              onClick={(e) => {
                e.preventDefault();
                console.log(record.status);
                if (record.status === 'Paid') {
                  Swal.fire('Invoice Paid already', '', 'success');
                  return;
                }
                handleMarkAsPaid(record);
              }}
              className="dropdown-item"
              href="#"
            >
              <i className="fa fa-file-pdf-o m-r-5" /> Mark Paid
            </a>
            <Link
              className="dropdown-item"
              to={`/app/sales/invoices-edit/${record._id}`}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link className="dropdown-item" to="/app/sales/invoices-view">
              <i className="fa fa-eye m-r-5" /> View
            </Link>
            <a className="dropdown-item" href="#">
              <i className="fa fa-file-pdf-o m-r-5" /> Download
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                // console.log(record);
                handleDelete(record._id);
              }}
              className="dropdown-item"
              href="#"
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
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
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </div>
  );
};

const CustomerProfile = () => {
  const [customer, setCustomer] = useState(null);
  const user = useSelector((state) => state.authentication.value.user);
  let { id } = useParams();
  const [addInvoiceModal, setAddInvoiceModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedPlot, setSelectedPlot] = useState({});
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const res = await httpService.get('/project');
    setProjects(res.data);
  };
  async function fetchApi() {
    const res = await getACustomer(id);

    setCustomer(res.data);
  }
  useEffect(() => {
    fetchApi();
    fetchProjects();
  }, []);

  return customer ? (
    <div className="page-wrapper">
      <Helmet>
        <title>Client Profile </title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <button
          onClick={() => {
            setAddInvoiceModal(true);
          }}
          className="btn add-btn"
        >
          Add Invoice
        </button>

        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="profile-view"
                  style={{
                    minWidth: '120px',
                    minHeight: '120px',
                  }}
                >
                  <div className="profile-img-wrap">
                    <div className="profile-img">
                      <a href="">
                        <img src={Avatar_19} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div
                          className="profile-info-left"
                          style={{
                            border: 'none',
                          }}
                        >
                          <h3 className="user-name m-t-0">{customer.name}</h3>
                          <h5 className="company-role m-t-2 mb-1 text-muted">
                            {customer.email}
                          </h5>
                          <h5 className="company-role m-t-0 mb-1 text-muted">
                            {customer.phone}
                          </h5>
                          <h5 className="company-role m-t-0 mb-1 text-muted">
                            {customer.company}
                          </h5>
                          <h5 className="company-role m-t-0 mb-1 text-muted">
                            {customer.address}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card tab-box">
          <div className="row user-tabs">
            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <ul className="nav nav-tabs nav-tabs-bottom">
                {/* <li className="nav-item ">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#purchase"
                  >
                    Purchases
                  </a>
                </li> */}
                <li className="nav-item ">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#myinvoice"
                  >
                    Invoices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content profile-tab-content">
              {/* Projects Tab */}
              {/* <div id="purchase" className="tab-pane fade active"></div> */}
              <div id="myinvoice" className="tab-pane fade show active">
                <div className="clearfix mb-3"></div>
                <Invoices invoice={customer.invoices} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Backdrop
        open={addInvoiceModal}
        style={{ zIndex: '9999' }}
        onClick={() => {
          setAddInvoiceModal(false);
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              width: '90%',
              height: '90%',
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '30px',
              position: 'relative',
            }}
          >
            <h4>Select Project</h4>
            <select
              onChange={(e) => {
                setSelectedProject(
                  projects.filter((p) => p._id === e.target.value)[0]
                );
              }}
              className="custom-select"
            >
              <option hidden value=""></option>
              {projects?.map((project) => (
                <option value={project._id}>{project.name}</option>
              ))}
            </select>
            <div
              style={{
                height: '77%',
                marginTop: '20px',
              }}
            >
              {!selectedProject?.name && (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#DCDCE1',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h2>
                    <b>No Project Selected</b>
                  </h2>
                </div>
              )}
              {selectedProject?.name && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!e.target.id) return;
                    console.log(selectedProject);
                    document
                      .querySelector(`.selected`)
                      ?.classList.remove('selected');
                    e.target.classList.add('selected');
                    setSelectedPlot(
                      selectedProject.landDivisions?.filter(
                        (p) => p.name === e.target.id
                      )[0]
                    );
                  }}
                  dangerouslySetInnerHTML={{
                    __html: selectedProject?.layout || '',
                  }}
                ></div>
              )}
            </div>
            {selectedPlot?.name && (
              <div
                id="selected-plot"
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '5%',
                  width: '22%',
                  cursor: 'move',
                  zIndex: '9999',
                  backgroundColor: 'white',
                  padding: '30px',
                  borderTop: '1px solid #E7E7E7',
                  boxShadow:
                    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
                }}
              >
                <h4
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <b>Plot Details</b>
                </h4>
                <h4>
                  <br />
                  <b>Plot Name:</b> {selectedPlot.name}
                </h4>
                <h4>
                  <b>Plot Description:</b>{' '}
                  {selectedPlot.description
                    ? selectedPlot.description
                    : 'No Description'}
                </h4>
                <h4>
                  <b>Plot Size:</b> {selectedPlot.area} Sq Ft
                </h4>
                <h4>
                  <b>Plot Price:</b> ₹ {selectedPlot.cost}
                </h4>
                <h4>
                  <b>Interested leads:</b> {selectedPlot.leads?.length || 0}
                </h4>
              </div>
            )}
            <button
              style={{
                marginTop: '3%',
              }}
              onClick={async () => {
                if (!selectedPlot.name || !selectedProject.name)
                  return toast.error('Please select a project and plot');
                if (selectedPlot.sold) {
                  return toast.error('This plot is already sold');
                }
                selectedPlot.sold = true;
                selectedPlot.soldAt = new Date();
                selectedPlot.soldBy = user._id;
                selectedPlot.soldTo = customer._id;
                await toast.promise(
                  Promise.all([
                    httpService.post('/sale-invoice', {
                      customer: customer._id,
                      project: selectedProject._id,
                      invoiceDate: new Date(),
                      items: [
                        {
                          item: selectedProject.name + ' ' + selectedPlot.name,
                          description: selectedPlot.description,
                          unitCost: selectedPlot.cost,
                          quantity: 1,
                          amount: selectedPlot.cost,
                        },
                      ],
                      total: selectedPlot.cost,
                    }),
                    // httpService.put(`/land-division/${selectedPlot._id}`, {
                    // })
                    httpService.put(`/project/${selectedProject._id}`, {
                      ...selectedProject,
                      landDivisions: selectedProject.landDivisions.map((p) => {
                        if (p._id === selectedPlot._id) {
                          return selectedPlot;
                        }
                        return p;
                      }),
                    }),
                  ]),
                  {
                    error: 'Error creating an invoice',
                    success: 'Invoice created successfully',
                    pending: 'Creating invoice...',
                  }
                );
                setAddInvoiceModal(false);
                setSelectedPlot(null);
                setSelectedProject(null);
                fetchProjects();
                fetchApi();
              }}
              className="btn add-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      </Backdrop>
      {/* /Page Content */}
    </div>
  ) : (
    <h1>Loading customer...</h1>
  );
};
export default CustomerProfile;
