<template>
  <div class="header__up">
    <div class="header__up_content">
      <div class="header__up_logo" @click="$router.push('/')">
        <img src="@/assets/logo.png" />
      </div>
      <div class="header__up_li">
        <ul>
          <li v-for="list in listArray" :key="list.id">
            <span>{{ list }}</span>
          </li>
        </ul>
      </div>
      <div class="header__up_text">
        <p class="header__up_number">8 (000) 000-00-00</p>
        <p class="header__up_mail">mail@mail.ru</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listArray: [
        "Монтаж систем видеонаблюдения",
        "Обслуживание систем видеонаблюдения",
        "Продажа систем видеонаблюдения",
      ],
    };
  },
};
</script>

<style scoped>
.header__up {
  padding: 24px 20px;
  max-width: 1200px;
  margin: auto;
}
.header__up_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__up_li li {
  color: red;
  font-size: 18px;
}
.header__up_li span {
  color: #000000;
}
.header__up_number {
  font-weight: 700;
  font-size: 32px;
  color: #ec0f08;
}
.header__up_mail {
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
.header__up_logo {
  cursor: pointer;
}

@media (max-width: 900px) {
  .header__up_number {
    font-size: 28px;
  }

  .header__up_li li {
    font-size: 16px;
  }
}

@media (max-width: 789px) {
  .header__up_li {
    display: none;
  }
}

@media (max-width: 450px) {
  .header__up_logo img {
    width: 100%;
    height: 100%;
  }
  .header__up_logo {
    width: 101px;
    height: 70px;
  }
  .header__up_number {
    font-size: 24px;
  }
}

@media (max-width: 365px) {
  .header__up_number {
    font-size: 20px;
  }
}
</style>
