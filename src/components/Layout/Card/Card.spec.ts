import { describe, expect, it } from 'vitest';
import Card from '@/components/Layout/Card/Card.vue';
import { shallowMount } from '@vue/test-utils';

describe('Card.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Card, {
      props: {
        size: 'sm',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with size md', () => {
    const wrapper = shallowMount(Card, {
      props: {
        size: 'md',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with size lg', () => {
    const wrapper = shallowMount(Card, {
      props: {
        size: 'lg',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with size full', () => {
    const wrapper = shallowMount(Card, {
      props: {
        size: 'full',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('has the correct bg class', () => {
    const wrapper = shallowMount(Card, {
      props: {
        size: 'sm',
        background: 'red',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find('div').classes().includes('bg-red-500')).toBeTruthy();
  });
});
