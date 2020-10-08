<script>
import { Notice } from 'view-design'

const NOTICE_TYPES = ['success', 'error', 'warning']

export default {
  functional: true,
  props: {
    description: {
      type: String,
      required: true
    },
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
    if (!NOTICE_TYPES.includes(type)) {
      throw 'Invalid type'
    }
    return Notice[type]({
      ...props
    })
  }
}
</script>