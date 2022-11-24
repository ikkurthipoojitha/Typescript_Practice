var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 6] = "Left";
    Direction1[Direction1["Right"] = 10] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["ACTIVE"] = 0] = "ACTIVE";
    AppStatus[AppStatus["INACTIVE"] = 1] = "INACTIVE";
    AppStatus[AppStatus["ONHOLD"] = 2] = "ONHOLD";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log(status);
}
checkStatus(AppStatus.ONHOLD);
var AppStatus2;
(function (AppStatus2) {
    AppStatus2["ACTIVE"] = "ACT";
    AppStatus2["INACTIVE"] = "INACT";
    AppStatus2["ONHOLD"] = "HLD";
    AppStatus2["ONSTOP"] = "STOP";
})(AppStatus2 || (AppStatus2 = {}));
function checkStatus2(status) {
    console.log(status);
}
checkStatus2(AppStatus2.ONSTOP);
var AppStatus3;
(function (AppStatus3) {
    AppStatus3["ACTIVE"] = "Yes";
    AppStatus3[AppStatus3["INACTIVE"] = 1] = "INACTIVE";
    AppStatus3[AppStatus3["ONHOLD"] = 2] = "ONHOLD";
    AppStatus3["ONSTOP"] = "STOP";
})(AppStatus3 || (AppStatus3 = {}));
console.log(AppStatus3.ACTIVE);
console.log(AppStatus3.ONHOLD);
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = getDate('Dominoz')] = "Saturday";
    Weekend[Weekend["Sunday"] = Weekend.Saturday * 40] = "Sunday";
})(Weekend || (Weekend = {}));
function getDate(day) {
    if (day === 'Dominoz') {
        return 3;
    }
}
console.log(Weekend.Saturday);
console.log(Weekend.Sunday);
