import { mount} from '@vue/test-utils'

import ContactView from '@/views/ContactView.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('ContactView', () => {
  const wrapper = mount(ContactView)

  it('EL HTML mantiene su estructura', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

test('Comprobando la ruta a la vista ContactView', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/contact',
        name: 'contact',
        component: ContactView
      }
    ]
})
routerPrueba.push('/contact')
await routerPrueba.isReady()
const wrapper = mount(ContactView, {
  global: {
    plugins: [routerPrueba]
  }
})
expect(wrapper.findComponent(ContactView).exists()).toBe(true)
})

test('Tiene un formulario', async () => {
  const form = wrapper.find('form')
  expect(form.exists()).toBe(true)
 
})
})