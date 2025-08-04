// composables/useEnvironment.ts
import { links } from '~/utils/links'
import type { LinkKey } from '~/utils/links'

export const useEnvironment = () => {
  const host = typeof window !== 'undefined' ? window.location.hostname : ''
  const isProd = host.includes('www.mag2.com') && !host.includes('staging')
  const environment = isProd ? 'prod' : 'staging'

  const getLink = (key: LinkKey): string => {
    return isProd ? links[key].prod : links[key].staging
  }

  return {
    host,
    isProd,
    environment,
    getLink
  }
}
