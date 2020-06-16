import MessageContainer from '@/components/MessageContainer.vue'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps the MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p data-testid="message">delectus aut autem</p>',
      },
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('delectus aut autem')
  })
})
