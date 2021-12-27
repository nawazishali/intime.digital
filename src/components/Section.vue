<template>
  <div :class="{ 'bg-position-left': reverse, 'bg-dots-blue': divided }">
    <div
      class="container section"
      
    >
      <div v-if="!divided">
        <h1 class="mb-5">
          {{ heading }}
          <span class="blue">{{ highlight }}</span>
        </h1>
        <slot></slot>
      </div>
      <div
        v-else
        class="row align-items-center"
        :class="{ 'flex-row-reverse': reverse }"
      >
        <div class="col-lg-6 p-0 text-left">
          <h1 class="my-5">
            {{ heading }}
            <span class="blue">{{ highlight }}</span>
          </h1>
          <div><slot name="col1"></slot></div>
        </div>
        <div class="col-lg-6 p-0">
          <div><slot name="col2"></slot></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    heading: String,
    highlight: String,
    divided: Boolean,
    reverse: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  padding-top: 60px;
  padding-bottom: 60px;
}

.bg-dots-blue {
  background-image: url(https://www.intime.digital/static/landing/img/svg/dots.svg);
  background-repeat: no-repeat;
  background-position: right;
}

.bg-position-left {
  background-position: left;
}

@media only screen and (max-width: 960px) {
  /* For mobile phones: */
  .bg-dots-blue {
    background: none;
  }
}

h1 {
  font-weight: 600;
}
.blue {
  color: #007bff;
}
</style>
