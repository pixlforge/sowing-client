// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#22292F',
      white: '#FFFFFF',

      green: {
        100: '#F9FAFA',
        200: '#F4F7F5',
        300: '#C1E3CB',
        400: '#84C697',
        500: '#5FB881',
        600: '#478158',
        700: '#335C3F',
        800: '#1B3324',
        900: '#0F2116'
      },

      gray: {
        100: '#F5F5F5',
        200: '#DDDDDD',
        300: '#B3B3B3',
        400: '#686868',
        500: '#424242',
        600: '#2E2E2E',
        700: '#212121',
        800: '#1A1A1A',
        900: '#101010'
      },

      blue: {
        100: '#F5FAFE',
        200: '#DDEFFD',
        300: '#B3DBFB',
        400: '#68B7F7',
        500: '#42A5F5',
        600: '#2E74AC',
        700: '#21527A',
        800: '#1A4262',
        900: '#10293D'
      },

      brown: {
        100: '#F8F6F6',
        200: '#E7E0DE',
        300: '#C9BBB6',
        400: '#94776D',
        500: '#795548',
        600: '#553C32',
        700: '#3C2B24',
        800: '#30221D',
        900: '#1E1512'
      },

      indigo: {
        100: '#F7F8FC',
        200: '#E2E4F4',
        300: '#BEC4E6',
        400: '#7D89CD',
        500: '#5C6BC0',
        600: '#404B86',
        700: '#2E3560',
        800: '#252B4D',
        900: '#171B30'
      },

      orange: {
        300: '#FBD38D',
        400: '#F6AD55',
        500: '#ED8936',
        700: '#C05621'
      },

      purple: {
        100: '#F9F7FC',
        200: '#E8E1F4',
        300: '#CBBCE7',
        400: '#9879CE',
        500: '#7E57C2',
        600: '#583D88',
        700: '#3F2C61',
        800: '#32234E',
        900: '#201630'
      },

      pink: {
        100: '#FEF7FA',
        200: '#FCE3EB',
        300: '#F9C0D3',
        400: '#F381A8',
        500: '#F06292',
        600: '#CF2B66',
        700: '#783149',
        800: '#60273A',
        900: '#3C1824'
      },

      red: {
        100: '#FFF5F5',
        200: '#FED7D7',
        300: '#FEB2B2',
        400: '#FC8181',
        500: '#F56565',
        600: '#E53E3E',
        700: '#C53030',
        800: '#9B2C2C',
        900: '#742A2A'
      },

      slate: {
        100: '#F6F8F8',
        200: '#E0E5E7',
        300: '#BBC5CA',
        400: '#768B95',
        500: '#546E7A',
        600: '#3B4D55',
        700: '#2A373D',
        800: '#222C31',
        900: '#151C1E'
      }
    },
    fontSize: {
      '10': '1rem',
      '12': '1.2rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': '2.4rem',
      '30': '3rem',
      '36': '3.6rem',
      '48': '4.8rem',
      '60': '6rem',
      '72': '7.2rem'
    },
    height: {
      auto: 'auto',
      '3': '.3rem',
      '20': '2rem',
      '30': '3rem',
      '40': '4rem',
      '42': '4.2rem',
      '46': '4.6rem',
      '50': '5rem',
      '60': '6rem',
      '75': '7.5rem',
      '80': '8rem',
      '90': '9rem',
      '100': '10rem',
      '110': '11rem',
      '150': '15rem',
      '200': '20rem',
      '250': '25rem',
      '300': '30rem',
      '350': '35rem',
      '400': '40rem',
      '500': '50rem',
      '700': '70rem',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      full: '100%'
    },
    minHeight: {
      '160': '16rem',
      '221': '22.1rem',
      full: '100%',
      'half-screen': '50vh',
      screen: '100vh'
    },
    maxWidth: {
      '400': '40rem',
      '500': '50rem',
      '600': '60rem',
      '800': '80rem',
      '1000': '100rem',
      full: '100%'
    },
    padding: {
      '0': '0',
      '5': '.5rem',
      '10': '1rem',
      '12': '1.2rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': '2.4rem',
      '30': '3rem',
      '36': '3.6rem',
      '48': '4.8rem',
      '60': '6rem',
      '72': '7.2rem',
      '96': '9.6rem',
      '132': '13.2rem',
      '196': '19.6rem'
    },
    margin: {
      auto: 'auto',
      '0': '0',
      '5': '.5rem',
      '10': '1rem',
      '12': '1.2rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': '2.4rem',
      '30': '3rem',
      '36': '3.6rem',
      '48': '4.8rem',
      '60': '6rem',
      '72': '7.2rem',
      '84': '8.4rem',
      '96': '9.6rem',
      '132': '13.2rem',
      '196': '19.6rem',
      '-5': '-.5rem',
      '-10': '-1rem',
      '-12': '-1.2rem',
      '-14': '-1.4rem',
      '-16': '-1.6rem',
      '-20': '-2rem',
      '-24': '-2.4rem',
      '-36': '-3.6rem'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat']
      },
      width: {
        '20': '2rem',
        '30': '3rem',
        '40': '4rem',
        '50': '5rem',
        '60': '6rem',
        '75': '7.5rem',
        '80': '8rem',
        '90': '9rem',
        '100': '10rem',
        '110': '11rem',
        '300': '30rem',
        '350': '35rem'
      }
    }
  },
  variants: {
    accessibility: [],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: [],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus', 'disabled'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
    cursor: ['disabled'],
    display: ['responsive'],
    fill: [],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: [],
    fontWeight: ['responsive', 'hover'],
    justifyContent: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    margin: ['responsive', 'first', 'last'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: [],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive', 'first', 'last'],
    placeholderColor: [],
    position: ['responsive'],
    resize: [],
    stroke: [],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
    textDecoration: ['responsive', 'hover'],
    textTransform: ['responsive', 'hover'],
    userSelect: [],
    whitespace: [],
    wordBreak: [],
    width: ['responsive', 'first', 'last'],
    zIndex: []
  },
  corePlugins: {
    float: false,
    listStylePosition: false,
    listStyleType: false,
    maxHeight: false,
    pointerEvents: false,
    verticalAlign: false,
    visibility: false
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
