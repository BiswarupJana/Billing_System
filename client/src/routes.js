import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Invoice€
const Invoice = React.lazy(() => import('./views/invoice/invoiceBody/InvoiceBody'))
const NewInvoice = React.lazy(() => import('./views/invoice/newInvoice/NewInvoice'))
const ManageInvoice = React.lazy(() => import('./views/invoice/manageInvoice/ManageInvoice'))

// Customer
const Customer = React.lazy(() => import('./views/customer/customerBody/CustomerBody'))
const AddCustomer = React.lazy(() => import('./views/customer/addCustomer/AddCustomer'))
const ManageCustomer = React.lazy(() => import('./views/customer/manageCustomer/ManageCustomer'))

// Items
const Items = React.lazy(() => import('./views/item/itemBody/ItemBody'))
const AddItem = React.lazy(() => import('./views/item/addItem/AddItem'))
const ManageItem = React.lazy(() => import('./views/item/manageItem/ManageItem'))
const StockItem = React.lazy(() => import('./views/item/manageItemStock/ManageItemStock'))

//Supplier
const Supplier = React.lazy(() => import('./views/supplier/supplierBody/SupplierBody'))
const AddSupplier = React.lazy(() => import('./views/supplier/addSupplier/AddSupplier'))
const ManageSupplier = React.lazy(() => import('./views/supplier/manageSupplier/ManageSupplier'))

//Purchase
const Purchase = React.lazy(() => import('./views/purchase/purchaseBody/PurchaseBody'))
const AddPurchase = React.lazy(() => import('./views/purchase/addPurchase/AddPurchase'))
const ManagePurchase = React.lazy(() => import('./views/purchase/managePurchase/ManagePurchase'))

//Report
const Report = React.lazy(() => import('./views/report/reportBody/ReportBody'))
const SalesReport = React.lazy(() => import('./views/report/salesReport/SalesReport'))
const PurchaseReport = React.lazy(() => import('./views/report/purchaseReport/PurchaseReport'))

// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/invoice', name: 'Invoice', element: Invoice, exact: true },
  { path: '/invoice/newInvoice', name: 'New Invoice', element: NewInvoice },
  { path: '/invoice/manageInvoice', name: 'Manage Invoice', element: ManageInvoice },
  { path: '/customer', name: 'Customer', element: Customer, exact: true },
  { path: '/customer/addCustomer', name: 'Add Customer', element: AddCustomer },
  { path: '/customer/manageCustomer', name: 'Manage Customer', element: ManageCustomer },
  { path: '/item', name: 'Item', element: Items, exact: true },
  { path: '/item/addItem', name: 'Add Item', element: AddItem },
  { path: '/item/manageItem', name: 'Manage Item', element: ManageItem },
  { path: '/item/stockItem', name: 'Stock Item', element: StockItem },
  { path: '/supplier', name: 'Supplier', element: Supplier, exact: true },
  { path: '/supplier/addSupplier', name: 'Add Supplier', element: AddSupplier },
  { path: '/supplier/manageSupplier', name: 'Manage Supplier', element: ManageSupplier },
  { path: '/purchase', name: 'Purchase', element: Purchase, exact: true },
  { path: '/purchase/addPurchase', name: 'Add Purchase', element: AddPurchase },
  { path: '/pruchase/managePurchase', name: 'Manage Purchase', element: ManagePurchase },
  { path: '/report', name: 'Report', element: Report, exact: true },
  { path: '/report/salesReport', name: 'Sales Report', element: SalesReport },
  { path: '/report/purchaseReport', name: 'Purchase Report', element: PurchaseReport },

  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
