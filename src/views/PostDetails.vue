<template>
  <div class="container">
    <div v-if="blog" class="row d-flex justify-content-center">
      <div class="card-item text-dark border shadow-5-strong mt-5 card">
        <img :src="blog.img" class="" alt="..." />

        <div class="text-center">
          <p class="h5 names text-center">{{ blog.title }}</p>
          <b class="category">{{ blog.category }}</b>
          <div class="">
            <p class="text-center mt-3">{{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="my-5">Loading post...</p>
      <div class="orbit-spinner">
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: null,
      title: "",
      category: "",
      description: "",
      img: "",
    };
  },
};
</script>

<style></style>
