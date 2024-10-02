import { mount } from '@vue/test-utils'

import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  const wrapper = mount(HomeView)

  it('EL HTML se renderiza correctamente', () => {

    expect(wrapper.html()).toMatchSnapshot()
})


})