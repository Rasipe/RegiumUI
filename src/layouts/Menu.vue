<template>
  <q-layout view="lHh Lpr lFf">
  <q-img class="window-height" src="../assets/Regium Bandeira.png">
    <div class="absolute-full flex flex-center">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-img>
  </q-layout>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style>
.form {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50px;
    padding-right: 15px;
}
</style>
