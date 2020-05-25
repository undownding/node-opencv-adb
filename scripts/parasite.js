import tap from "../control/tap"
import sleep from "../control/sleep"
import anti_blur from "../actions/anti_blur"
import touch from "../control/touch"
import screencap from "../control/screencap"

export default async function() {
    console.log("parasite")
    // 蝴蝶翅膀
    await anti_blur()
    await sleep(3000)
    await screencap()
    await touch('./screenshot.png', './templates/butterfly.png')
    await sleep(30000)
    // 点击地图
    tap(1800, 140)
    await sleep(2000)
    // 世界
    tap(1329, 857)
    await sleep(2000)
    // 国境
    tap(1106, 275)
    await sleep(2000)
    // 任务
    tap(981, 192)
    await sleep(2000)
    // 地图上的点
    tap(940, 532)
    await sleep(120000) // 等两分钟再说
    await anti_blur()
    await sleep(2000)

    // 吃五个土灵石
    await touch('./screenshot.png', './templates/earth.png')
    await sleep(3000)
    await touch('./screenshot.png', './templates/earth.png')
    await sleep(3000)
    await touch('./screenshot.png', './templates/earth.png')
    await sleep(3000)
    await touch('./screenshot.png', './templates/earth.png')
    await sleep(3000)
    await touch('./screenshot.png', './templates/earth.png')
    await sleep(3000)

    // 导师药水
    await touch('./screenshot.png', './templates/teacher.png')
    await sleep(2000)
    await touch('./screenshot.png', './templates/teacher.png')
    await sleep(2000)

    /* 以下方式已淘汰
    // 点击地图
    tap(1800, 140)
    await sleep(2000)
    // 世界
    tap(1329, 857)
    await sleep(2000)
    // 国境
    tap(1106, 275)
    await sleep(2000)
    // 佩瑞丝
    tap(1222, 465)
     */

    // 自动战斗 - 佩瑞丝
    await screencap()
    await touch('./screenshot.png', './templates/fight.png')
    await sleep(2000)
    await screencap()
    await touch('./screenshot.png', './templates/parasite.png')
    await anti_blur()
}