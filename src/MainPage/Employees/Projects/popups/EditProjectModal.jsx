import React from 'react';

const EditProjectModal = ({ onSubmit, setProjectToEdit, projectToEdit }) => (
  <div id="edit_project" className="modal custom-modal fade" role="dialog">
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Project</h5>
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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              onSubmit(e.target.reset);
              e.target.reset();
            }}
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    defaultValue={projectToEdit.name}
                    onChange={(e) => {
                      setProjectToEdit((d) => ({
                        ...d,
                        name: e.target.value,
                      }));
                    }}
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-group">
                    <label>Cost/Sq Feet</label>
                    <input
                      defaultValue={projectToEdit.costPerSqFeet}
                      onChange={(e) => {
                        setProjectToAdd((d) => ({
                          ...d,
                          costPerSqFeet: e.target.value,
                        }));
                      }}
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Start Date</label>
                  <div>
                    <input
                      className="form-control"
                      defaultValue={projectToEdit.startDate?.substring(0, 10)}
                      onChange={(e) => {
                        setProjectToEdit((d) => ({
                          ...d,
                          startDate: e.target.value,
                        }));
                      }}
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    value={projectToEdit.type}
                    onChange={(e) => {
                      setProjectToEdit((d) => ({
                        ...d,
                        type: e.target.value,
                      }));
                    }}
                    className="custom-select"
                  >
                    <option value={''}>Select type</option>
                    <option value={'Plot'}>Plot for sale</option>
                    <option value={'Flat'}>Flat for sale</option>
                    <option value={'Simplex'}>Simplex for sale</option>
                    <option value={'Duplex'}>Duplex for sale</option>
                    <option value={'Triplex'}>Triplex for sale</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows={4}
                className="form-control"
                placeholder="Description"
                defaultValue={projectToEdit.description}
                onChange={(e) => {
                  setProjectToEdit((d) => ({
                    ...d,
                    description: e.target.value,
                  }));
                }}
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
);

export default EditProjectModal;
