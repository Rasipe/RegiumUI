<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="row">
          <q-item-label class="col">{{protagonist}}</q-item-label>
          <q-item-label class="col">level {{level}}</q-item-label>
          <q-item-label class="col">days {{days}}</q-item-label>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-yellow-3"
    >
      <q-tabs
          v-model="tab"
          vertical
          active-bg-color="yellow-5"
          indicator-color="black"
        >
          <q-tab name="game" icon="videogame_asset" label="Jogo"/>
          <q-tab name="inventor" icon="store" label="Inventario" />
          <q-tab name="feature" icon="book" label="Características" />
          <q-tab name="spell" icon="star" label="Feitiço" />
          <q-tab name="group" icon="group" label="Grupo" />
        </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      protagonist: 'Protagonista',
      level: 0,
      days: 0,
      tab: 'game',
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
