import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import Notfound from './pages/Notfound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // You could also use alias, but be aware that then the url doesn't change (what is the case in redirects)
    { path: "/", redirect: "/teams" },
    {
      path: "/teams",
      components: {
        // accessible per name attribute in router-view
        default: TeamsList, footer: TeamsFooter,
      },
      // children routes are handled by the parent component (i.e. TeamsList)
      // If there no <router-view> is added, loading the uri does not work (uri changes, but not the content)
      children: [{
        // Auto inject parameter as props

        name: "team-members", path: ":teamId", component: TeamMembers, props: true
      }]
    },
    {
      path: "/users", 
      meta: {needsAuth: true},
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(from, to, next) {
        console.log("before enter users");
        next();
        // reject navigation
        // next(false);
        
      }
    },
    // Auto inject parameter as props
    { name: "not-found", path: "/:notFound(.*)", component: Notfound }
  ],
  // Overwrite class
  linkActiveClass: 'active',
  scrollBehavior(to, from, scrollPosition) {
    if (scrollPosition) {
      return scrollPosition;
    }
    // Move to top if uri changed
    return {
      left: 0,
      top: 0
    }
  }
});

// Will be called before each navigation
router.beforeEach(function (to, from, next) {
  console.log("Global beforeEach");
  if (to.meta.needsAuth) {
    // Can be used to implement authentication logic:
    // alert("User not authenticated!");
    // next(false);
    next();
  } else {
    next();
  }
  // if (to.name !== 'team-members') {
  //   next({
  //     name: 'team-members', params: { teamId: 't2' }
  //   });
  // } else {
  //   next();
  // }
});

router.afterEach(function(to, from) {
  // sending analytics data
  console.log(to, from);
  console.log("Global after each");
})

export default router;