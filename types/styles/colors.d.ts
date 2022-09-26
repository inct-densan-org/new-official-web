/**
 * 色のグラデーションを指定する
 */
export interface ColorGradationsInterface {
  /**
   * デフォルトの色
   */
  default: string

  /**
   * デフォルト色より明るい色のグラデーション
   *
   * 数値が高いほど明るい
   */
  lighten: {
    [index: number]: string
  }

  /**
   * デフォルト色より暗い色のグラデーション
   *
   * 数値が高いほど暗い
   */
  darken: {
    [index: number]: string
  }
}

/**
 * カラーパレット
 *
 * `theme`は現在の表示モード(ダーク・ライト)によって動的に変更される値が代入される
 */
export interface ColorsInterface {
  white: ColorGradationsInterface
  black: ColorGradationsInterface
  red: ColorGradationsInterface
  blue: ColorGradationsInterface
  yellow: ColorGradationsInterface
  green: ColorGradationsInterface
  theme: {
    text: string
    subText: string
    background: string
    lighten: {
      [index: number]: string
    }
    darken: {
      [index: number]: string
    }
    complementaryLighten: {
      [index: number]: string
    }
    complementaryDarken: {
      [index: number]: string
    }
  }
}