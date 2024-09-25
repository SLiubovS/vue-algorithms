<script setup lang="ts">
import { ref } from 'vue'

const inputString = ref<string>('');
const selected = ref<string>('start');
let search = ref<string>('');
let arraySearchs: number[] = [];

const options = ref([
    { text: 'Выберите один из вариантов', value: 'start' },
    { text: 'Линейный поиск', value: 'linearSearch' }
])
</script>

<template>

    <div class="container">

        <div class="row justify-content-center container__margin">
            <div class="col-md-auto col-sm-auto col-auto">

                <div class="card" style="width: 25rem;">
                    <div class="card-header">
                        Алгоритмы поиска
                    </div>
                    <form class="card-body" novalidate>
                        <div class="row row__margin-bottom">
                            <div class="col-9 col__padding col__padding-right">
                                <label for="inputControl01" class="card-text card-text__margin w-75">Введите данные
                                через пробел:</label>
                            <input id="inputControl01" class="form-control" v-model="inputString">
                        </div>
                            <div class="col-3 col__padding">
                                <label for="inputControl02" class="card-text card-text__margin w-40">Ищем элемент:</label>
                                <input id="inputControl02" type="number" class="form-control" v-model="searchNumber">
                            </div>
                            
                            
                        </div>
                        <div class="row row__margin-bottom">
                            <select v-model="selected" class="form-select form-select__margin"
                                aria-label="Выбор алгоритма поиска">
                                <option v-for="option in options" :value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <div class="row row__margin-bottom">
                            <button type="button" class="btn btn-primary"
                                :disabled="(selected == 'start') ? true : false" @click="searchStart">
                                Найти
                            </button>
                        </div>
                        <div class="row">
                            <label for="inputControl03" class="card-text card-text__margin">Результат:</label>
                            <input id="inputControl03" class="form-control" :value="search" readonly>
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

.col__padding {
    padding: 0;
}

.col__padding-right {
    padding-right: 15px;
}
</style>