import SelectionPanel from './components/SelectionPanel.vue';
import InformationBlock from './components/InformationBlock.vue';

const GoogleForm = () => import(/* webpackChunkName: "form" */'./components/oauth-forms/Google.vue');
const FirebaseForm = () => import(/* webpackChunkName: "form" */'./components/oauth-forms/Firebase.vue');
const FacebookForm = () => import(/* webpackChunkName: "form" */'./components/oauth-forms/Facebook.vue');
const LinkedInForm = () => import(/* webpackChunkName: "form" */'./components/oauth-forms/LinkedIn.vue');
const PaypalForm = () => import(/* webpackChunkName: "form" */'./components/oauth-forms/Paypal.vue');

const routes = [
  {
    path: '/google',
    components: {
      default: SelectionPanel,
      'route-form': GoogleForm,
      'route-information-block': InformationBlock,
    },
    // PAY ATTENTION ON HOW I PASS THE PROS:
    // Pass props to named router-view. 'route-information-block' is a name of router-view, take a
    // look in App.vue. To pass it to router-view without name - use 'default' name like with
    // slots. property declared in InformationBlock (component names).
    props: { 'route-information-block': { selectedInformationComponent: 'googleInformation' } },
  },
  {
    path: '/firebase',
    components: {
      default: SelectionPanel,
      'route-form': FirebaseForm,
      'route-information-block': InformationBlock,
    },
    props: { 'route-information-block': { selectedInformationComponent: 'firebaseInformation' } },
  },
  {
    path: '/facebook',
    components: {
      default: SelectionPanel,
      'route-form': FacebookForm,
      'route-information-block': InformationBlock,
    },
    props: { 'route-information-block': { selectedInformationComponent: 'facebookInformation' } },
  },
  {
    path: '/linkedin',
    components: {
      default: SelectionPanel,
      'route-form': LinkedInForm,
      'route-information-block': InformationBlock,
    },
    props: { 'route-information-block': { selectedInformationComponent: 'linkedinInformation' } },
  },
  {
    path: '/paypal',
    components: {
      default: SelectionPanel,
      'route-form': PaypalForm,
      'route-information-block': InformationBlock,
    },
    props: { 'route-information-block': { selectedInformationComponent: 'paypalInformation' } },
  },
  { path: '*', redirect: '/google' },
];

export default routes;
