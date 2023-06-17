<template>
  <div class="header__li">
    <div class="header__li_content">
      <ul>
        <li class="header__up_menu">Меню</li>
        <li><a href="#">Схемы работ</a></li>
        <li><a href="#">Наши услуги</a></li>
        <li><a href="#">О компании</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.header__li {
  padding: 17px 0;
  background: #d9e9ec;
}

.header__up_menu {
  display: none;
}
.header__li_content ul {
  max-width: 900px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__li_content ul li {
  list-style-type: none;
}
.header__li_content a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}

@media (max-width: 600px) {
  .header__li_content a {
    font-size: 14px;
  }
}

@media (max-width: 500px) {
  .header__li_content a {
    text-transform: none;
    font-size: 16px;
  }

  .header__li {
    max-width: 600px;
    margin: 0 20px;
  }
}
</style>
