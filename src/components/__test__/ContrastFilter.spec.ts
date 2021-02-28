/* eslint-disable node/no-unpublished-import */
import {createLocalVue, mount, shallowMount} from '@vue/test-utils';
import ContrastFilter from '@/components/ContrastFilter.vue';
import BootstrapVue, {BFormInput} from 'bootstrap-vue';

global.console.warn = global.console.error = (message: Error) => {
  throw message;
};

describe('BlurFilter.vue', () => {
  test('emits the correct event with a numeric value when different "level" types are set.', async () => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    const wrapper = mount(ContrastFilter, {
      localVue,
    });
    const input = wrapper.findComponent(BFormInput);
    expect(input.exists()).toBe(true);
    input.setValue(0);
    expect(wrapper.emitted()['update:level']?.[0]).toBeTruthy();
    expect(wrapper.emitted()['update:level']?.[0]).toEqual([0]);
    input.setValue('50');
    expect(wrapper.emitted()['update:level']?.[1]).toBeTruthy();
    expect(wrapper.emitted()['update:level']?.[1]).toEqual([50]);
    input.setValue('just a string');
    expect(wrapper.emitted()['update:level']?.[2]).toEqual([0]);

    wrapper.destroy();
  });
});