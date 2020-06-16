import MessageDisplay from '@/components/MessageDisplay.vue'
import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import getMessage from '@/services/axios'

jest.mock('@/services/axios')
beforeEach(() => jest.clearAllMocks())

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    const mockMessage = 'delectus aut autem'
    getMessage.mockResolvedValueOnce({ title: mockMessage })
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)

    const error = wrapper.find('[data-testid="message-error"]').element.textContent
    expect(error).toEqual(mockError)
  })
})
