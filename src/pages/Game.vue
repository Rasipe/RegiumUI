<template>
  <q-page class="col">
    <div class="row bg-grey-5" style="height: 295px">
      <p class="col text-center">{{beforeChoises.toString()}}</p>
    </div>
    <div class="row" style="height: 280px;">
      <div class="col bg-yellow-4 gt-sm"></div>
      <div class="col bg-grey-8 text-white">
        <q-scroll-area class="full-height">
          <q-list>
            <q-item
            v-for="(c, index) in choises"
            :key="index"
            clickable
            @click="selectChoise(c.choises)">
              <q-item-section>
                {{c.choise}}
              </q-item-section>
            </q-item>
            <q-item
            v-if="beforeChoises != null && choises != null"
            clickable
            @click="selectChoise(beforeChoises[beforeChoises.lenght-1])">
              <q-item-section>
                voltar
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </div>
      <div class="col bg-yellow-4 gt-sm"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'game',
  data() {
    return {
      text: 'Texto',
      beforeChoises: null,
      choises: [
        {
          choise: 'Escolha 1',
          choises: [
            {
              choise: 'Escolha 1.1',
              choises: [
                {
                  choise: 'Escolha 1.1.1',
                },
                {
                  choise: 'Escolha 1.1.2',
                },
                {
                  choise: 'Escolha 1.1.3',
                },
              ],
            },
            { choise: 'Escolha 1.2' },
            { choise: 'Escolha 1.3' },
            { choise: 'Escolha 1.4' },
            { choise: 'Escolha 1.5' },
          ],
        },
      ],
    };
  },
  methods: {
    selectChoise(newChoises) {
      if (this.beforeChoises === null) {
        this.beforeChoises = new Array(this.choises);
      } else {
        this.beforeChoises.push(this.choises);
      }
      this.choises = newChoises;
    },
  },
};
</script>

<style>

</style>
