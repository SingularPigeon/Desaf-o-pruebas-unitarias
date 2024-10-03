import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('HomeView', () => {
  const wrapper = mount(HomeView)

  it('EL HTML se renderiza correctamente', () => {

    expect(wrapper.html()).toMatchSnapshot()
})

test('Comprobando al ruta a la vista HomeView', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      }
    ]    
})
routerPrueba.push('/home')
await routerPrueba.isReady()
const wrapper = mount(HomeView, {
  global: {
    plugins: [routerPrueba]
  }
})
expect(wrapper.findComponent(HomeView).exists()).toBeTruthy()
})
})