<template>
  <div class="plan__card">
    <div class="plan__card_header">
      <div class="plan__card_image">
        <img :src="list.imageSrc" />
      </div>
      <div class="plan__card_arrows">
        <img
          class="plan__arrow"
          v-if="list.id < 4"
          src="@/assets/plan/arrows.svg"
        />
      </div>
    </div>
    <div class="plan__card_content">
      <p class="plan__card_title">{{ list.title }}</p>
    </div>
    <div class="plan__card_list" v-for="item in list.desArray" :key="item.id">
      <div class="plan__card_arrow">
        <img src="@/assets/plan/arrow.svg" />
      </div>
      <p class="plan__card_text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
    },
  },
  mounted() {},
};
</script>

<style scoped>
.plan__card {
  width: 254px;
}
.plan__card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.plan__card_arrows {
  display: flex;
  align-items: center;
  margin-right: 45px;
}
.plan__card_title {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
  color: #ec0f08;
}
.plan__card_list {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}
.plan__card_text {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
  color: #000000;
}

@media (max-width: 1200px) {
  .contract > div:nth-child(1) > div:nth-child(2) > img {
    transform: rotate(90deg); /* Угол поворота в градусах */
  }

  .work > div:nth-child(1) > div:nth-child(2) > img {
    transform: rotate(180deg); /* Угол поворота в градусах */
  }
}

@media (max-width: 680px) {
  .info > div:nth-child(1) > div:nth-child(2) > img {
    transform: rotate(90deg); /* Угол поворота в градусах */
  }

  .work > div:nth-child(1) > div:nth-child(2) > img {
    transform: rotate(90deg); /* Угол поворота в градусах */
  }
}
</style>
