<template>
<div>
<h1 class="heading">{{ heading }}</h1>
<main class="container">
  <svg v-if="loading" width="120" height="30" xmlns="http://www.w3.org/2000/svg" fill="#22313f;"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>
  <router-link
    v-for="(item, index) in blogs"
    :key="index" :to="'/blog/' + item._id + '/' + item.title" v-else>
  <div class="card">
      <div class="overlay"></div>
      <div class="background">
        <img :src="item.image">
      </div>
      <div class="logo">
        <h2>{{ brandName }}</h2>
      </div>
      <div class="intro">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </router-link>
  </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      loading: true,
      blogs: null,
      brandName: 'DeveLabs',
      heading: 'DeveLabs Blogs',
    };
  },
  methods: {
    Fetch() {
      axios
        .get('https://develabs.herokuapp.com/api/public/blogs')
        .then((res) => {
          this.loading = false;
          this.blogs = res.data.getBlogs;
        })
        .catch((err) => {
          this.loading = true;
          console.log(err);
        });
    },
  },
  mounted() {
    this.Fetch();
  },
};
</script>

<style>
.heading {
  text-align: center;
}
.container {
  place-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 5rem;
}

.card {
  position: relative;
  box-shadow: 0 0 18px #ccc;
}

.card .background img {
  max-height: 476px;
  max-width: 476px;
}

.card .logo {
  position: absolute;
  top: 0;
  padding: 20px;
  left: 0;
  z-index: 99;
  color: white;
}

.card .logo img {
  max-height: 7rem;
  max-width: 7rem;
}

.card .intro {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 25px;
  font-size: 1.5rem;
  z-index: 99;
}

.card .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent linear-gradient(
0deg
,#05051e,rgba(88,88,104,0)) 0 0 no-repeat padding-box;
    z-index: 2;
}

@media (max-width: 991px) {
  .container {
      grid-template-columns: repeat(1, 1fr);
  }
  .card .background img {
  /* max-width: 600px; */
}
}

</style>
