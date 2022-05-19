import { mount } from '@vue/test-utils';
import SearchInput from '../index.vue';

describe('search-input - Unit', () => {
  it('Should be a vue instante', () => {
    const wrapper = mount(SearchInput, {
      props: {
        value: '',
      },
    });

    expect(wrapper.vm).toBeDefined();
  });
});
