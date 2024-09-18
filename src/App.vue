<script setup lang="ts">
import { ref } from "vue"

const arraySorts = ref([]);
const selected = ref('start');

const options = ref([
  { text: 'Выберите один из вариантов', value: 'start' },
  { text: 'Сортировка пузырьком', value: 'bubbleSort' },
  { text: 'Сортировка выбором', value: 'selectedSort' },
  { text: 'Циклическая сортировка', value: 'cycleSort' },
  { text: 'Быстрая  сортировка', value: 'quickSort ' }
])

function sortStart() {

}
</script>

<template>

  <div class="container">

    <div class="row justify-content-center container__margin">
      <div class="col-md-auto col-sm-auto col-auto">
        <form class="card-body" novalidate>
          <div class="row row__margin">
            <label for="inputControl01" class="card-text card-text__margin">Введите данные
              через запятую:</label>
            <input id="inputControl01" class="form-control form-control__margin" v-model="arraySorts">
          </div>
          <div class="row row__margin">
            <select v-model="selected" class="form-select form-select__margin" aria-label="Выбор алгоритма сортировки">
              <option v-for="option in options" :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="row row__margin">
            <button type="button" class="btn btn-primary btn-primary"
            :click="sortStart"
            >
            Отсортировать
          </button>
          </div>
          <div class="row row__margin">
            <label for="inputControl02" class="card-text card-text__margin">Результат:</label>
            <input id="inputControl02" class="form-control form-control__margin" :value="arraySorts" readonly >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container__margin {
  margin-top: 100px;
}

.row__margin {
  margin-top: 30px;
  margin-bottom: 30px;
}

.card-text__margin {
  margin-bottom: 10px;
}

</style>
