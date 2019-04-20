import { shallowMount, createLocalVue } from '@vue/test-utils';
import EmailForm from '@/components/form/EmailForm';
import Vuex from 'vuex';
import Vuetify from "vuetify";

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)

describe('EmailForm.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      getEmailData: () => 2
    }

    store = new Vuex.Store({
      getters
    })
  })

  it('expect button to be disabled', () => {
    const wrapper = shallowMount(EmailForm, {store,localVue})
    const submitButton = wrapper.find('.submit-btn')
    expect(submitButton.attributes('disabled')).toBe('true')
  })

})