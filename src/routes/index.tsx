/* eslint-disable react-refresh/only-export-components */
import Categories from '@/pages/apps/categories'
import Customers from '@/pages/apps/customers'
import Orders from '@/pages/apps/orders'
import Shipping from '@/pages/apps/shipping'
import Boxes from '@/pages/apps/shipping/boxes'
import Carriers from '@/pages/apps/shipping/carriers'
import InsuranceList from '@/pages/apps/shipping/insurance/components/InsuranceList'
import PackAndGo from '@/pages/apps/shipping/packAndGo'
import PrintOptions from '@/pages/apps/shipping/printOptions'
import ShippingDefaults from '@/pages/apps/shipping/shippingDefaults.tsx'
import ShippingPrices from '@/pages/apps/shipping/shippingPrices'
import { lazy } from 'react'
import { Navigate, RouteProps } from 'react-router-dom'

//dashboards
const AnalyticDashboard = lazy(() => import('@/pages/dashboards/Analytic'))
const CryptoDashboard = lazy(() => import('@/pages/dashboards/Crypto'))
const CRMDashboard = lazy(() => import('@/pages/dashboards/CRM'))
const ProjectDashboard = lazy(() => import('@/pages/dashboards/Project'))
const EcommerceDashboard = lazy(() => import('@/pages/dashboards/Ecommerce'))
const HelpDeskDashboard = lazy(() => import('@/pages/dashboards/HelpDesk'))
const HospitalDashboard = lazy(() => import('@/pages/dashboards/Hospital'))

//apps
const CustomerApp = lazy(() => import('@/pages/apps/analytics/Customers'))
const ReportApp = lazy(() => import('@/pages/apps/analytics/Reports'))
const Products1 = lazy(() => import('@/pages/apps/products'))

const CryptoExchange = lazy(() => import('@/pages/apps/crypto/Exchange'))
const CryptoWallet = lazy(() => import('@/pages/apps/crypto/Wallet'))
const CryptoNews = lazy(() => import('@/pages/apps/crypto/News'))
const CryptoIco = lazy(() => import('@/pages/apps/crypto/ICOList'))
const CryptoSettings = lazy(() => import('@/pages/apps/crypto/Settings'))

const CRMContacts = lazy(() => import('@/pages/apps/crm/Contacts'))
const CRMOpportunities = lazy(() => import('@/pages/apps/crm/Opportunities'))
const CRMLeads = lazy(() => import('@/pages/apps/crm/Leads'))
const CRMCustomers = lazy(() => import('@/pages/apps/crm/Customers'))

const ProjectClient = lazy(() => import('@/pages/apps/projects/Clients'))
const ProjectTeam = lazy(() => import('@/pages/apps/projects/Teams'))
const ProjectApp = lazy(() => import('@/pages/apps/projects/Project'))
const ProjectTask = lazy(() => import('@/pages/apps/projects/Task'))
const ProjectKanban = lazy(() => import('@/pages/apps/projects/KanbanBoard'))
const ProjectChat = lazy(() => import('@/pages/apps/projects/Chat'))
const ProjectUsers = lazy(() => import('@/pages/apps/projects/Users'))
const ProjectCreate = lazy(() => import('@/pages/apps/projects/CreateProject'))

const Products = lazy(() => import('@/pages/apps/ecommerce/Products'))
const ProductList = lazy(() => import('@/pages/apps/ecommerce/ProductList'))
const ProductDetail = lazy(() => import('@/pages/apps/ecommerce/ProductDetail'))
const ProductCart = lazy(() => import('@/pages/apps/ecommerce/Cart'))
const Checkout = lazy(() => import('@/pages/apps/ecommerce/Checkout'))

const Tickets = lazy(() => import('@/pages/apps/helpdesk/Tickets'))
const Reports = lazy(() => import('@/pages/apps/helpdesk/Reports'))
const Agents = lazy(() => import('@/pages/apps/helpdesk/Agents'))

const Schedule = lazy(
	() => import('@/pages/apps/hospital/appointments/Shedule')
)
const Appointments = lazy(
	() => import('@/pages/apps/hospital/appointments/Appointments')
)

const AllDoctors = lazy(
	() => import('@/pages/apps/hospital/doctors/AllDoctors')
)
const AddDoctor = lazy(() => import('@/pages/apps/hospital/doctors/AddDoctor'))
const DoctorEdit = lazy(
	() => import('@/pages/apps/hospital/doctors/DoctorEdit')
)
const DoctorProfile = lazy(
	() => import('@/pages/apps/hospital/doctors/DoctorProfile')
)

const AllPatients = lazy(
	() => import('@/pages/apps/hospital/patients/AllPatients')
)
const AddPatient = lazy(
	() => import('@/pages/apps/hospital/patients/AddPatient')
)
const PatientEdit = lazy(
	() => import('@/pages/apps/hospital/patients/PatientEdit')
)
const PatientProfile = lazy(
	() => import('@/pages/apps/hospital/patients/PatientProfile')
)

const AllPayments = lazy(
	() => import('@/pages/apps/hospital/payments/AllPayments')
)
const PaymentInvoice = lazy(
	() => import('@/pages/apps/hospital/payments/PaymentInvoice')
)
const CashlessPayments = lazy(
	() => import('@/pages/apps/hospital/payments/CashlessPayments')
)

const AllStaff = lazy(() => import('@/pages/apps/hospital/staff/AllStaff'))
const AddMember = lazy(() => import('@/pages/apps/hospital/staff/AddMember'))
const EditMember = lazy(() => import('@/pages/apps/hospital/staff/EditMember'))
const MemberProfile = lazy(
	() => import('@/pages/apps/hospital/staff/MemberProfile')
)
const StaffSalary = lazy(
	() => import('@/pages/apps/hospital/staff/StaffSalary')
)

const RoomAllotments = lazy(
	() => import('@/pages/apps/hospital/general/RoomAllotments')
)
const ExpensesReport = lazy(
	() => import('@/pages/apps/hospital/general/ExpensesReport')
)
const Departments = lazy(
	() => import('@/pages/apps/hospital/general/Departments')
)
const InsuranceCo = lazy(
	() => import('@/pages/apps/hospital/general/InsuranceCo')
)
const Events = lazy(() => import('@/pages/apps/hospital/general/Events'))
const Leaves = lazy(() => import('@/pages/apps/hospital/general/Leaves'))
const Holidays = lazy(() => import('@/pages/apps/hospital/general/Holidays'))
const Attendance = lazy(
	() => import('@/pages/apps/hospital/general/Attendance')
)
const GeneralChat = lazy(() => import('@/pages/apps/hospital/general/Chat'))

const Inbox = lazy(() => import('@/pages/apps/email/Inbox'))
const ReadEmail = lazy(() => import('@/pages/apps/email/ReadEmail'))

const Chat = lazy(() => import('@/pages/apps/Chat'))
const ContactsList = lazy(() => import('@/pages/apps/ContactsList'))
const Calendar = lazy(() => import('@/pages/apps/Calendar'))
const Invoice = lazy(() => import('@/pages/apps/Invoice'))

//ui pages
const Alerts = lazy(() => import('@/pages/uikit/elements/Alerts'))
const Avatars = lazy(() => import('@/pages/uikit/elements/Avatars'))
const Buttons = lazy(() => import('@/pages/uikit/elements/Buttons'))
const Badges = lazy(() => import('@/pages/uikit/elements/Badges'))
const Cards = lazy(() => import('@/pages/uikit/elements/Cards'))
const Carousels = lazy(() => import('@/pages/uikit/elements/Carousels'))
const Dropdowns = lazy(() => import('@/pages/uikit/elements/Dropdowns'))
const Grid = lazy(() => import('@/pages/uikit/elements/Grids'))
const Images = lazy(() => import('@/pages/uikit/elements/Images'))
const List = lazy(() => import('@/pages/uikit/elements/List'))
const Modals = lazy(() => import('@/pages/uikit/elements/Modals'))
const Navs = lazy(() => import('@/pages/uikit/elements/Navs'))
const Navbar = lazy(() => import('@/pages/uikit/elements/Navbar'))
const Paginations = lazy(() => import('@/pages/uikit/elements/Paginations'))
const PopoverAndTooltips = lazy(
	() => import('@/pages/uikit/elements/PopoverAndTooltips')
)
const Progress = lazy(() => import('@/pages/uikit/elements/Progress'))
const Spinners = lazy(() => import('@/pages/uikit/elements/Spinners'))
const TabsAndAccordion = lazy(
	() => import('@/pages/uikit/elements/TabsAndAccordions')
)
const Typography = lazy(() => import('@/pages/uikit/elements/Typography'))
const Videos = lazy(() => import('@/pages/uikit/elements/Videos'))

//advanced ui
const Animation = lazy(() => import('@/pages/uikit/advanced-ui/Animation'))
const ClipBoard = lazy(() => import('@/pages/uikit/advanced-ui/ClipBoard'))
const Dragula = lazy(() => import('@/pages/uikit/advanced-ui/Dragula'))
const FileManager = lazy(() => import('@/pages/uikit/advanced-ui/FileManager'))
const Highlight = lazy(() => import('@/pages/uikit/advanced-ui/Highlight'))
const RangeSlider = lazy(() => import('@/pages/uikit/advanced-ui/RangeSlider'))
const Ratings = lazy(() => import('@/pages/uikit/advanced-ui/Ratings'))
const Ribbons = lazy(() => import('@/pages/uikit/advanced-ui/Ribbons'))
const SweetAlerts = lazy(() => import('@/pages/uikit/advanced-ui/SweetAlerts'))
const Toasts = lazy(() => import('@/pages/uikit/advanced-ui/Toasts'))

// forms pages
const FormsElement = lazy(() => import('@/pages/uikit/forms/FormsElements'))
const FormAdvanced = lazy(() => import('@/pages/uikit/forms/AdvancedElements'))
const FormValidation = lazy(() => import('@/pages/uikit/forms/Validation'))
const FormWizard = lazy(() => import('@/pages/uikit/forms/Wizard'))
const FormEditors = lazy(() => import('@/pages/uikit/forms/Editors'))
const FormFileUpload = lazy(() => import('@/pages/uikit/forms/FileUpload'))
const FormImageCrop = lazy(() => import('@/pages/uikit/forms/ImageCrop'))

//chart pages
const ApexChart = lazy(() => import('@/pages/uikit/charts/Apex'))
const JustgageCharts = lazy(() => import('@/pages/uikit/charts/JustGage'))
const ChartjsCharts = lazy(() => import('@/pages/uikit/charts/ChartJs'))
const ToastChart = lazy(() => import('@/pages/uikit/charts/Toast'))

//tables pages
const BasicTables = lazy(() => import('@/pages/uikit/tables/BasicTables'))
const DataTables = lazy(() => import('@/pages/uikit/tables/DataTables'))

//icons pages
const MaterialDesignIcons = lazy(
	() => import('@/pages/uikit/icons/MaterialDesignIcons')
)
const TablerIcons = lazy(() => import('@/pages/uikit/icons/TablerIcons'))
const FontAwesomeIcons = lazy(
	() => import('@/pages/uikit/icons/FontAwesomeIcons')
)
const FeatherIcons = lazy(() => import('@/pages/uikit/icons/FeatherIcons'))

//maps pages
const GoogleMaps = lazy(() => import('@/pages/uikit/maps/GoogleMaps'))
const LeafletMaps = lazy(() => import('@/pages/uikit/maps/LeafletMaps'))
const VectorMaps = lazy(() => import('@/pages/uikit/maps/VectorMap'))

//email templates pages
const BasicTemplates = lazy(
	() => import('@/pages/uikit/email-templates/ActionEmail')
)
const AlertTemplates = lazy(
	() => import('@/pages/uikit/email-templates/AlertEmail')
)
const BillingTemplates = lazy(
	() => import('@/pages/uikit/email-templates/BillingEmail')
)

//Pages
const ProfilePage = lazy(() => import('@/pages/other-pages/Profile'))
const TimelinePage = lazy(() => import('@/pages/other-pages/Timeline'))
const TreeviewPage = lazy(() => import('@/pages/other-pages/Treeview'))
const StarterPage = lazy(() => import('@/pages/other-pages/Stater'))
const PricingPage = lazy(() => import('@/pages/other-pages/Pricing'))
const BlogPage = lazy(() => import('@/pages/other-pages/Blogs'))
const FAQsPage = lazy(() => import('@/pages/other-pages/FAQs'))
const GalleryPage = lazy(() => import('@/pages/other-pages/Gallery'))
const TourPage = lazy(() => import('@/pages/other-pages/Tour'))

//auth pages
const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))
const ResetPassword = lazy(() => import('@/pages/auth/ResetPassword'))
const LockScreen = lazy(() => import('@/pages/auth/LockScreen'))
const LoginAlt = lazy(() => import('@/pages/auth-alt/Login'))
const ResetPasswordAlt = lazy(() => import('@/pages/auth-alt/ResetPassword'))
const RegisterAlt = lazy(() => import('@/pages/auth-alt/Register'))
const LockScreenAlt = lazy(() => import('@/pages/auth-alt/LockScreen'))

//error Pages
const NotFound = lazy(() => import('@/pages/error/PageNotFound'))
const NotFoundAlt = lazy(() => import('@/pages/error/PageNotFoundAlt'))
const Error500 = lazy(() => import('@/pages/error/Error500'))
const Error500Alt = lazy(() => import('@/pages/error/Error500Alt'))

export type RoutesProps = {
	path: RouteProps['path']
	name: string
	element: RouteProps['element']
}

const dashboardRoutes: RoutesProps[] = [
	{
		path: '/',
		name: 'Home Page',
		element: <Navigate to="/dashboards/analytic" />,
	},
	{
		path: '/dashboards/analytic',
		name: 'Dashboard',
		element: <AnalyticDashboard />,
	},
	{
		path: '/dashboards/crypto',
		name: 'Crypto',
		element: <CryptoDashboard />,
	},
	{
		path: '/dashboards/crm',
		name: 'CRM',
		element: <CRMDashboard />,
	},
	{
		path: '/dashboards/project',
		name: 'Project',
		element: <ProjectDashboard />,
	},
	{
		path: '/dashboards/ecommerce',
		name: 'Ecommerce',
		element: <EcommerceDashboard />,
	},
	{
		path: '/dashboards/helpdesk',
		name: 'Help Desk',
		element: <HelpDeskDashboard />,
	},
	{
		path: '/dashboards/hospital',
		name: 'Hospital',
		element: <HospitalDashboard />,
	},
]

const appsRoutes: RoutesProps[] = [
	{
		path: '/apps/analytics/customers',
		name: 'Customers',
		element: <CustomerApp />,
	},
	{
		path: '/apps/products/:mode?/:slug?',
		name: 'Products',
		element: <Products1 />,
	},
	{
		path: '/apps/categories/:mode?/:slug?',
		name: 'Categories',
		element: <Categories />,
	},
	{
		path: '/apps/orders/:mode?/:slug?',
		name: 'Orders',
		element: <Orders />,
	},
	{
		path: '/apps/customers/:mode?/:slug?',
		name: 'Customers',
		element: <Customers />,
	},
	{
		path: '/apps/analytics/reports',
		name: 'Reports',
		element: <ReportApp />,
	},
	{
		path: '/apps/crypto/exchange',
		name: 'Exchange',
		element: <CryptoExchange />,
	},
	{
		path: '/apps/crypto/wallet',
		name: 'Wallet',
		element: <CryptoWallet />,
	},
	{
		path: '/apps/crypto/news',
		name: 'News',
		element: <CryptoNews />,
	},
	{
		path: '/apps/crypto/ico',
		name: 'Ico',
		element: <CryptoIco />,
	},
	{
		path: '/apps/crypto/settings',
		name: 'Settings',
		element: <CryptoSettings />,
	},
	{
		path: '/apps/crm/contacts',
		name: 'Contacts',
		element: <CRMContacts />,
	},
	{
		path: '/apps/crm/opportunities',
		name: 'Opportunities',
		element: <CRMOpportunities />,
	},
	{
		path: '/apps/crm/leads',
		name: 'Leads',
		element: <CRMLeads />,
	},
	{
		path: '/apps/crm/customers',
		name: 'Customers',
		element: <CRMCustomers />,
	},
	{
		path: '/apps/projects/clients',
		name: 'Project Client',
		element: <ProjectClient />,
	},
	{
		path: '/apps/projects/team',
		name: 'Project Team',
		element: <ProjectTeam />,
	},
	{
		path: '/apps/projects/project',
		name: 'Project',
		element: <ProjectApp />,
	},
	{
		path: '/apps/projects/task',
		name: 'Task',
		element: <ProjectTask />,
	},
	{
		path: '/apps/projects/kanban-board',
		name: 'Kanban Board',
		element: <ProjectKanban />,
	},
	{
		path: '/apps/projects/chat',
		name: 'Chat',
		element: <ProjectChat />,
	},
	{
		path: '/apps/projects/users',
		name: 'Users',
		element: <ProjectUsers />,
	},
	{
		path: '/apps/projects/create',
		name: 'Project Create',
		element: <ProjectCreate />,
	},
	{
		path: '/apps/ecommerce/products',
		name: 'Products',
		element: <Products />,
	},
	{
		path: '/apps/ecommerce/product-list',
		name: 'ProductList',
		element: <ProductList />,
	},
	{
		path: '/apps/ecommerce/product-detail',
		name: 'ProductDetail',
		element: <ProductDetail />,
	},
	{
		path: '/apps/ecommerce/cart',
		name: 'Cart',
		element: <ProductCart />,
	},
	{
		path: '/apps/ecommerce/checkout',
		name: 'Checkout',
		element: <Checkout />,
	},
	{
		path: '/apps/helpdesk/tickets',
		name: 'Tickets',
		element: <Tickets />,
	},
	{
		path: '/apps/helpdesk/reports',
		name: 'Reports',
		element: <Reports />,
	},
	{
		path: '/apps/helpdesk/agents',
		name: 'Agents',
		element: <Agents />,
	},
	{
		path: '/apps/hospital/appointments/schedule',
		name: 'Schedule',
		element: <Schedule />,
	},
	{
		path: '/apps/hospital/appointments/all',
		name: 'Appointments',
		element: <Appointments />,
	},
	{
		path: '/apps/hospital/doctors/all',
		name: 'All Doctors',
		element: <AllDoctors />,
	},
	{
		path: '/apps/hospital/doctors/add',
		name: 'Add Doctor',
		element: <AddDoctor />,
	},
	{
		path: '/apps/hospital/doctors/edit',
		name: 'Doctor Edit',
		element: <DoctorEdit />,
	},
	{
		path: '/apps/hospital/doctors/profile',
		name: 'Doctor Profile',
		element: <DoctorProfile />,
	},
	{
		path: '/apps/hospital/patients/all',
		name: 'All Patients',
		element: <AllPatients />,
	},
	{
		path: '/apps/hospital/patients/add',
		name: 'Add Patient',
		element: <AddPatient />,
	},
	{
		path: '/apps/hospital/patients/edit',
		name: 'Patient Edit',
		element: <PatientEdit />,
	},
	{
		path: '/apps/hospital/patients/profile',
		name: 'Patient Profile',
		element: <PatientProfile />,
	},
	{
		path: '/apps/hospital/payments/all',
		name: 'All Payments',
		element: <AllPayments />,
	},
	{
		path: '/apps/hospital/payments/invoice',
		name: 'Appointments',
		element: <PaymentInvoice />,
	},
	{
		path: '/apps/hospital/payments/cashless',
		name: 'Cashless Payments',
		element: <CashlessPayments />,
	},
	{
		path: '/apps/hospital/staff/all',
		name: 'All Staff',
		element: <AllStaff />,
	},
	{
		path: '/apps/hospital/staff/add',
		name: 'Add Member',
		element: <AddMember />,
	},
	{
		path: '/apps/hospital/staff/edit',
		name: 'Edit Member',
		element: <EditMember />,
	},
	{
		path: '/apps/hospital/staff/profile',
		name: 'Member Profile',
		element: <MemberProfile />,
	},
	{
		path: '/apps/hospital/staff/salary',
		name: 'Staff Salary',
		element: <StaffSalary />,
	},
	{
		path: '/apps/hospital/general/rooms',
		name: 'Room Allotments',
		element: <RoomAllotments />,
	},
	{
		path: '/apps/hospital/general/expenses',
		name: 'Expenses Report',
		element: <ExpensesReport />,
	},
	{
		path: '/apps/hospital/general/departments',
		name: 'Departments',
		element: <Departments />,
	},
	{
		path: '/apps/hospital/general/insurance-company',
		name: 'InsuranceCo',
		element: <InsuranceCo />,
	},
	{
		path: '/apps/hospital/general/events',
		name: 'Events',
		element: <Events />,
	},
	{
		path: '/apps/hospital/general/leaves',
		name: 'Leaves',
		element: <Leaves />,
	},
	{
		path: '/apps/hospital/general/holidays',
		name: 'Holidays',
		element: <Holidays />,
	},
	{
		path: '/apps/hospital/general/attendance',
		name: 'Attendance',
		element: <Attendance />,
	},
	{
		path: '/apps/hospital/general/chat',
		name: 'General Chat',
		element: <GeneralChat />,
	},
	{
		path: '/apps/email/inbox',
		name: 'Inbox',
		element: <Inbox />,
	},
	{
		path: '/apps/email/read',
		name: 'Read Email',
		element: <ReadEmail />,
	},
	{
		path: '/apps/chat',
		name: 'Chat',
		element: <Chat />,
	},
	{
		path: '/apps/contact-list',
		name: 'Contacts List',
		element: <ContactsList />,
	},
	{
		path: '/apps/calendar',
		name: 'Calendar',
		element: <Calendar />,
	},
	{
		path: '/apps/invoice',
		name: 'Invoice',
		element: <Invoice />,
	},
]

const shipmentsRoutes: RoutesProps[] = [
	{
		path: '/shipments/overview/:mode?/:slug?',
		name: 'Dashboard',
		element: <Shipping />,
	},
	{
		path: '/shipments/carriers',
		name: 'Carriers',
		element: <Carriers />,
	},
	{
		path: '/shipments/pack-and-go',
		name: 'Pack and Go',
		element: <PackAndGo />,
	},
	{
		path: '/shipments/default-settings',
		name: 'Shipping Defaluts',
		element: <ShippingDefaults />,
	},
	{
		path: '/shipments/rates',
		name: 'Shipping Prices',
		element: <ShippingPrices />,
	},
	{
		path: '/shipments/insurance',
		name: 'Shipping Insurance',
		element: <InsuranceList />,
	},
	{
		path: '/shipments/print-options',
		name: 'Print Options',
		element: <PrintOptions />,
	},
	{
		path: '/shipments/boxes',
		name: 'BOxes',
		element: <Boxes />,
	},
	{
		path: '/dashboards/project',
		name: 'Project',
		element: <ProjectDashboard />,
	},
	{
		path: '/dashboards/ecommerce',
		name: 'Ecommerce',
		element: <EcommerceDashboard />,
	},
	{
		path: '/dashboards/helpdesk',
		name: 'Help Desk',
		element: <HelpDeskDashboard />,
	},
	{
		path: '/dashboards/hospital',
		name: 'Hospital',
		element: <HospitalDashboard />,
	},
]

const uiRoutes: RoutesProps[] = [
	{
		path: '/ui/elements/alerts',
		name: 'Alerts',
		element: <Alerts />,
	},
	{
		path: '/ui/elements/avatars',
		name: 'Avatars',
		element: <Avatars />,
	},
	{
		path: '/ui/elements/buttons',
		name: 'Buttons',
		element: <Buttons />,
	},
	{
		path: '/ui/elements/badges',
		name: 'Badges',
		element: <Badges />,
	},
	{
		path: '/ui/elements/cards',
		name: 'Cards',
		element: <Cards />,
	},
	{
		path: '/ui/elements/carousels',
		name: 'Carousels',
		element: <Carousels />,
	},
	{
		path: '/ui/elements/dropdowns',
		name: 'Dropdowns',
		element: <Dropdowns />,
	},
	{
		path: '/ui/elements/grid',
		name: 'Grid',
		element: <Grid />,
	},
	{
		path: '/ui/elements/images',
		name: 'Images',
		element: <Images />,
	},
	{
		path: '/ui/elements/list',
		name: 'List',
		element: <List />,
	},
	{
		path: '/ui/elements/modals',
		name: 'Modals',
		element: <Modals />,
	},
	{
		path: '/ui/elements/navs',
		name: 'Modals',
		element: <Navs />,
	},
	{
		path: '/ui/elements/navbar',
		name: 'Navbar',
		element: <Navbar />,
	},
	{
		path: '/ui/elements/paginations',
		name: 'Paginations',
		element: <Paginations />,
	},
	{
		path: '/ui/elements/popover-tooltips',
		name: 'Popover And Tooltips',
		element: <PopoverAndTooltips />,
	},
	{
		path: '/ui/elements/progress',
		name: 'Progress',
		element: <Progress />,
	},
	{
		path: '/ui/elements/spinners',
		name: 'Spinners',
		element: <Spinners />,
	},
	{
		path: '/ui/elements/tabs-accordions',
		name: 'Tabs And Accordion',
		element: <TabsAndAccordion />,
	},
	{
		path: '/ui/elements/typography',
		name: 'Typography',
		element: <Typography />,
	},
	{
		path: '/ui/elements/videos',
		name: 'Videos',
		element: <Videos />,
	},
]

const advancedUiRoutes: RoutesProps[] = [
	{
		path: '/ui/advanced/animation',
		name: 'Animation',
		element: <Animation />,
	},
	{
		path: '/ui/advanced/clip-board',
		name: 'Clip-Board',
		element: <ClipBoard />,
	},
	{
		path: '/ui/advanced/dragula',
		name: 'Dragula',
		element: <Dragula />,
	},
	{
		path: '/ui/advanced/file-manager',
		name: 'File Manager',
		element: <FileManager />,
	},
	{
		path: '/ui/advanced/highlight',
		name: 'Highlight',
		element: <Highlight />,
	},
	{
		path: '/ui/advanced/range-slider',
		name: 'Range Slider',
		element: <RangeSlider />,
	},
	{
		path: '/ui/advanced/ratings',
		name: 'Ratings',
		element: <Ratings />,
	},
	{
		path: '/ui/advanced/ribbons',
		name: 'Ribbons',
		element: <Ribbons />,
	},
	{
		path: '/ui/advanced/sweet-alerts',
		name: 'Sweet Alerts',
		element: <SweetAlerts />,
	},
	{
		path: '/ui/advanced/toasts',
		name: 'Toasts',
		element: <Toasts />,
	},
]

const formsRoutes: RoutesProps[] = [
	{
		path: '/ui/forms/elements',
		name: 'Form Elements',
		element: <FormsElement />,
	},
	{
		path: '/ui/forms/advance',
		name: 'Advance Elements',
		element: <FormAdvanced />,
	},
	{
		path: '/ui/forms/validation',
		name: 'Validation',
		element: <FormValidation />,
	},
	{
		path: '/ui/forms/wizard',
		name: 'Wizard',
		element: <FormWizard />,
	},
	{
		path: '/ui/forms/editors',
		name: 'Editors',
		element: <FormEditors />,
	},
	{
		path: '/ui/forms/file-upload',
		name: 'File Upload',
		element: <FormFileUpload />,
	},
	{
		path: '/ui/forms/image-crop',
		name: 'Image Crop',
		element: <FormImageCrop />,
	},
]

const otherUiRoutes: RoutesProps[] = [
	{
		path: '/ui/charts/apex',
		name: 'Apex',
		element: <ApexChart />,
	},
	{
		path: '/ui/charts/justgage',
		name: 'Justgage',
		element: <JustgageCharts />,
	},
	{
		path: '/ui/charts/chartjs',
		name: 'Chartjs',
		element: <ChartjsCharts />,
	},
	{
		path: '/ui/charts/toast',
		name: 'Toast Chart',
		element: <ToastChart />,
	},
	{
		path: '/ui/tables/basic',
		name: 'Basic',
		element: <BasicTables />,
	},
	{
		path: '/ui/tables/data',
		name: 'Data Tables',
		element: <DataTables />,
	},
	{
		path: '/ui/icons/md',
		name: 'Material Design',
		element: <MaterialDesignIcons />,
	},
	{
		path: '/ui/icons/fa',
		name: 'Font Awesome',
		element: <FontAwesomeIcons />,
	},
	{
		path: '/ui/icons/tb',
		name: 'Tabler',
		element: <TablerIcons />,
	},
	{
		path: '/ui/icons/feather',
		name: 'Feather',
		element: <FeatherIcons />,
	},
	{
		path: '/ui/maps/google',
		name: 'Google Maps',
		element: <GoogleMaps />,
	},
	{
		path: '/ui/maps/leaflet',
		name: 'Leaflet Maps',
		element: <LeafletMaps />,
	},
	{
		path: '/ui/maps/vector',
		name: 'Vector Maps',
		element: <VectorMaps />,
	},
	{
		path: '/ui/email-templates/basic',
		name: 'Basic Action Email',
		element: <BasicTemplates />,
	},
	{
		path: '/ui/email-templates/alert',
		name: 'Alert Email',
		element: <AlertTemplates />,
	},
	{
		path: '/ui/email-templates/billing',
		name: 'Billing Email',
		element: <BillingTemplates />,
	},
]

const pagesRoutes: RoutesProps[] = [
	{
		path: '/pages/profile',
		name: 'Profile',
		element: <ProfilePage />,
	},
	{
		path: '/pages/tour',
		name: 'Tour',
		element: <TourPage />,
	},
	{
		path: '/pages/timeline',
		name: 'Timeline',
		element: <TimelinePage />,
	},
	{
		path: '/pages/treeview',
		name: 'Treeview',
		element: <TreeviewPage />,
	},
	{
		path: '/pages/starter',
		name: 'Starter Page',
		element: <StarterPage />,
	},
	{
		path: '/pages/pricing',
		name: 'Pricing',
		element: <PricingPage />,
	},
	{
		path: '/pages/blogs',
		name: 'Blogs',
		element: <BlogPage />,
	},
	{
		path: '/pages/faqs',
		name: 'Faqs',
		element: <FAQsPage />,
	},
	{
		path: '/pages/gallery',
		name: 'Gallery',
		element: <GalleryPage />,
	},
]

const authRoutes: RoutesProps[] = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
	},
	{
		path: '/auth/register',
		name: 'Register',
		element: <Register />,
	},
	{
		path: '/auth/re-password',
		name: 'Re Password',
		element: <ResetPassword />,
	},
	{
		path: '/auth/lock-screen',
		name: 'Lock Screen',
		element: <LockScreen />,
	},
	{
		path: '/auth/login-alt',
		name: 'Login Alt',
		element: <LoginAlt />,
	},
	{
		path: '/auth/register-alt',
		name: 'Register Alt',
		element: <RegisterAlt />,
	},
	{
		path: '/auth/re-password-alt',
		name: 'Re Password Alt',
		element: <ResetPasswordAlt />,
	},
	{
		path: '/auth/lock-screen-alt',
		name: 'Lock Screen Alt',
		element: <LockScreenAlt />,
	},
]

const otherRoutes: RoutesProps[] = [
	{
		path: '/not-found',
		name: 'Page Not Found',
		element: <NotFound />,
	},
	{
		path: '/not-found-alt',
		name: 'Page Not Found Alt',
		element: <NotFoundAlt />,
	},
	{
		path: '/error-500',
		name: 'Error 500',
		element: <Error500 />,
	},
	{
		path: '/error-500-alt',
		name: 'Error 500 Alt',
		element: <Error500Alt />,
	},
	{
		path: '*',
		name: 'Page Not Found',
		element: <NotFound />,
	},
]

const allBlankRoutes = [...otherRoutes, ...authRoutes]

const allUiRoutes = [
	...uiRoutes,
	...advancedUiRoutes,
	...formsRoutes,
	...otherUiRoutes,
]

const allAdminRoutes = [
	...dashboardRoutes,
	...appsRoutes,
	...shipmentsRoutes,
	...allUiRoutes,
	...pagesRoutes,
]

export { allAdminRoutes, allBlankRoutes }
