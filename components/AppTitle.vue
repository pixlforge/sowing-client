<script>
export default {
  props: {
    semantic: {
      type: String,
      required: false,
      default: 'h1'
    },
    visual: {
      type: String,
      required: false,
      default: ''
    },
    utilities: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      baseClasses: {
        h1: 'text-30 sm:text-36 font-extrabold leading-tight',
        h2: 'text-24 sm:text-30 font-extrabold leading-normal',
        h3: 'text-20 sm:text-24 font-extrabold leading-normal',
        h4: 'text-16 sm:text-20 font-extrabold leading-normal',
        h5: 'text-14 font-extrabold uppercase leading-normal',
        main: ' text-30 md:text-48 font-extrabold text-center tracking-tight',
        header: ' text-24 md:text-36 font-extrabold text-white tracking-tight'
      }
    }
  },
  computed: {
    classes() {
      let classes = this.baseClasses[this.visual]

      if (this.utilities) {
        classes += ` ${this.utilities}`
      }

      return classes
    }
  },
  render(createElement) {
    return createElement(
      this.semantic,
      { attrs: { class: this.classes } },
      this.$slots.default
    )
  }
}
</script>
