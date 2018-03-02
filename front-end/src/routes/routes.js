import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Store from 'src/components/Dashboard/Views/Store.vue'
import Login from 'src/components/Dashboard/Views/Login.vue'
import Anany from 'src/components/Dashboard/Views/Individual/Anany.vue'
import Create from 'src/components/Dashboard/Views/Individual/Create.vue'
import Delete from 'src/components/Dashboard/Views/Individual/Delete.vue'
import Update from 'src/components/Dashboard/Views/Individual/Update.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      },
      {
        path: 'Anany',
        name: 'Anany',
        component: Anany
      },
      {
        path: 'Store',
        name: 'Store',
        component: Store
      },
      {
        path: 'Create',
        name: 'Create',
        component: Create
      },
      {
        path: 'Delete',
        name: 'Delete',
        component: Delete
      },
      {
        path: 'Update',
        name: 'Update',
        component: Update
      },
      {
        path: 'Login',
        name: 'Login',
        component: Login
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
