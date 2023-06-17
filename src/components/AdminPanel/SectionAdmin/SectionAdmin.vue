<template>
  <div class="admin">
    <header>
    <div class="admin__header">
        <div class="admin__header_img" @click="$router.push('/')">
            <img src="@/assets/logo.png">
        </div>
        <div class="admin__header_leave">
            <button class="admin__header_btn" @click="signOut">Выйти</button>
        </div>
    </div>
  </header>
      <div class="admin__content" v-if="numbersArray">
        <AdminCard
        v-for="(list, idx) in numbersArray"
        :key="list.id"
        :list="list"
        :index="idx + 1"
        @delete="deleteApp(idx)"
        ></AdminCard>
      </div>
      <h1 class="admin__empty" v-if="numbersArray === null">Заявок нет</h1>
  </div>
</template>

<script>
import { ref, set, get, onValue } from 'firebase/database';
import { firebaseApp, firebaseDatabase } from '@/firebase/init';
import { getAuth, signOut  } from "firebase/auth";
import AdminCard from '@/components/AdminPanel/AdminCard/AdminCard.vue'

export default {
    data() {
        return {
            numbersArray:[],
            checkArray:false,
        }
    },
    methods:{
        deleteApp(idx) {
            this.numbersArray.splice(idx,1)
            set(ref(firebaseDatabase, '/users'),this.numbersArray).then(res => alert('Заявка успешно удалена')).catch( e => alert('При удалении возникла неизвестная ошибка'))
        },
        signOut() {
        const auth = getAuth()
        signOut(auth).then( res => location.reload() )
        }
    },
    mounted() {
        onValue(ref(firebaseDatabase,'/users'), res => {
            this.numbersArray = res.val()
            if(res.val()) {
                this.checkArray = true
            }
        })
    },
    components:{AdminCard}
}
</script>

<style scoped>
header {
    padding: 25px 320px;
}
.admin__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.admin__header_btn {
    padding: 10px 25px;
    background: red;
    border-radius: 5px;
    border:none;
    font-weight: 600;
    color:white;
    transition: all 0.3s ease;
    cursor: pointer;
}
.admin__header_btn:hover {
    transform: scale(0.98);
}
.admin__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.admin__header_img {
    cursor: pointer;
}
.admin__empty {
    text-align: center;
    margin-top: 30px;
    font-weight: 800;
    font-size: 38px;
    color: #EC0F08;
}
</style>