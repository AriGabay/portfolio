<template>
  <div class="right-side">
    <div v-if="this.status === 'about me'">
      <aboutMe />
    </div>
    <div v-if="this.status === 'projects'">
      <projects />
    </div>
    <div v-if="this.status === 'contact'">
      <contact />
    </div>
  </div>
</template>

<script>
import EventBus from '../service/eventBus';
import aboutMe from '../components/AboutMe.vue';
import projects from '../components/Projects.vue';
import contact from '../components/Contact.vue';
export default {
  name: '',
  data() {
    return {
      status: ''
    };
  },
  methods: {},
  computed: {},
  components: {
    aboutMe,
    projects,
    contact
  },
  created() {
    EventBus.$on('RENDER_RIGHT_SIDE', (payLoad) => {
      this.status = payLoad;
      console.log('this.status:', this.status);
    });
  }
};
</script>
