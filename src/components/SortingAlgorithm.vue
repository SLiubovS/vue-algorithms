<script setup lang="ts">
import { ref } from 'vue'
import { SortAlgorithmFactory } from '../models/Sorting/SortAlgorithmFactory'

const inputString = ref<string>('');
const selected = ref<string>('start');
let sorted = ref<string>('');
let arraySorts: number[] = [];

const options = ref([
    { text: 'Выберите один из вариантов', value: 'start' },
    { text: 'Сортировка пузырьком', value: 'bubbleSort' },
    { text: 'Сортировка выбором', value: 'selectedSort' },
    { text: 'Циклическая сортировка', value: 'cycleSort' },
    { text: 'Быстрая  сортировка', value: 'quickSort' }
])

function sortStart() {

    arraySorts = inputString.value.split(' ').map(str => parseFloat(str));
    const sortAlgorithm = SortAlgorithmFactory.getAlgorithm(selected.value);
    sortAlgorithm.sort(arraySorts);
    sorted.value = arraySorts.join(', ');
}

</script>

<template>

    <div class="container">

        <div class="row justify-content-center container__margin">
            <div class="col-md-auto col-sm-auto col-auto">

                <div class="card" style="width: 25rem;">
                    <div class="card-header">
                        Алгоритмы сортировки
                    </div>
                    <form class="card-body" novalidate>
                        <div class="row row__margin-bottom">
                            <label for="inputControl01" class="card-text card-text__margin">Введите данные
                                через пробел:</label>
                            <input id="inputControl01" class="form-control" v-model="inputString">
                        </div>
                        <div class="row row__margin-bottom">
                            <select v-model="selected" class="form-select form-select__margin"
                                aria-label="Выбор алгоритма сортировки">
                                <option v-for="option in options" :value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <div class="row row__margin-bottom">
                            <button type="button" class="btn btn-primary"
                                :disabled="(selected == 'start') ? true : false" @click="sortStart">
                                Отсортировать
                            </button>
                        </div>
                        <div class="row">
                            <label for="inputControl02" class="card-text card-text__margin">Результат:</label>
                            <input id="inputControl02" class="form-control" :value="sorted" readonly>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container__margin {
    margin-top: 100px;
}

.row__margin-bottom {
    margin-bottom: 30px;
}

.card-text__margin {
    margin-bottom: 10px;
}
</style>