import httpService from '../httpService';

export async function Login(userName, password) {
  const LoginResponse = new Promise(async (resolve) => {
    httpService
      .post('/auth/login', { userName, password })
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error ',
        });
      });
  });
  return LoginResponse;
}
export async function allemployee() {
  const employeeResponse = new Promise(async (resolve) => {
    httpService
      .get('/employee')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return employeeResponse;
}

export async function addemployee(data) {
  const addEmployeeResponse = new Promise(async (resolve) => {
    httpService
      .post('/employee', data)
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return addEmployeeResponse;
}

export async function fetchholiday() {
  const holidayResponse = new Promise(async (resolve) => {
    httpService
      .get('/holiday')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return holidayResponse;
}

export async function addholiday(data) {
  const addHolidayResponse = new Promise(async (resolve) => {
    httpService
      .post('/holiday', data)
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return addHolidayResponse;
}

export async function fetchdepartment() {
  const departmentResponse = new Promise(async (resolve) => {
    httpService
      .get('/department')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return departmentResponse;
}

export async function fetchOvertime() {
  const overtimeResponse = new Promise(async (resolve) => {
    httpService
      .get('/overtime')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return overtimeResponse;
}

export async function fetchJobs() {
  const fetchJobsResponse = new Promise(async (resolve) => {
    httpService
      .get('/job')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return fetchJobsResponse;
}

export async function addJob(data) {
  const addJobResponse = new Promise(async (resolve) => {
    httpService
      .post('/job', data)
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return addJobResponse;
}

export async function fetchInvestment() {
  const fetchInvestmentResponse = new Promise(async (resolve) => {
    httpService
      .get('/investment')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return fetchInvestmentResponse;
}

export async function fetchTax() {
  const fetchTaxResponse = new Promise(async (resolve) => {
    httpService
      .get('/tax')
      .then((response) => {
        console.log(response);
        return resolve(response.data);
      })
      .catch((err) => {
        return resolve({
          error: true,
          message: err.response.message || 'Internal Server Error',
        });
      });
  });
  return fetchTaxResponse;
}



