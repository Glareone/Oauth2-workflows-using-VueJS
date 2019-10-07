<template>

  <div class="info-block">
    <h3>Information Block:</h3>
    <!--
    use dynamic component.
    https://github.com/Glareone/VueJS-2-Portfolio/blob/master/lectures/lecture-block-9%20Slots%2C%20Dynamic%20Components%2C%20keep-alive%20%2B%20lifecycle%20hooks/src/App.vue
     -->
    <transition name="fade" mode="out-in">
      <component :is="selectedInformationComponent" />
    </transition>
  </div>

</template>

<script>
import FacebookOAuthInformation from './information-blocks/FacebookOAuthInformation.vue';
import FirebaseOAuthInformation from './information-blocks/FirebaseOAuthInformation.vue';
import GoogleOAuthInformation from './information-blocks/GoogleOAuthInformation.vue';
import LinkedInOAuthInformation from './information-blocks/LinkedInOAuthInformation.vue';
import PaypalOAuthInformation from './information-blocks/PaypalOAuthInformation.vue';

export default {
  name: 'InformationBlock',
  components: {
    facebookInformation: FacebookOAuthInformation,
    firebaseInformation: FirebaseOAuthInformation,
    googleInformation: GoogleOAuthInformation,
    linkedinInformation: LinkedInOAuthInformation,
    paypalInformation: PaypalOAuthInformation,
  },
  props: {
    selectedInformationComponent: String,
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  grid-column: 3 / 4;
  grid-row: select-panel-start / -1;

  padding: 1rem;
  border-radius: var(--block-radius);
  background-color: var(--secondary-color);
  -webkit-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
  -moz-box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
  box-shadow: 6px 6px 10px 0 var(--box-shadow-color);
}
</style>
