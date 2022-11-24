var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["deleteData"] = 1] = "deleteData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
