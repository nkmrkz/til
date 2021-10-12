// ライブラリのインポートと辞書の読み込み
import kuromoji from "kuromoji";
import axios from "axios"

const apiKey = process.env.NEWSAPI_API_KEY

const builder = kuromoji.builder({
  dicPath: 'node_modules/kuromoji/dict/'
});

type T = string[]|undefined

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
 * 入力値の形態素解析を行い、名詞の配列を取得する関数
 * @param sentence 形態素解析の対象となる文字列
 * @returns 形態素解析によって得られた名詞の配列
 */
const returnNounArray = async (sentence:string):Promise<T>=>{

  // 形態素解析メソッドの呼び出し
  return new Promise<T>((resolve,reject)=>{
    builder.build(function(err, tokenizer){
      if(err) {
        console.log(err);
        reject();
      }
      // 形態素解析
      const wordArray = tokenizer.tokenize(sentence);
      console.table(wordArray)
    
      // 得られた名詞をreturnする
      resolve(wordArray.filter(word=>{
        return word.pos == "名詞" &&
          word.pos_detail_1 != "非自立" && 
          word.pos_detail_2 != "人名" && 
          word.pos_detail_1 != "数" && 
          word.pos_detail_1 != "接尾" && 
          word.pos_detail_1 != "空白"
      }).map(word=>{
        return word.surface_form
      }))
    })
  }).then(res=>{
    return res
  }).catch(err=>{
    console.error(err)
    return undefined
  })
}

const fetchNews = async()=>{
  const data:{data:ArticleResponse} = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}&language=en`)
  const descriptionArray = data.data.articles.map((article)=>{
    return article.description
  })
  descriptionArray.forEach(async(description)=>{
    // const aa = await returnNounArray(description)
    console.log(description)
  })
}

const main = async()=>{
  fetchNews()
}

main()
