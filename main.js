import launchMuMu from "./scripts/launchMuMu"
import sleep from "./control/sleep"
import connect from "./control/connect"
import loginWZ from "./scripts/loginWZ"
import music from "./scripts/music"
import home from "./control/home"
import loginLR from "./scripts/loginLR"
import tap from "./control/tap"
import parasite from "./scripts/parasite"

async function main()  {
    // 打开模拟器
    launchMuMu()
    await sleep(40000)
    // 连接模拟器
    await connect()
    await sleep(5000)
    // 登录武僧账号
    await loginWZ()
    // 去听歌
    await music(true)
    // await parasite()
    // 让猎人去听歌
    await home()
    await sleep(5000)
    await loginLR()
    await music(true)

    // 听歌60分钟
    await sleep(3600000)
    // 点击 RO
    home()
    await sleep(3000)
    tap(965, 220)
    await sleep(8000)
    // 战斗去！
    await parasite()

    console.log('end')
}

main().then()

