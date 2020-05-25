import adb from "node-adb"
import sleep from "./sleep"

export default async function () {
    adb({ shell: ['shell', '/system/bin/screencap', '-p', '/sdcard/screenshot.png'] })
    await sleep(3000)
    adb({shell: ['pull', '/sdcard/screenshot.png', "."]})
    await sleep(8000)
}