<script setup lang="ts">
import { ref } from 'vue'

const inputString = ref<string>('');
const selected = ref<string>('start');
let sorted = ref<string>('');
let arraySorts: string[] = [];

const options = ref([
  { text: 'Выберите один из вариантов', value: 'start' },
  { text: 'Сортировка пузырьком', value: 'bubbleSort' },
  { text: 'Сортировка выбором', value: 'selectedSort' },
  { text: 'Циклическая сортировка', value: 'cycleSort' },
  { text: 'Быстрая  сортировка', value: 'quickSort ' }
])

function sortStart() {

  arraySorts = inputString.value.split(' ');

  if (selected.value == 'bubbleSort') {
    const bubbleSort = (arraySorts: string[]) => {
      for (let i = 0; i < arraySorts.length; i++) {
        for (let j = 0; j < arraySorts.length - i; j++) {
          if (arraySorts[j] > arraySorts[j + 1]) {
            [arraySorts[j], arraySorts[j + 1]] = [arraySorts[j + 1], arraySorts[j]];
          }
        }
      }
    }
    bubbleSort(arraySorts);
    sorted.value = arraySorts.join(', ');
  }
}
</script>

<template>

  <div class="container">

    <div class="row justify-content-center container__margin">
      <div class="col-md-auto col-sm-auto col-auto">
        <form class="card-body" novalidate>
          <div class="row row__margin">
            <label for="inputControl01" class="card-text card-text__margin">Введите данные
              через пробел:</label>
            <input id="inputControl01" class="form-control form-control__margin" v-model="inputString">
          </div>
          <div class="row row__margin">
            <select v-model="selected" class="form-select form-select__margin" aria-label="Выбор алгоритма сортировки">
              <option v-for="option in options" :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="row row__margin">
            <button type="button" class="btn btn-primary btn-primary" @click="sortStart">
              Отсортировать
            </button>
          </div>
          <div class="row row__margin">
            <label for="inputControl02" class="card-text card-text__margin">Результат:</label>
            <input id="inputControl02" class="form-control form-control__margin" :value="sorted" readonly>
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
