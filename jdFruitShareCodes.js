/*
水果互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间按Cookie隔开方法,即用&符号隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  'd653fc9270ea4cdbac17f2ff1a80a1b3@c9ad85bfeac941c0bc162e5e169d7ec0@321cda2fab474e168637141966905a10@489596bcebf54d68bb3e9c6858b99124',//账号一的好友shareCode,不同好友中间用@符号隔开
  'd653fc9270ea4cdbac17f2ff1a80a1b3@37eee83b6a9f427c990a007933fb0dde@a5c092fb041e4f5f8842f8a669561057@2b837f914f1741b7a619e76f61ae024b',//账号二的好友shareCode，不同好友中间用@符号隔开
  '37eee83b6a9f427c990a007933fb0dde@83af8de8664645759debeb8a156f42b1@d1cdd1c2bb5c47608580f1892e0071e2@df2700bf2367427b92f0819ff142ebb7',//账号三的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有水果互助码
if (process.env.FruitShareCodes && process.env.FruitShareCodes.split('&') && process.env.FruitShareCodes.split('&').length > 0) {
  FruitShareCodes = process.env.FruitShareCodes.split('&');
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}