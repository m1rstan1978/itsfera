<template>
  <div class="services">
    <h1 class="services__title">наши услуги</h1>
    <div class="services__content">
      <div class="services__left">
        <div
          class="services__card"
          v-for="(list, idx) in listLeft"
          :key="list.id"
        >
          <img :class="{ activeImage: idx >= 0 }" :src="list.imageSrc" />
          <p class="services__name">{{ list.title }}</p>
          <p class="services__des">{{ list.des }}</p>
        </div>
      </div>
      <div class="services__right">
        <div
          class="services__card"
          v-for="(list, idx) in listRight"
          :key="list.id"
        >
          <p class="services__name">{{ list.title }}</p>
          <p class="services__des" :class="{ activeDes: idx >= 0 }">
            {{ list.des }}
          </p>
          <img :src="list.imageSrc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLeft: [
        {
          title: "Монтаж систем видеонаблюдения",
          des: `Монтаж систем видеонаблюдения любого уровня сложности,от одной видеокамеры до нескольких сотен.
                    Возможен просмотр видео удаленно через интернет,используя смартфон`,
          imageSrc: "./services/1.png",
        },
        {
          title: "Cистемы учета времени",
          des: `Проектирование и монтаж систем контроля за работой персонала и учета рабочего времени сотрудников`,
          imageSrc: "./services/2.png",
        },
        {
          title: "Cистемы контроля доступа",
          des: `Монтаж и обслуживание систем контроля и управления доступом. Установка домофонов. Создание интегрированных комплексов «Умный дом»`,
          imageSrc: "./services/3.png",
        },
      ],
      listRight: [
        {
          title: "Системы видеонаблюдения за авто",
          des: `Монтаж и обслуживание систем видеонаблюдения за въездом/выездом автомобилей с 
                    распознаванием номерных знаков и автоматическим открыванием ворот или шлагбаума`,
          imageSrc: "./services/4.png",
        },
        {
          title: "Монтаж систем видеонаблюдения",
          des: `Проектирование и монтаж систем охранной сигнализации, систем пожарной сигнализации, 
                    а так же систем оповещения и управления эвакуацией людей при пожаре`,
          imageSrc: "./services/5.png",
        },
        {
          title: "Модернизация старых систем",
          des: `Модернизация старых систем видеонаблюдения и интеграция их в общую структуру комплекса безопасности`,
          imageSrc: "./services/6.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  max-width: 1050px;
  padding: 0 20px 80px 20px;
  margin: 0 auto;
}
.services__title {
  font-weight: 800;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0px;
  color: #000000;
}
.services__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.services__left {
  margin-right: 140px;
}
.services__right {
  margin-top: 56px;
}
.services__card {
  margin-bottom: 30px;
}
.services__name {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
  color: #ec0f08;
}
.services__des {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  max-width: 440px;
  color: #000000;
}
.activeDes {
  margin-bottom: 15px;
}
.activeImage {
  margin-bottom: 15px;
}

@media (max-width: 1200px) {
  .services__right {
    margin-top: 40px;
  }
  .services {
    padding: 0 20px 50px 20px;
  }

  .services__left {
    margin-right: 40px;
  }
}

@media (max-width: 1000px) {
  .services {
    max-width: 1050px;
    padding: 0 20px 0px 20px;
    margin: 0 auto;
  }
  .services__left {
    margin-right: 0px;
  }

  .services__content {
    flex-direction: column-reverse;

    margin-top: 30px;
  }

  .services__card {
    margin-bottom: 50px;
  }

  .services__right {
    margin-top: 0px;
  }
}

@media (max-width: 500px) {
  .services__name {
    text-align: center;
  }
  img {
    width: 100%;
  }
}
</style>
