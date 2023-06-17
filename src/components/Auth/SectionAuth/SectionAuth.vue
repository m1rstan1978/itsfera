<template>
  <div class="auth">
    <h1 class="auth__title">Вход</h1>
    <form @submit.prevent="getSignIn">
        <div class="auth__window">
        <div class="auth__block">
            <p class="auth__text">Почта</p>
            <input class="auth__input" type="email" placeholder="Введите вашу почту" v-model="email">
        </div>
        <div class="auth__block">
            <p class="auth__text">Пароль</p>
            <input class="auth__input" type="password" placeholder="Введите ваш пароль" v-model="pass">
        </div>
        <button class="auth__btn" type="submit">Войти</button>
    </div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

export default {
    data() {
        return {
            email:'',
            pass:'',
        }
    },
    methods:{
        getSignIn() {
            const auth = getAuth()
            signInWithEmailAndPassword(auth,this.email,this.pass).then(res => location.reload()).catch(e => alert('Данные введены неверно'))
        }
    }
}
</script>

<style scoped>
.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.auth__title{
    margin-top: 80px;
    margin-bottom: 20px;
}
.auth__window {
    width: 400px;
    box-shadow: 4px 4px 20px 10px rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 40px 40px 40px 40px;
}
.auth__block {
    margin-bottom: 30px;
}
.auth__text {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
    color: #000000;
}
.auth__input {
    background: #F3F4F6;
    border-radius: 8px;
    width: 100%;
    border:none;
    padding: 15px 25px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 15px;
    outline: none;
    color: #000000;
}
.auth__btn {
    background: #4F46E5;
    box-shadow: 0px 30px 60px rgba(79, 70, 229, 0.15);
    border-radius: 6px;
    border:none;
    font-weight: 600;
    font-size: 16px;
    padding: 15px 0;
    width: 100%;
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
}
.auth__btn:hover {
    transform: scale(0.98);
}
</style>