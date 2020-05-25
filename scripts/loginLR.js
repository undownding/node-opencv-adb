import tap from "../control/tap"
import sleep from "../control/sleep"

export default async function () {
    console.log("loginLR")
    // 点击 RO
    tap(1293, 215)
    await sleep(40000)
    // 开始游戏
    tap(960, 788)
    await sleep(10000)
    // 第一个人物
    tap(163, 246)
    await sleep(10000)
    // 开始游戏
    tap(1608, 964)
    await sleep(22000)
}