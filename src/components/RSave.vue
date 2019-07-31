<template>
<div class="r-save">
  <q-item class="save" clickable @click="load">
    <q-item-section>
      <q-item-label class="q-pb-sm">{{name}}</q-item-label>
      <q-item-label class="q-py-xs">{{level}}</q-item-label>
      <q-item-label class="q-pt-sm">{{days}}</q-item-label>
    </q-item-section>
  </q-item>
</div>
</template>

<script>
export default {
  name: 'r-save',
  props: {
    name: String,
    days: Number,
    level: Number,
  },
  methods: {
    load() {
      this.$emit('load');
    },
  },
};
</script>

<style>
.save {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  padding-right: 15px;
  width:250px
}
</style>
