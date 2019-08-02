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
          <q-item-label class="col gt-sm">level {{level}}</q-item-label>
          <q-item-label class="col gt-sm">days {{days}}</q-item-label>
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
          <q-route-tab name="game" icon="videogame_asset" label="Jogo" to="/game"/>
          <q-route-tab name="inventor" icon="store" label="Inventario" to="/inventor"/>
          <q-route-tab name="feature" icon="book" label="Características" to="/feature"/>
          <q-route-tab name="spell" icon="star" label="Feitiço" to="/spell"/>
          <q-route-tab name="group" icon="group" label="Grupo" to="/group"/>
          <q-route-tab name="diary" icon="library_books" label="Missões" to="/game"/>
          <q-route-tab name="travel" icon="location_on" label="Viajar" to="/game"/>
        </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      protagonist: 'Protagonista',
      level: 0,
      days: 0,
      tab: 'game',
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
</style>
