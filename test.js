
let a = {
    name: "vipan",
    class:"10th",
    rollno: "100",
    result:"pass",
    phNumber: "9803410390"
}

let b ={
    first_name: a.name,
    cls: a.class,
    r_no: a.rollno,
    final_result: a.result
}

let c = {
    last_name: b.first_name,
    class_name: b.cls,
    roll_no: b.r_no,
    result: b.final_result,
    Phone_Number: funcA()
}


let d = []

d = [...d,c]


let funcA = ()=>{
    return "9803410390"
}