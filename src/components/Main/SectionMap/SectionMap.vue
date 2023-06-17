<template>
  <div class="map">
    <iframe
      class="map__card"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A3070bed1d8bbd28af5c306765a4de044f66943f734712e44169cb90792254052&amp;source=constructor"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.map__card {
  width: 100%;
  height: 400px;
}

@media (max-width: 1000px) {
  .map__card {
    height: 300px;
  }
}
</style>
