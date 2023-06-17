<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, set, get, onValue } from "firebase/database";
import { firebaseApp, firebaseDatabase } from "@/firebase/init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default {
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900;1000&display=swap");

* {
  font-family: "Mulish", sans-serif;
  margin: 0;
  padding: 0;
}
.main {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}

.display {
  display: none !important;
}

.container {
  padding: 0 20px;
  max-width: 1200px;
}
</style>
