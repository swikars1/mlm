<script>
import { Modal } from 'view-design'

const MODAL_TYPES = ['info', 'confirm']

export default {
  functional: true,
  props: {
    type: {
      type: String,
      required: true,
      validate(value) {
        return NOTICE_TYPES.includes(value)
      }
    }
  },
  render({ props }) {
    const { type } = props
    if (!MODAL_TYPES.includes(type)) {
      throw 'Invalid type'
    }
    return Modal[type]({
      ...props
    })
  },
  remove() {
    Modal.remove()
  }
}
</script>
