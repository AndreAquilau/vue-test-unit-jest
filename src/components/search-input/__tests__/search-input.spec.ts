import { mount } from '@vue/test-utils';
import SearchInput from '../index.vue';

describe('search-input - Unit', () => {
  //Teste de montagem do componente.
  it('Should be a vue instance', () => {
    const wrapper = mount(SearchInput, {
      props: {
        value: '',
      },
    });

    expect(wrapper.vm).toBeDefined();
  });

  //Teste de mudança de valor "searchQuery" é um computed que acessa uma props get, set.
  it('Should update searchQuery when prop value is changed', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        value: '',
      },
    });

    await wrapper.setProps({ value: 'test' });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.searchQuery).toEqual('test');
  });

  //Quando digitar alterar o valor do search
  it('Should emit input event when something is typed', async () => {
    const wrapper = mount(SearchInput, { props: { value: '' } });

    const inputEl = wrapper.find('input[type=text]');

    await inputEl.setValue('André');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual(['André']);
  });

  //Quando clicar no botão X limpar o v-model shearch
  it('Should clear input value when X icon is clicked', async () => {
    const wrapper = mount(SearchInput, {
      props: {
        value: '',
      },
    });

    const inputEl = wrapper.find('input[type=text]');

    await inputEl.setValue('André Da Silva');
    await wrapper.vm.$nextTick();

    const clearBtn = wrapper.find('.input_clear');
    await clearBtn.trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[1]).toEqual(['']);
  });
});
