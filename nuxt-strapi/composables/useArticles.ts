export const useArticles = async () => {
  const { token } = useAuth()

  const { data, error } = await useFetch(`${process.env.STRAPI_URL}/api/articles?publicationState=preview` || 'http://localhost:1337/api/articles?publicationState=preview', {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })

  if (error.value) {
    console.error('記事の取得に失敗しました', error.value)
  }

  return {
    articles: data
  }
}
