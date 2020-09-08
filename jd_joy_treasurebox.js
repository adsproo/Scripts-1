// 更新时间：2020-09-07 14:00

let body = $response.body
body = JSON.parse(body)
food = body['data']['food']
function f(v) {
    return (v < 0) ? v : `+${v}`;
}
var sum = 0
lastHourWinInfos = body["data"]["lastHourWinInfos"]
for (var i in lastHourWinInfos) {
    sum += lastHourWinInfos[i]["petCoin"]
}
for (var i in lastHourWinInfos) {
    body["data"]["lastHourWinInfos"][i]["petCoin"] = `{${lastHourWinInfos[i]["food"]}} [${lastHourWinInfos[i]["petCoin"]}] (${f(lastHourWinInfos[i]["petCoin"] - lastHourWinInfos[i]["food"])}) `
}

body["data"]["lastHourWinInfos"].unshift({
    'pin': "",
    'nickName': '',
    'investHour':   lastHourWinInfos[0]['investHour'],
    'stage': '2',
    'food': 0,
    'rank': 0,
    'foodDif': "",
    'petCoin': '{投} [收入] (纯收入)',
    'userTag': "",
    'win': true
})
lastTurnFood = parseInt(sum / 0.09 * 0.91)
body['data']['food'] = `${food} (+${food - lastTurnFood})`
body = JSON.stringify(body)
$done({ body })