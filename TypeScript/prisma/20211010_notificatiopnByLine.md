# LINE通知する方法

```
'use strcit';
 
const axios = require('axios');
const qs = require('querystring');
const BASE_URL = 'https://notify-api.line.me';
const PATH = '/api/notify';
const LINE_TOKEN = `トークン`; // LINEのコンソールで発行したトークン

const config = {
  baseURL: BASE_URL,
  url: PATH,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${LINE_TOKEN}`
  },
  data: qs.stringify({
    message: `xxxxxx`,
  })
};
 
(async function(){
  const enableDate = []
  for(var i = 2;i < process.argv.length; i++){
    enableDate.push(process.argv[i]);
  }

  console.table(enableDate)
  // const response = await axios.request(config);
  // console.log(response)
})();
```