<template>
  <div>
    <div class="container section">
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            src="https://www.intime.digital/static/landing/img/svg/logo.svg"
            class="d-inline-block align-top"
            width="154"
            height="104"
            alt="Brand Logo"
          />
          <h4>InTime BioTech LLC. DBA Longevity InTime</h4>
          <p>
            300 Delaware Avenue, Suite 210-A, Wilmington, Delaware, 19801, USA
          </p>
        </div>
        <div class="col-md-4 text-center d-flex flex-column justify-content-center">
            <a href="#!" class="d-block text-primary">Petitions</a>
            <a href="#!" class="d-block text-primary">Awards</a>
            <a href="#!" class="d-block text-primary">Testimonials</a>
            <a href="#!" class="d-block text-primary">InTime BioTech</a>
            <a href="#!" class="d-block text-primary">Mobile App</a>
            <a href="#!" class="d-block text-primary">Mission</a>
            <a href="#!" class="d-block text-primary">Video</a>
        </div>
        <div class="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
          <img
            class="mb-3 mt-3 d-block"
            src="https://www.intime.digital/static/landing/img/svg/google.svg"
            alt="Google Play Store Logo"
            width="200"
          />
          <img
            class="mb-3 mt-3 d-block"
            src="https://www.intime.digital/static/landing/img/svg/apple.svg"
            alt="Apple store logo"
            width="200"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
