import AWS from "aws-sdk"

const accessKeyId = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const main= async()=>{
  console.table({accessKeyId,secretAccessKey})
  AWS.config.update({
    accessKeyId,
    region: 'ap-northeast-1', 
    secretAccessKey
  });
  console.table({accessKeyId,secretAccessKey})


  const params = {
    LanguageCode: "en",
    Text: "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bitcoin Cash when crypto payments are available. He didn't hav…"
  };
  
  const comprehend = new AWS.Comprehend()
  comprehend.detectKeyPhrases(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });  
}

main()