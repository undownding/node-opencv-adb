export default function () {
    let exec = require('child_process').execFile
    exec("/mnt/c/Program Files/MuMu/emulator/nemu/EmulatorShell/NemuLauncher.exe", (err, data) => {
        console.log(err)
        console.log(data.toString())
    })
}