import axios from "axios"

const apiKey = process.env.NEWSAPI_API_KEY

type ArticleResponse = {
  status: string,
  totalResults: number,
  articles: {
    title:string,
    url:string,
    content:string,
    description:string
  }[]
}

/**
 * @summary NEWS APIからトピックス一覧を取得するメソッド
 * @returns topicsの配列
 */
const fetchNews = async():Promise<string[]> => {
  const topicsArray:string[]=[]

  console.log(apiKey)
  
  const data:{data:ArticleResponse} = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}&language=en`)
  const descriptionArray = data.data.articles.map((article)=>{
    return article.description
  })
  descriptionArray.forEach(async(description)=>{
    // const aa = await returnNounArray(description)
    topicsArray.push(description)
  })
  console.log(topicsArray)
  return topicsArray
}

/**
 * @summary AWS Comprehendにピックス一覧をPOSTしてキーワード一覧を取得するメソッド
 * @param topicsArray[] topicsの配列
 * @returns keywordの配列
*/
const getKeywordsFromTopics = async(topicsArray:string[]):Promise<string[]> =>{
  const keywordArray:string[] = []
  return keywordArray
}


/**
 * @summary キーワード一覧をDB保存するメソッド
 * @param keywordArray[] keywordの配列
 * @returns 保存したkeywordの配列
*/
const saveKeywords = async(keywordArray:string[]):Promise<string[]> =>{
  const savedKeywordArray:string[] = []
  return savedKeywordArray
}

const main = async()=>{
  const topicArray = await fetchNews()
  const keywordArray = await getKeywordsFromTopics(topicArray)
  const savedKeywordArray = await saveKeywords(keywordArray)
  return savedKeywordArray
}

main()