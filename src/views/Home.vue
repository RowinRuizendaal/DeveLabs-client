<template>
<main class="container">
  <router-link v-for="(item, index) in blogs" :key="index" :to="'/blog/' + item._id" >
  <div class="card">
      <div class="overlay"></div>
      <div class="background">
        <img :src="item.image">
      </div>
      <div class="logo">
        <h2>{{ brandName }}</h2>
      </div>
      <div class="intro">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </router-link>
  </main>
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
      blogs: null,
      brandName: 'DeveLabs',
      image: 'https://source.unsplash.com/random/376x43',
    };
  },
  methods: {
    Fetch() {
      axios
        .get('https://develabs.herokuapp.com/api/public/blogs')
        .then((res) => {
          this.blogs = res.data.getBlogs;
        })
        .catch((err) => {
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
  max-height: 439px;
  max-width: 376px;
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
}

</style>
