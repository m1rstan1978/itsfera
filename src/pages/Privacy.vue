<template>
  <div class="privacy">
    <h1 class="privacy__title">Согласие на обработку персональных данных</h1>
    <div class="privacy__block">
    <p class="privacy__des" 
    v-for="list in textArray"
    :key="list.id"
    >
        {{ list }}
    </p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            textArray:[
            '1. Данное Соглашение даётся на обработку персональных данных, как без использования средств автоматизации, так и с их использованием.',
            `2. Согласие даётся на обработку следующих моих персональных данных: Персональные данные, не являющиеся специальными или биометрическими: 
            номера контактных телефонов; адреса электронной почты; место работы и занимаемая должность; пользовательские данные (сведения о местоположении; тип и версия ОС; тип и версия Браузера; тип устройства и разрешение его экрана; источник откуда пришёл на сайт пользователь; с какого сайта или по какой рекламе; язык ОС и Браузера; какие страницы открывает
             и на какие кнопки нажимает пользователь; ip-адрес.)`,
             `3. Персональные данные являются общедоступными.`,
             `4. Цель обработки персональных данных: обработка входящих запросов физических лиц с целью оказания консультирования; аналитики действий 
             физического лица на веб-сайте и функционирования веб-сайта; 
             проведение рекламных и новостных рассылок;`,
             `5. Основанием для обработки персональных данных является: ст. 24 Конституции Российской Федерации; ст. 6 Федерального закона №152-ФЗ 
             "О персональных данных"; настоящее согласие на обработку персональных данных.`,
             `6. В ходе обработки с персональными данными будут совершены следующие действия: сбор; запись; систематизация; накопление; хранение; уточнение 
             (обновление, изменение); извлечение; использование; передача (распространение, предоставление, доступ);
              блокирование; удаление; уничтожение.`,
              `7. Персональные данные обрабатываются до отписки физического лица от рекламных и новостных рассылок. Также обработка персональных данных может 
              быть прекращена по запросу субъекта персональных данных. Хранение персональных данных, зафиксированных на бумажных носителях осуществляе
              тся согласно Федеральному закону №125-ФЗ "
              Об архивном деле в Российской Федерации" и иным нормативно правовым актам в области архивного дела и архивного хранения.`,
              `8. Согласие может быть отозвано субъектом персональных данных или его представителем путём направления письменного заявления администрации сайта или его представителю по адресу электронной почты wwwww@mail.ru`,
              `9. В случае отзыва субъектом персональных данных или его представителем согласия на обработку персональных данных администрации сайта вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в пунктах 2-11 части 1 статьи 6, 
              части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ "О персональных данных" от 27.07.2006 г.`,
              `10.Настоящее согласие действует всё время до момента прекращения обработки персональных данных, указанных в п. 7 и п. 8 данного Согласия.`
            ]
        }
    }
}
</script>

<style scoped>
.privacy__title {
    margin: 60px 0;
    text-align: center;
}
.privacy__block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.privacy__des {
    max-width: 700px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    text-align: start;
}
</style>