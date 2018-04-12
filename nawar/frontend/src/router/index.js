import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Profile from '@/components/Profile.vue'
import Activities from '@/components/Activities.vue'
import Courses from '@/components/Courses.vue'
import Articles from '@/components/Articles.vue'
import Schedules from '@/components/Schedules.vue'
import TeacherSchedule from '@/components/TeacherSchedule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/Schedules',
      name: 'Schedules',
      component: Schedules
    },
    {
      path: '/TeacherSchedule',
      name: 'TeacherSchedule',
      component: TeacherSchedule
    }
  ]
})
