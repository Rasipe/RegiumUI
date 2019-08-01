<template>
  <q-page class="flex flex-center">
    <div class="form q-pa-lg" style="width: 250px">
      <q-form class="q-gutter-md">
          <div class="row">
        <div class="col">
          <q-btn
            rounded
            class="full-width q-mt-sm"
            label="Novo Jogo"
            glossy
            type="submit"
            color="amber"
          />
          <q-btn
            @click="onLoad()"
            rounded
            class="full-width q-mt-sm"
            glossy
            label="Carregar"
            type="submit"
            color="amber"
          />
          <q-btn
            rounded
            class="full-width q-mt-sm"
            glossy
            label="Creditos"
            type="submit"
            color="amber"
          />
          <q-btn
            rounded
            class="full-width q-mt-xl"
            glossy
            label="Sair"
            type="submit"
            color="amber"
          />
        </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MainMenu',
  methods: {
    onLoad() {
      this.$router.push({ path: '/Load' });
    },
  },
};
</script>

<style>
</style>
