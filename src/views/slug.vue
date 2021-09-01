<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: 'Blog',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      blogs: null,
    };
  },
  computed: {
    article() {
      return console.log(this.$route.params.id);
      // eslint-disable-next-line radix
      // return this.$store.getters.theme(parseInt(this.$route.params.id));
    },
  },
};
</script>
