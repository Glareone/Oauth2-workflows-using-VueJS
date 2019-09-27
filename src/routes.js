import SelectionPanel from './components/SelectionPanel.vue';

const GoogleForm = () => import(/* webpackChunkName: "user" */'./components/oauth-form-components/Google.vue');
const FirebaseForm = () => import(/* webpackChunkName: "user" */'./components/oauth-form-components/Firebase.vue');
const FacebookForm = () => import(/* webpackChunkName: "user" */'./components/oauth-form-components/Facebook.vue');
const LinkedInForm = () => import(/* webpackChunkName: "user" */'./components/oauth-form-components/LinkedIn.vue');
const PaypalForm = () => import(/* webpackChunkName: "user" */'./components/oauth-form-components/Paypal.vue');

export const routes = [
  {
    path: '/google',
    components: {
      default: SelectionPanel,
      'route-form': GoogleForm,
    },
  },
  {
    path: '/firebase',
    components: {
      default: SelectionPanel,
      'route-form': FirebaseForm,
    },
  },
  {
    path: '/facebook',
    components: {
      default: SelectionPanel,
      'route-form': FacebookForm,
    },
  },
  {
    path: '/linkedin',
    components: {
      default: SelectionPanel,
      'route-form': LinkedInForm,
    },
  },
  {
    path: '/paypal',
    components: {
      default: SelectionPanel,
      'route-form': PaypalForm,
    },
  },
  { path: '*', redirect: '/google' },
];

export default routes;
