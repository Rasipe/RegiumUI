<template>
  <q-page class="absolute-full form">
    <div class="col q-gutter-md">
      <div class="row q-gutter-md">
        <div class="col">
            <q-item  class="q-py-lg save" clickable>
              <q-item-section>
                <q-item-label class="q-pb-sm">Nome do protagonista</q-item-label>
                <q-item-label class="q-py-xs">Level</q-item-label>
                <q-item-label class="q-pt-sm">Dias</q-item-label>
              </q-item-section>
            </q-item>
        </div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Load',
};
</script>

<style>
.save {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  padding-right: 15px;
}
</style>
