import adb from "node-adb"

export default function () { adb({ shell: ['connect', '127.0.0.1:7555'] }, (result) => { console.log(result) }) }