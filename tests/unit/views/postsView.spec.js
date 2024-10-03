import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView.vue'

describe('PostsView', () => { 
    test('Probando la existencia del componente o vista PostsView ', async () => {
        const routerPrueba = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }
        ],
        })
        routerPrueba.push('/posts')
        await routerPrueba.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [routerPrueba]
            }
        })
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    })  
 })