import { ColorsInterface } from "../types/styles/colors"

const colors: ColorsInterface = {
  white: {
    default: '#FCFCF9',
    lighten: {
      1: '#FFFFF1',
      2: '#FFFFEE'
    },
    darken: {
      1: '#F2F2F2',
      2: '#E9E9E0'
    }
  },

  black: {
    default: '#030300',
    lighten: {
      1: '#676764',
      2: '#CBCAC7'
    },
    darken: {
      1: '#2B2B2B',
      2: '#171717'
    }
  },

  red: {
    default: '#FF5050',
    lighten: {
      1: '#ff8484',
      2: '#ffb9b9'
    },
    darken: {
      1: '#993030',
      2: '#662020'
    }
  },

  blue: {
    default: '#5498ff',
    lighten: {
      1: '#87b7ff',
      2: '#bbd6ff'
    },
    darken: {
      1: '#325b99',
      2: '#223d66'
    }
  },

  yellow: {
    default: '#ffbd5a',
    lighten: {
      1: '#ffd18b',
      2: '#ffe5bd'
    },
    darken: {
      1: '#997136',
      2: '#664c24'
    }
  },

  green: {
    default: '#5ccb96',
    lighten: {
      1: '#8ddab5',
      2: '#beead5'
    },
    darken: {
      1: '#377a5a',
      2: '#25513c'
    }
  },

  theme: {
    text: '#030300',
    subText: '#676764',
    background: '#F2F2F2',
    lighten: {
      1: '#676764',
      2: '#CBCAC7'
    },
    darken: {
      1: '#2B2B2B',
      2: '#171717'
    },
    complementaryLighten: {
      1: '#FFFFF1',
      2: '#FFFFEE'
    },
    complementaryDarken: {
      1: '#F2F2F2',
      2: '#E9E9E0'
    }
  }
}

export default colors
