<template>
  <div class="admin__card">
    <div class="admin__card_numbers">
        <p class="admin__card_idx">№ {{ index }}</p>
        <p class="admin__card_number">Номер телефона: <span class="admin__card_span"> {{ list.number }}</span></p>
    </div>
    <div class="admin__card_delete">
        <button class="admin__card_btn" @click="deleteApplication">Удалить</button>
    </div>
  </div>
</template>

<script>


export default {
    props:{
        list:{
            type:Object
        },
        index:{
            type:Number
        }
    },
    methods:{
        deleteApplication() {
            this.$emit('delete',this.index - 1)
        }
    }
}
</script>

<style scoped>
.admin__card {
    border:1px solid rgba(236, 15, 8, 0.3);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    padding: 15px;
    margin-bottom: 20px;
}
.admin__card_numbers {
    display: flex;
    align-items: center;
}
.admin__card_number {
    margin-left: 40px;
}
.admin__card_btn {
    padding: 10px 25px;
    background: red;
    border-radius: 5px;
    border:none;
    font-weight: 600;
    color:white;
    transition: all 0.3s ease;
    cursor: pointer;
}
.admin__card_btn:hover {
    transform: scale(0.98);
}
.admin__card_idx {
    font-weight: 500;
    color: black;
}
.admin__card_span {
    font-weight: 700;
}
</style>