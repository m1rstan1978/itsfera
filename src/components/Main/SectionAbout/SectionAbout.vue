<template>
  <div class="about">
    <div class="about__menu">
      <div class="about__content">
        <p class="about__title">
          УСТАНОВКА СИСТЕМ <br />ВИДЕОНАБЛЮДЕНИЯ<br />
          <span class="about__red">“ПОД КЛЮЧ”</span>
        </p>
        <div class="about__des">
          <ul class="about__group">
            <div class="about__circle"></div>
            <li>Бесплатный выезд инженера и демонстрация работы видеокамер</li>
          </ul>
          <ul class="about__group">
            <div class="about__circle about__circle_red"></div>
            <li>
              <span class="about__red"
                >Гарантия на работы и оборудование до 3 лет</span
              >
            </li>
          </ul>
          <ul class="about__group">
            <div class="about__circle"></div>
            <li>Оплата после приемки выполненных работ</li>
          </ul>
          <ul class="about__group">
            <div class="about__circle about__circle_red"></div>
            <li>
              <span class="about__red"
                >Проект системы видеонаблюдения в подарок</span
              >
            </li>
          </ul>
        </div>
        <div class="about__price">
          <button class="about__btn" @click="isModal = true">
            узнать цену
          </button>
        </div>
      </div>
    </div>
    <modal :isModal="isModal" @close="isModal = false"></modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal/Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      listLi: [
        "Бесплатный выезд инженера и демонстрация работы видеокамер",
        "Гарантия на работы и оборудование до 3 лет",
        "Оплата после приемки выполненных работ",
        "Проект системы видеонаблюдения в подарок",
      ],
      isModal: false,
    };
  },
  methods: {
    setActiveModal() {
      const isModal = false;
      return isModal;
    },
  },
};
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  background: url("@/assets/about/street_back.png");
  position: relative;
}
.about__menu {
  padding: 44px 25px 25px 500px;
  max-width: 700px;
  margin: 0 auto;
}
.about__title {
  font-weight: 800;
  font-size: 36px;
  margin-bottom: 15px;
  margin-left: 245px;
  color: #ffffff;
}

.about__red {
  color: #ec0f08;
}
.about__des {
  margin-bottom: 25px;
  margin: 0 0 25px auto;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  align-items: start;
  padding: 15px 20px 15px 20px;
  background: rgba(0, 0, 0, 0.7);
}

.about__group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__circle {
  width: 6px;
  height: 6px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #ffffff;
}

.about__circle_red {
  background-color: #ec0f08;
}
.about__des ul li {
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
  list-style: none;
}
.about__price {
  display: flex;
  justify-content: flex-end;
}
.about__btn {
  background: #ec0f08;
  border: 1px solid #ec0f08;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 67px;
  border-radius: 55px;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;
}
.about__btn:hover {
  transform: scale(0.98);
}
.about__image {
  position: absolute;
  bottom: 0;
  left: 6%;
}

@media (max-width: 1200px) {
  .about__menu {
    padding: 44px 25px 25px 25px;
  }

  .about__price {
    justify-content: center;
  }

  .about__des {
    margin: 0 auto 25px auto;
    display: inline-block;
  }

  .about__title {
    font-size: 32px;
    margin-left: 0px;
    text-align: center;
  }

  .about__circle {
    display: none;
  }

  .about__des ul li {
    text-align: center;
  }
}

@media (max-width: 500px) {
  .about__title {
    font-size: 28px;
  }

  .about__des ul li {
    font-size: 16px;
  }
}
</style>
