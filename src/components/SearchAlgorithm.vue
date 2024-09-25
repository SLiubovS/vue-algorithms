<script setup lang="ts">

</script>

<template>

    <div class="container">

        <div class="row justify-content-center container__margin">
            <div class="col-md-auto col-sm-auto col-auto">

                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        Алгоритмы сортировки
                    </div>
                    <form class="card-body" novalidate>
                        <div class="row row__margin-bottom">
                            <div class="col-9 col__padding col__padding-right">
                                <label for="inputControl01" class="card-text card-text__margin">Введите данные
                                через пробел:</label>
                            <input id="inputControl01" class="form-control" v-model="inputString">
                        </div>
                            <div class="col-3 col__padding">
                                <label for="inputControl02" class="card-text card-text__margin">Ищем элемент:</label>
                                <input id="inputControl01" class="form-control" v-model="searchNumber">
                            </div>
                            
                            
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

.col__padding {
    padding: 0;
}

.col__padding-right {
    padding-right: 15px;
}
</style>