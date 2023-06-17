<template>
  <div class="plan">
    <h1 class="plan__title">схема работы</h1>
    <div class="plan__content">
      <CardPlan
        v-for="list in arrayPlan"
        :key="list.id"
        :class="list.classGrid"
        :list="list"
      ></CardPlan>
    </div>
  </div>
</template>

<script>
import CardPlan from "@/components/Main/SectionPlan/Card/CardPlan.vue";

export default {
  data() {
    return {
      arrayPlan: [
        {
          id: 1,
          title: "Сбор информации об объекте",
          classGrid: "info",
          desArray: [
            {
              text: "Консультация по телефону с нашим специалистом",
            },
            {
              text: "Демонстрация работы видеокамер на вашем объекте",
            },
          ],
          imageSrc: "./plan/1.svg",
        },
        {
          id: 2,
          title: "Заключение договора",
          classGrid: "contract",
          desArray: [
            {
              text: "Разработка рабочего проекта",
            },
            {
              text: "Составление и согласование сметы",
            },
            {
              text: "Подписание договора",
            },
          ],
          imageSrc: "./plan/2.svg",
        },
        {
          id: 3,
          title: "Монтажные работы",
          classGrid: "work",
          desArray: [
            {
              text: "Выполнение монтажных работ",
            },
            {
              text: "Приемка работ главным инженером",
            },
          ],
          imageSrc: "./plan/3.svg",
        },
        {
          id: 4,
          title: "Заключительный этап",
          classGrid: "final",
          desArray: [
            {
              text: "Обучение Ваших сотрудников",
            },
            {
              text: "Оплата нашей работы",
            },
          ],
          imageSrc: "./plan/4.svg",
        },
      ],
    };
  },
  components: { CardPlan },
};
</script>

<style scoped>
.plan {
  padding: 48px 20px 83px 40px;
  max-width: 1168px;
  margin: 0 auto;
}
.plan__title {
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 48px;
  color: #000000;
}
.plan__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 220px;
  justify-content: space-between;
}

@media (max-width: 1200px) {
  .info {
    grid-area: info;
  }
  .contract {
    grid-area: contract;
  }
  .work {
    grid-area: work;
  }
  .final {
    grid-area: final;
  }
  .plan__content {
    grid-template-columns: 1fr minmax(200px, 240px);
    grid-template-areas:
      "info contract"
      "final work";
    row-gap: 40px;
  }

  .plan {
    padding: 48px 20px 50px 40px;
    max-width: 600px;
  }

  .plan__arrow {
    transform: rotate(45deg); /* Угол поворота в градусах */
  }
}

@media (max-width: 680px) {
  .plan {
    padding: 48px 20px 30px 30px;
    max-width: 240px;
  }
  .plan__content {
    grid-template-columns: 1fr;
    grid-template-areas:
      "info"
      "contract"
      "work"
      "final";
    row-gap: 30px;
  }
}
</style>
