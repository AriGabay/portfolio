<template>
  <div id="app">
    <left-side />
    <right-side />
  </div>
</template>

<script>
import LeftSide from './views/LeftSide';
import RightSide from './views/RightSide';
export default {
  name: 'App',
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    LeftSide,
    RightSide,
  },
  created() {},
};
</script>
