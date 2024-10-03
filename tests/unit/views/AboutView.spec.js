import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'


describe('AboutView', () => { 
  let routerPrueba
  
  beforeEach(async () => {
    routerPrueba = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/about',
        name: 'about',
        component: AboutView
      }],
    })
    routerPrueba.push('/about')
    await routerPrueba.isReady()
  })
  it('El HTML se renderiza correctamente', () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [routerPrueba]
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  test('Probando la existencia la vista AboutView', async () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [routerPrueba]
      }
    })
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })  

  test('Tiene un título "About us"', async () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [routerPrueba]
      }
    })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('About us')
  })

  test('Tiene un parráfo "Lorem..."', async () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [routerPrueba]
      }
    })
    const p = wrapper.find('p')

  expect(p.exists()).toBe(true)

  expect(p.text()).toContain('Lorem ipsum dolor sit amet')
  })
})
