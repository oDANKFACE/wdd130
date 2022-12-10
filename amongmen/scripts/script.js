const con_msg = ["1 - This is the message that will appear when you click the first picture - 1",
    "2 - This is the message that will appear when you click the second picture - 2",
    "3 - This is the message that will appear when you click the third picture - 3",
    "4 - This is the message that will appear when you click the fourth picture - 4",
    "5 - This is the message that will appear when you click the fifth picture - 5",
    "6 - This is the message that will appear when you click the sixth picture - 6",
    "7 - This is the message that will appear when you click the seventh picture - 7",
    "8 - This is the message that will appear when you click the eighth picture - 8",
    "9 - This is the message that will appear when you click the ninth picture - 9",
    "10 - This is the message that will appear when you click the tenth picture - 10",
    "11 - This is the message that will appear when you click the eleventh picture - 11",
    "12 - This is the message that will appear when you click the twelfth picture - 12"];

const container = [document.querySelector("#con_1"),
    document.querySelector("#con_2"),
    document.querySelector("#con_3"),
    document.querySelector("#con_4"),
    document.querySelector("#con_5"),
    document.querySelector("#con_6"),
    document.querySelector("#con_7"),
    document.querySelector("#con_8"),
    document.querySelector("#con_9"),
    document.querySelector("#con_10"),
    document.querySelector("#con_11"),
    document.querySelector("#con_12")];

const icon_msg = document.querySelector("#gameplay-img-msg");


const updateContainerMsg = (container, msg) => {
    container.textContent = msg;
    return true;
}

const updateCon0 = () => {
    let msg = con_msg[0];
    updateContainerMsg(icon_msg, msg)
}
const updateCon1 = () => {
    let msg = con_msg[1];
    updateContainerMsg(icon_msg, msg)
}
const updateCon2 = () => {
    let msg = con_msg[2];
    updateContainerMsg(icon_msg, msg)
}
const updateCon3 = () => {
    let msg = con_msg[3];
    updateContainerMsg(icon_msg, msg)
}
const updateCon4 = () => {
    let msg = con_msg[4];
    updateContainerMsg(icon_msg, msg)
}
const updateCon5 = () => {
    let msg = con_msg[5];
    updateContainerMsg(icon_msg, msg)
}
const updateCon6 = () => {
    let msg = con_msg[6];
    updateContainerMsg(icon_msg, msg)
}
const updateCon7 = () => {
    let msg = con_msg[7];
    updateContainerMsg(icon_msg, msg)
}
const updateCon8 = () => {
    let msg = con_msg[8];
    updateContainerMsg(icon_msg, msg)
}
const updateCon9 = () => {
    let msg = con_msg[9];
    updateContainerMsg(icon_msg, msg)
}
const updateCon10 = () => {
    let msg = con_msg[10];
    updateContainerMsg(icon_msg, msg)
}
const updateCon11 = () => {
    let msg = con_msg[11];
    updateContainerMsg(icon_msg, msg)
}



container[0].addEventListener('click', updateCon0);
container[1].addEventListener('click', updateCon1)
container[2].addEventListener('click', updateCon2)
container[3].addEventListener('click', updateCon3)
container[4].addEventListener('click', updateCon4)
container[5].addEventListener('click', updateCon5)
container[6].addEventListener('click', updateCon6)
container[7].addEventListener('click', updateCon7)
container[8].addEventListener('click', updateCon8)
container[9].addEventListener('click', updateCon9)
container[10].addEventListener('click', updateCon10)
container[11].addEventListener('click', updateCon11)
