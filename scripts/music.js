import sleep from "../control/sleep"
import tap from "../control/tap"

export default async function (justLogin) {
    console.log("music -> just login: " + justLogin)
    if (justLogin) {
        // 活动点击XX
        tap(1402, 132)
        await sleep(8000)
    }
    // 点击地图
    tap(1800, 140)
    await sleep(8000)
    // 世界
    tap(1329, 857)
    await sleep(5000)
    // 南门
    tap(1111, 705)
    await sleep(3000)
    // CD机
    tap(713, 500)
    await sleep(3000)
}