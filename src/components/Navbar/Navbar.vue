<template>
  <header>
    <HeaderUp></HeaderUp>
    <HeaderLi class="display"></HeaderLi>
  </header>
</template>

<script>
import HeaderUp from "@/components/Navbar/HeaderUp.vue";
import HeaderLi from "@/components/Navbar/HeaderLi.vue";

export default {
  components: { HeaderUp, HeaderLi },
};
</script>

<style scoped></style>
