//main
import Dashboard from '../MainPage/Main/Dashboard';
import Apps from '../MainPage/Main/Apps';
//Pages
import ProfilePage from '../MainPage/Pages/Profile';
import Subscription from '../MainPage/Pages/Subscription';
import Pages from '../MainPage/Pages/Pages';
//Administrator
import Administrator from '../MainPage/Administration';
//Performance
import Performance from '../MainPage/Performance';
import Goals from '../MainPage/Performance/Goals';
import Performances from '../MainPage/Performance/Performance';
import Training from '../MainPage/Performance/Training';
//HR
import HR from '../MainPage/HR';
import Reports from '../MainPage/HR/Reports';
import Sales from '../MainPage/HR/Sales';
import Payroll from '../MainPage/HR/Payroll';
//Employees
import Employees from '../MainPage/Employees';
import Projects from '../MainPage/Employees/Projects';
import Employee from '../MainPage/Employees/Employees';
import Purchase from '../MainPage/Purchase';
import Accounts from '../MainPage/Accounts/';

export default [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'apps',
    component: Apps,
    authority: 'READ_APPS',
  },
  {
    path: 'employee',
    component: Employee,
  },
  {
    path: 'employees',
    component: Employees,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'profile',
    component: ProfilePage,
  },
  {
    path: 'subscription',
    component: Subscription,
  },
  {
    path: 'pages',
    component: Pages,
  },
  {
    path: 'administrator',
    component: Administrator,
  },
  {
    path: 'performance',
    component: Performance,
  },
  {
    path: 'goals',
    component: Goals,
  },
  {
    path: 'performances',
    component: Performances,
  },
  {
    path: 'training',
    component: Training,
  },
  {
    path: 'reports',
    component: Reports,
  },
  {
    path: 'sales',
    component: Sales,
  },
  {
    path: 'purchase',
    component: Purchase,
  },
  {
    path: 'accounts',
    component: Accounts,
  },
  {
    path: 'payroll',
    component: Payroll,
  },
];
