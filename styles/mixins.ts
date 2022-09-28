/**
 * ラップトップ端末かどうかを調べるためのCSSを返す
 */
const checkIsLp = () => {
  return '@media screen and ( min-width: 1024px )'
}

/**
 * モバイル端末かどうかを調べるためのCSSを返す
 */
const checkIsSp = () => {
  return '@media screen and ( min-width: 240px ) and ( max-width: 1024px )'
}

const mixins = {
  checkIsLp,
  checkIsSp
}

export default mixins
