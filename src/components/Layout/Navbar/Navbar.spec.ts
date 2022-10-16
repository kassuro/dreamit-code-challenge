import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Navbar from '@/components/Layout/Navbar/Navbar.vue';

describe('Navbar component', () => {
  it('renders', () => {
    const wrapper = shallowMount(Navbar);

    expect(wrapper.element).toMatchSnapshot();
  });
});
