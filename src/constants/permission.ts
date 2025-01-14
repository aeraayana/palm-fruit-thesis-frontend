export const SUPERADMIN = 'Superadmin'

// Employee Permission

export const EMPLOYEE_READ_ACCESS = 'Employee::get'
export const EMPLOYEE_CREATE_ACCESS = 'Employee::insert'
export const EMPLOYEE_UPDATE_ACCESS = 'Employee::update'
export const EMPLOYEE_DELETE_ACCESS = 'Employee::delete'

// Attendance Permission
export const ATTENDANCE_READ_ACCESS =
  'Attendance::get'
export const ATTENDANCE_READ_TODAY_ACCESS =
  'Attendance::get.today'
export const ATTENDANCE_RECORD_ACCESS =
  'Attendance::record'
export const ATTENDANCE_SUMMARY_ACCESS =
  'Attendance::summary'

// Branch Permission
export const BRANCH_READ_ACCESS =
  'Branch::get'
export const BRANCH_CREATE_ACCESS =
  'Branch::create'
export const BRANCH_UPDATE_ACCESS =
  'Branch::update'
export const BRANCH_UPDATE_VOICE_ACCESS =
  'Branch::save.voice'
export const BRANCH_DELETE_ACCESS =
  'Branch::delete'
  
// Item Permission
export const ITEM_READ_ACCESS =
  'Item::get'
// export const ITEM_CREATE_ACCESS =
//   '5b80e618-9da3-442f-818f-47e4911cfcf7'
export const ITEM_UPDATE_ACCESS =
  'Item::update'
export const ITEM_DELETE_ACCESS =
  'Item::delete'

// Manage Permission Permission
export const PERMISSION_READ_ACCESS =
  'Permission::get'
export const PERMISSION_UPDATE_ACCESS =
  'Permission::update'

// Manage Customer Permission
export const CUSTOMER_READ_ACCESS =
  'Customer::get'
export const CUSTOMER_CREATE_ACCESS =
  'Customer::create'
export const CUSTOMER_UPDATE_ACCESS =
  'Customer::update'
export const CUSTOMER_DELETE_ACCESS =
  'Customer::delete'

export const USER_SYSTEM_PERMISSIONS = {
  attendance: {
    get: ATTENDANCE_READ_ACCESS,
    get_today: ATTENDANCE_READ_TODAY_ACCESS,
    record: ATTENDANCE_RECORD_ACCESS,
    summary: ATTENDANCE_SUMMARY_ACCESS
  },
  branch: {
    read: BRANCH_READ_ACCESS,
    create: BRANCH_CREATE_ACCESS,
    update: BRANCH_UPDATE_ACCESS,
    update_voice: BRANCH_UPDATE_VOICE_ACCESS,
    delete: BRANCH_DELETE_ACCESS,
  },
  employee: {
    read: EMPLOYEE_READ_ACCESS,
    create: EMPLOYEE_CREATE_ACCESS,
    update: EMPLOYEE_UPDATE_ACCESS,
    delete: EMPLOYEE_DELETE_ACCESS,
  },
  item: {
    read: ITEM_READ_ACCESS,
    // create: ITEM_CREATE_ACCESS,
    update: ITEM_UPDATE_ACCESS,
    delete: ITEM_DELETE_ACCESS,
  },
  permission: {
    read: PERMISSION_READ_ACCESS,
    update: PERMISSION_UPDATE_ACCESS,
  },
  customer: {
    read: CUSTOMER_READ_ACCESS,
    create: CUSTOMER_CREATE_ACCESS,
    update: CUSTOMER_UPDATE_ACCESS,
    delete: CUSTOMER_DELETE_ACCESS
  },
  superadmin: SUPERADMIN
}
