<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__image">
        <img src="@/assets/logo.png" />
      </div>
      <p class="footer__text">
        Адрес: Город, улица,<br />
        дом, офис
      </p>
      <div class="footer__number">
        <p class="footer__call">8 (000) 000-00-00</p>
        <p class="footer__mail">mail@mail.ru</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 0 20px;
}
.footer__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__text {
  font-weight: 400;
  font-size: 16px;
  color: #ec0f08;
}
.footer__call {
  font-weight: 700;
  font-size: 32px;
  color: #ec0f08;
}
.footer__mail {
  font-weight: 400;
  font-size: 16px;
  color: #ec0f08;
}

@media (max-width: 900px) {
  .footer {
    padding: 10px 20px 0 20px;
  }
  .footer__call {
    font-size: 28px;
  }
}

@media (max-width: 650px) {
  .footer__text {
    display: none;
  }
}

@media (max-width: 450px) {
  .footer__call {
    font-size: 24px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .footer__image {
    width: 101px;
    height: 70px;
  }
}
</style>
