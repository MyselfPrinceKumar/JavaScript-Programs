/*
Write a javaScript program which show a random Zokes Every time 
*/

let arr = [`पप्पू अपनी पत्नी से-
अच्छा ये बताओ 'बिदाई' के समय तुम 
लड़कियां इतनी रोती क्यों हो?
पत्नी- 'पागल' अगर तुझे पता चले...
अपने घर से दूर ले जाकर कोई तुमसे 
'बर्तन मंजवाएगा' तो तू क्या नाचेगा...`, `बैंक की cashier ने खिड़की पर खड़े आदमी को कहा 'पैसे नहीं है'
ग्राहक: और दो मोदी माल्या को पैसा, सारे पैसे लेकर भाग गए विदेश में
कैशियर ने खिड़की में से हाथ निकाला और उसकी गर्दन दबोच कर कहा 'साले बैंक में तो है तेरे खाते में नहीं है' भिखारी`, `जज : घर में मालिक होते हुए तूने चोरी कैसे की?
चोर : साहब, आपकी नौकरी अच्छी है, और सैलरी 
भी अच्छी है, फिर आप ये सब सीख कर क्या करोगे?`, `पब्लिक टॉयलेट में लिखा था
'दुनिया चांद पर पहुंच गयी
और तू यहीं पर बैठा है'
पप्पू ने अपना दिमाग लगाया 
और नीचे लिखा
'चांद पर पानी नहीं था
इसलिए वापस आ गया'`, `पति- प्यास लगी है पानी लेके आओ..
पत्नी- क्यों ना आज तुम्हें मटर पनीर 
और शाही पुलाव बनाकर खिलाऊं...
पति- वाह वाह...! 
मुंह में पानी आ गया..
पत्नी- आ गया ना मुंह में पानी 
बस इसी से काम चला लो..`, `टीचर- टिटू बताओ..
अकबर ने कब तक शासन किया था ?
टिटू- सर जी..
पेज नंबर 14 से लेकर पेज नंबर 22 तक..।`, `गोलू- जानू, तुम दिन पर दिन 
खूबसूरत होती जा रही हो...
पत्नी (खुश होकर)- तुमने कैसे जाना ?
गोलू- तुम्हें देखकर...
रोटियां भी जलने लगी हैं
`, `टिल्लू (लड़की से)- मैं 18 साल का हूं और तुम ?
लड़की- मैं भी 18 साल की हूं...
टिल्लू- तो फिर चलो ना, इसमें शरमाना क्या..
लड़की- कहां ?
टिल्लू- अरे पगली..
वोट देने और कहां...`, `मां- बेटा क्या कर रहे हो
पप्पू- पढ़ रहा हूं मां..
मां- शाबास! बेटा क्या पढ़ रहे हो..?
पप्पू- आपकी होने वाली बहु के SMS`, `टीचर- बच्चों कोई ऐसा वाक्य सुनाओ 
जिसमें हिंदी, पंजाबी, उर्दू और अंग्रेजी का प्रयोग हो..
पप्पू- सर ..
'इश्क दी गली विच ल No entry'`, `पत्नी- पूजा किया कीजिए,
बड़ी बलांए टल जाती हैं...
टिटू- हां... तुम्हारे
पिताजी ने बहुत की होगी 
उनकी टल गई और मेरे पल्ले पड़ गई..।
`, `The End`]
let Rand = Math.floor(Math.random() * 12)
// console.log(arr.length)
// console.log(Rand)
// if (Rand == 0) {
//   console.log(arr[0])
// }
// if (Rand == 1) {
//   console.log(arr[1])
// }
// if (Rand == 2) {
//   console.log(arr[2])
// }
// if (Rand == 3) {
//   console.log(arr[3])
// }
// if (Rand == 4) {
//   console.log(arr[4])
// }
// if (Rand == 5) {
//   console.log(arr[5])
// }
// if (Rand == 6) {
//   console.log(arr[6])
// }
// if (Rand == 7) {
//   console.log(arr[7])
// }
// if (Rand == 8) {
//   console.log(arr[8])
// }
// if (Rand == 9) {
//   console.log(arr[9])
// }
// if (Rand == 10) {
//   console.log(arr[10])
// }
// if (Rand == 11) {
//   console.log(arr[11])
// }
// console.log(arr[Rand])
document.getElementsByClassName("Random_Joke")[0].innerHTML=arr[Rand]
// document.write(arr[Rand])