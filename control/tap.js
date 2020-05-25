import adb from "node-adb"

export default function(x, y) { adb({ shell: ['shell', 'input', 'tap', x.toString(), y.toString()] }) }