<template>
  <Navbar></Navbar>
  <SectionAbout></SectionAbout>
  <SectionPlan></SectionPlan>
  <section-services></section-services>
  <section-map></section-map>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import SectionAbout from "@/components/Main/SectionAbout/SectionAbout.vue";
import SectionPlan from "@/components/Main/SectionPlan/SectionPlan.vue";
import SectionServices from "@/components/Main/SectionServices/SectionServices.vue";
import SectionMap from "@/components/Main/SectionMap/SectionMap.vue";

export default {
  components: {
    Navbar,
    SectionAbout,
    SectionPlan,
    SectionServices,
    SectionMap,
    Footer,
  },
};
</script>

<style scoped></style>
