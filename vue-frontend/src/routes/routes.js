import StoreLayout from '../components/Store/Layout/StoreLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Store/Views/Overview.vue'
import UserProfile from 'src/components/Store/Views/UserProfile.vue'
import Notifications from 'src/components/Store/Views/Notifications.vue'
import Icons from 'src/components/Store/Views/Icons.vue'
import Maps from 'src/components/Store/Views/Maps.vue'
import Typography from 'src/components/Store/Views/Typography.vue'
import TableList from 'src/components/Store/Views/TableList.vue'

const routes = [
  {
    path: '/',
    component: StoreLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: StoreLayout,
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
