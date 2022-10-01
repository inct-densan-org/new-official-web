import { ReactNode } from 'react'
import { IconNameType } from '~/types/icon/iconName'

export interface RouterPathInterface {
  icon: IconNameType
  link: string
  node: ReactNode
}

export const routerPathLists: Array<RouterPathInterface> = [
  {
    icon: 'groups',
    link: '/about',
    node: '電算部とは？'
  },
  {
    icon: 'military_tech',
    link: '/activities',
    node: '実績'
  },
  {
    icon: 'code',
    link: '/skills',
    node: '保有スキル'
  }
]
