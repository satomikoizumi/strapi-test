export const links = {
  search: {
    prod: 'https://search.mag2.com/MagSearch.do',
    staging: 'https://search.stg.mag2.com/MagSearch.do'
  },
  help: {
    prod: 'https://help.mag2.com/',
    staging: 'https://help.mag2.com/'
  }
  // 他のリンクも同様に追加
} as const

export type LinkKey = keyof typeof links