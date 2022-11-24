//Nummeric Type
enum RequestType{
    readData,
    deleteData, 
    saveData,
}
// console.log(RequestType);

//enum - stringtype

enum RequestType2{
    readData = "Read_Data",
    deleteData = "Delete_Data"
}
// console.log(RequestType2);

// enum - hetergenous [orthat ekhane number string 2ta niyei kaj kora jabe]

enum RequestType3{
    readData = "Read_Rat",
    deleteData=101
}
console.log(RequestType3['deleteData']);