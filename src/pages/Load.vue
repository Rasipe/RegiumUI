<template>
  <q-page class="absolute-full form">
    <q-btn
      flat
      dense
      round
      aria-label="Back"
      @click="router('mainmenu')"
      class="q-mb-md"
      >
        <q-icon name="arrow_back" size="300%"/>
    </q-btn>
    <q-scroll-area
        class="full-width full-height"
      >
    <div class="row q-gutter-md flex flex-center">
        <r-save
         v-for="(save, index) in saves"
        :key="index"
        :days="save.days"
        :level="save.level"
        :name="save.name"
        @load="router('game')"
        />
    </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import RSave from '../components/RSave.vue';

export default {
  name: 'Load',
  components: {
    RSave,
  },
  data() {
    return {
      saves: [
        {
          name: 'Protagonista',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista2',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista3',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista2',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista3',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista2',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista3',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista2',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista3',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista2',
          days: 5,
          level: 2,
        },
        {
          name: 'Protagonista3',
          days: 5,
          level: 2,
        },
      ],
    };
  },
  methods: {
    router(layout) {
      this.$router.push({ path: layout });
    },
  },
};
</script>

<style>

</style>
