//Nummeric Type
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["deleteData"] = 1] = "deleteData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
//enum - stringtype
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// enum - hetergenous [orthat ekhane number string 2ta niyei kaj kora jabe]
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Rat";
    RequestType3[RequestType3["deleteData"] = 101] = "deleteData";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3['deleteData']);
