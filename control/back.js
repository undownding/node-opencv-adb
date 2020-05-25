import adb from "node-adb"

export default function() { adb({shell: ['shell', 'input', 'keyevent', '4']}) }