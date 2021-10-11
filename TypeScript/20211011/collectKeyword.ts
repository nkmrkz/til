/**
 * @summary NEWS APIからトピックス一覧を取得するメソッド
 * @returns topicsの配列
 */
const fetchNews = async():Promise<string[]> => {
  const topicsArray:string[]=[]
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

const collectKeyword = async()=>{
  const topicArray = await fetchNews()
  const keywordArray = await getKeywordsFromTopics(topicArray)
  const savedKeywordArray = await saveKeywords(keywordArray)
  return savedKeywordArray
}

collectKeyword()