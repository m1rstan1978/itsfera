<template>
  <Transition>
    <div class="modal" v-if="isModal">
        <div class="modal__window" :class="{activeModal : !isModal}">
          <div class="modal__header" :class="{acceptActive : accept}">
              <div class="modal__bl" v-if="!accept">
                  <p class="modal__title">Оставить заявку</p>
                  <p class="modal__des">Мы перезвоним в течение дня для<br> уточнения деталей</p>
              </div>
              <div class="modal__image" @click="$emit('close'); accept = false">
                  <img src="@/assets/modal/close.svg">
              </div>
          </div>
        <div class="modal__content" v-if="!accept" :class="{acceptContent : accept}">
              <form @submit.prevent class="modal__form">
                  <div class="modal__type">
                      <input
                      class="modal__input"
                      :value="valueImask"
                      @complete="onComplete"
                      v-imask="mask"
                      >
                  </div>
                  <div class="modal__submit">
                      <button class="modal__btn" type="submit" @click="setAccept">Свяжитесь со мной</button>
                  </div>
              </form>
              <p class="modal__rules">Нажимая на “Свяжитесь со мной”, я даю согласие на
                <span class="modal__span" @click="$router.push('/privacy')">обработку персональных данных
                </span>
            </p>
          </div>
          <Transition>
            <p v-if="accept" class="modal__accepted">Заявка принята. Мы свяжемся<br> с вами в течение дня</p>
          </Transition>
      </div>
       
    </div>
  </Transition>
</template>

<script>
  import { IMaskDirective } from 'vue-imask';
  import { ref, set, get, onValue } from 'firebase/database';
  import { firebaseApp, firebaseDatabase } from '@/firebase/init';
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
  export default {
    props:{
        isModal:{
            type:Boolean
        }
    },
    data () {
      return {
        valueImask: '',
        mask: {
          mask: '{+7} (000) 000 00 00',
          lazy: false,
          placeholderChar: '-' 
        },
        isModalNotProps:false,
        accept:false,
        fullNumbers:false,
        arrayNumbers:null
      }
    },
    methods: {
        setAccept() {
            if(this.fullNumbers && this.arrayNumbers) {
                this.arrayNumbers.push({
                    number:this.fullNumbers
                })
                set(ref(firebaseDatabase, '/users'),this.arrayNumbers).then( res => this.accept = true )
            }
            else if(this.fullNumbers && !this.arrayNumbers) {
                this.arrayNumbers = [ { number:this.fullNumbers } ]
                set(ref(firebaseDatabase, '/users'),this.arrayNumbers).then( res => this.accept = true )
            }
            else {
                alert('Недостаточно символов')
            }
        }, 
        onComplete (e) {
            this.fullNumbers = e.detail.value
      },
    },
    mounted() {
        onValue(ref(firebaseDatabase,'/users'), res => {
            this.arrayNumbers = res.val()
        })
    },
    directives: {
      imask: IMaskDirective
    },
    
  }
</script>

<style scoped>
.modal {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
}
.modal__window {
    width: 520px;
    height: 210px;
    background: #EC0F08;
    padding: 20px 40px;
    border-radius: 10px;
    animation-name: nanex;
    margin-bottom: 0px;
    animation-duration: 0.3s;
}
@keyframes nanex {
   0% {
    margin-bottom: 250px;
   }
   100% {
    margin-bottom: 0px;
   }
}
.modal__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.acceptActive {
    justify-content: flex-end;
}
.modal__image {
    cursor: pointer;
}
.modal__title {
    font-family: 'Russo One';
    font-weight: 400;
    font-size: 28px;
    line-height: 130%;
    margin-bottom: 5px;
    color: #FFFFFF
}
.modal__des {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
    color: #FFFFFF;
}
.modal__form {
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
}
.modal__input {
    border:none;
    border-bottom: 1px solid #FFFFFF;
    background: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    padding: 10px 0;
    width: 280px;
    color: #FFFFFF;
}
.modal__btn {
    margin-left: 30px;
    background: none;
    border:1px solid white;
    color:white;
    padding: 10px 20px;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.modal__btn:hover {
    transform: scale(0.98);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.modal__rules {
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 130%;
    max-width: 459px;
    color: #FFFFFF;
}
.modal__span {
    cursor: pointer;
    text-decoration: underline;
}
.modal__accepted {
    font-family: 'Russo One';
    font-weight: 400;
    font-size: 24px;
    margin-top: 40px;
    color: #FFFFFF;
    text-align: center;
}
</style>