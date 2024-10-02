import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => { 
  let router

  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: [{
        path: '/about',
        name: 'about',
        component: AboutView
      }],
    })
    router.push('/about')
    await router.isReady()
  })

  test('Probando la existencia del componente o vista AboutView', async () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })  

  test('Tiene un título "About us"', async () => {
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('About us')
  })
})
