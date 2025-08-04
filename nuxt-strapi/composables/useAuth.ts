export const useAuth = () => {
  const token = useState('auth_token', () => '')

  const login = async (identifier: string, password: string) => {
    const { data, error } = await useFetch( `${process.env.STRAPI_URL}/api/auth/local` || 'http://localhost:1337/api/auth/local', {
      method: 'POST',
      body: {
        identifier,
        password
      }
    })

    if (error.value) {
      throw new Error('ログインに失敗しました')
    }

    token.value = data.value?.jwt
  }

  return {
    token,
    login
  }
}
