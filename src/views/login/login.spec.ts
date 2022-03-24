import { mount } from '@vue/test-utils'
import Login from './Login.vue'
import { ElInput } from 'element-plus'

const routerPushMock = jest.fn()

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: routerPushMock
    })
}))

jest.spyOn(Storage.prototype, 'setItem')
jest.spyOn(Storage.prototype, 'getItem')

describe('Login.vue', () => {
    const wrapper = mount(Login, {
        // shallow: true
        global: {
            stubs: {
                RouterLink: true,
                ElForm: true,
                ElFormItem: true,
                ElInput: true,
                ElButton: true,
                ElCheckbox: true
            }
        }
    })
    it('renders', () => {
        // console.log(wrapper.findComponent(ElInput))
        expect(wrapper.find('h2').exists()).toBe(true)
        // expect(wrapper.find('input').exists()).toBe(true)
    })
    // it('submitForm', () => {
    // wrapper.find('button').trigger('click')
    // expect(localStorage.setItem).toHaveBeenLastCalledWith(LOCAL_LANG, locale)
    // expect(localStorage.getItem(LOCAL_LANG)).toBe(locale)

    // const changeLocale = (languageLocale: any) => {
    //     localStorage.setItem('language', languageLocale)
    //     return {
    //         type: 'CHANGE_LOCALE',
    //         locale: languageLocale
    //     }
    // }
    // const locale = 'de'
    // localStorage.clear()
    // changeLocale(locale)
    // expect(localStorage.setItem).toHaveBeenLastCalledWith(LOCAL_LANG, locale)
    // expect(localStorage.getItem(LOCAL_LANG)).toBe(locale)
    // })
})
