<template>
  <section class="banner-section">
    <header class="text-banner">
      <h3>GAMING</h3>
    </header>
  </section>
  <!-- <div class="container">
    <div v-if="blogs.length" class="row my-5 border shadow-5-strong py-5">
      <div
        v-for="blog in blogs"
        :key="blog._id"
        class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
      >
        <router-link
          :to="{
            name: 'PostDetails',
            params: {
              id: blog._id,
            },
          }"
        >
          <h2 class="card text-white animate__animated animate__zoomIn">
            <img :src="blog.img" class="" alt="..." />
            {{ blog.title }}
            <br />
            {{ blog.category }}
            <br />
          </h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p class="my-5">Loading blogs...</p>
      <div class="orbit-spinner">
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      title: "",
      category: "",
      description: "",
      img: "",
    };
  },
};
</script>
<style scoped>
.banner-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin: 0;
  padding: 0;
  background-image: url("https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.text-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  background: rgba(0, 0, 0, 10%);
}

.text-banner h3 {
  font-size: 60px;
  font-weight: 700;
  color: white;
}

.orbit-spinner,
.orbit-spinner * {
  box-sizing: border-box;
}

.orbit-spinner {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;
}

.orbit-spinner .orbit {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.orbit-spinner .orbit:nth-child(1) {
  left: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
  border-bottom: 3px solid #000000;
}

.orbit-spinner .orbit:nth-child(2) {
  right: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
  border-right: 3px solid #000000;
}

.orbit-spinner .orbit:nth-child(3) {
  right: 0%;
  bottom: 0%;
  animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
  border-top: 3px solid #000000;
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
