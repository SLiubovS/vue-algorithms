import { createMemoryHistory, createRouter } from 'vue-router'
import SortingAlgorithm from '../components/SortingAlgorithm.vue'
import SearchAlgorithm from '../components/SearchAlgorithm.vue'

const routes = [
  { path: '/', component: SortingAlgorithm },
  { path: '/SearchAlgorithm', component: SearchAlgorithm }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router