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
                        <div class="row row__padding">
                            <div class="col-auto col__sizing">
                                <label for="inputControl01" class="card-text w-70 card-text__margin">Введите данные
                                через пробел:</label>
                            <input id="inputControl01" class="form-control" v-model="inputString">
                        </div>
                            <div class="col padding">
                                <label for="inputControl02" class="card-text w-30 card-text__margin">Ищем элемент:</label>
                                <input id="inputControl02" type="number" class="form-control" v-model="searchNumber">
                            </div>
                        </div>

                        <div class="row row__position">
                            <select v-model="selected" class="form-select input__width"
                                aria-label="Выбор алгоритма поиска">
                                <option v-for="option in options" :value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <div class="row row__position">
                            <button type="button" class="btn btn-primary button__width"
                                :disabled="(selected == 'start') ? true : false" @click="searchStart">
                                Найти
                            </button>
                        </div>
                        <div class="row row__position row__bottom">
                            <label for="inputControl03" class="card-text card-text__margin">Результат:</label>
                            <input id="inputControl03" class="form-control input__width" :value="search" readonly>
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

.row__position {
    margin-bottom: 30px;
    box-sizing: border-box;
    width: 100%;
}

.card-text__margin {
    margin-bottom: 10px;
}

.input__width,
.button__width {
   margin: auto 10px;
   width: 100%;
   margin-left: 13px;
}

.row__bottom {
   margin-bottom: 10px; 
}

.col__sizing {
    margin-bottom: 30px;
}

.row__padding {
    padding-left: 1px;
}
</style>