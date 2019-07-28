<template>
  <q-page>
    <h1>Regium</h1>
    <div id="form">
      <q-form class="q-gutter-md">
        <q-input dark outlined v-model="text" label="usuario" color="yellow" type="text" />
        <q-input dark outlined v-model="password" type="password" label="Senha" color="yellow" />
        <q-input
            dark
            v-if="signUp"
            outlined
            v-model="confirmPassword"
            type="password"
            label="Confirme a Senha"
            color="yellow"
        />
        <div class="row">
          <div class="col">
            <q-btn
            rounded
            @click="onSubmit()"
            class="full-width q-mt-md"
            label="Confirmar"
            glossy
            type="submit"
            color="amber"
            />
          </div>
          <div class="col">
            <q-btn
              rounded
              @click="signUp = !signUp"
              class="full-width q-mt-md"
              glossy
              type="submit"
              color="amber"
            >{{signUp ? 'Log in' : 'Sign in'}}</q-btn>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  props: {
    signUp: Boolean,
  },
  data() {
    return {
      text: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: '/Index' });
    },
  },
};
</script>

<style>
#form {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50px;
    padding-right: 15px;
}
</style>
