<template>
  <div>
    <main class="projectdesc">
      <div class="go-back">
        <router-link to="/">Go back to overview</router-link>
      </div>
      <div>
        <h3>{{ blogs.title }}</h3>
        <img
          :src="blogs.image"
          :alt="blogs.title"
          class="swiper-lazy"
        />
        <article>
          <p>{{ blogs.content }}</p>
        </article>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

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
  mounted() {
    axios
      .get(`https://develabs.herokuapp.com/api/blogs/${this.$route.params.id}`)
      .then((res) => {
        this.blogs = res.data.blog;
        console.log(this.blogs.blog);
      });
  },
};
</script>

<style>
main {
  min-height: calc(90vh - 1rem);
  padding-top: 3rem;
  max-width: 100rem;
  margin: 0 auto;
  overflow-x: hidden;
}
 .projectdesc article {
  padding-top: 4rem;
  margin: 0 auto;
  max-width: 100rem;
}
 .projectdesc h3 {
  text-align: center;
  padding-top: 4rem;
  margin: 0 auto;
  max-width: 100rem;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
 .projectdesc div img:nth-child(2) {
  display: block;
  height: auto;
  width: calc(100% + 3rem);
  max-width: calc(100% + 3rem);
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}
 .projectdesc a {
  text-decoration: none;
}
 .projectlinks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
 .projectlinks a {
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  border: 1px solid rgba(0, 0, 0, .12);
  padding: 0.6rem 0.8rem;
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  transition: all 0.1s ease-out;
  max-width: 15rem;
  min-width: 10rem;
}
 .projectlinks a::before {
  width: 100%;
  height: 100%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0%;
  left: 0%;
  background: #e83315;
  transition: all 0.5s;
  z-index: -1;
}
 .projectlinks a::after {
  width: 100%;
  height: 100%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0%;
  left: 0%;
  background: #e83315;
  transition: all 0.5s;
  z-index: -1;
}
 .projectlinks a:hover {
  color: black;
}
 .projectlinks a:hover:before {
  transform: rotateX(90deg);
}
 .projectlinks a:hover:after {
  transform: rotateY(90deg);
}
 .go-back {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #1a1f2b;
  z-index: 999;
}
 .go-back img {
  transform: rotate(180deg);
  height: 1rem;
  margin-left: 20px;
}
 .go-back a {
  margin-left: 20px;
  z-index: 999;
  text-decoration: none;
  color: black;
  z-index: 999;
}
 .tags {
  height: 100px;
  width: auto;
  opacity: 1;
  list-style: none;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px 20px;
  color: white;
  flex-wrap: wrap;
}
 .tags li {
  border-radius: 5px;
  padding: 15px 30px;
  background-color: #e83315;
  margin: 5px;
}
 @media screen and (min-width: 600px) {
  .projectdesc a {
   /* width: 30%; */
 }
  .projectdesc div img:nth-child(2) {
   width: 50%;
   max-width: calc(100% + 12rem);
   margin-left: auto;
   margin-right: auto;
 }
}
</style>
