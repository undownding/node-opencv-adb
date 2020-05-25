import back from "../control/back"
import sleep from "../control/sleep"
import screencap from "../control/screencap"
import find from "../control/find"

export default async function() {
    back()
    await sleep(2000)
    await screencap()
    let result = await find("./screenshot.png", "./templates/exit.png") //.catch((e) => { /* do nothing */ })
    if (result.maxVal >= 0.8) {
        back()
    }
}