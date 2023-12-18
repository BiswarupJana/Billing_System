import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilFile,
  cilPeople,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Invoice',
    to: '/invoice',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New Invoice',
        to: '/invoice/newInvoice',
      },
      {
        component: CNavItem,
        name: 'Manage Invoice',
        to: '/invoice/manageInvoice',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customer',
    to: '/customer',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Customer',
        to: '/customer/addCustomer',
      },
      {
        component: CNavItem,
        name: 'Manage Customer',
        to: '/customer/manageCustomer',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Item',
    to: '/item',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Item',
        to: '/item/addItem',
      },
      {
        component: CNavItem,
        name: 'Manage Item',
        to: '/item/manageItem',
      },
      {
        component: CNavItem,
        name: 'Stock Item',
        to: '/item/stockItem',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Supplier',
    to: '/supplier',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Supplier',
        to: '/supplier/addSupplier',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Manage Supplier',
        to: '/supplier/manageSupplier',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Purchase',
    to: '/purchase',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Purchase',
        to: '/purchase/addPurchase',
      },
      {
        component: CNavItem,
        name: 'Manage Purchase',
        to: '/pruchase/managePurchase',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Report',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sales Report',
        to: '/report/salesReport',
      },
      {
        component: CNavItem,
        name: 'Purchase Report',
        to: '/report/purchaseReport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Search',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Invoice',
        to: '/invoice/manageInvoice',
      },
      {
        component: CNavItem,
        name: 'Customer',
        to: '/customer/manageCustomer',
      },
      {
        component: CNavItem,
        name: 'Item',
        to: '/item/manageItem',
      },
      {
        component: CNavItem,
        name: 'Supplier',
        to: '/supplier/manageSupplier',
      },
      {
        component: CNavItem,
        name: 'Purchase',
        to: '/pruchase/managePurchase',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'LogIn/SignUP',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Log In',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Sign Up',
        to: '/register',
      },
    ],
  },
]

export default _nav
