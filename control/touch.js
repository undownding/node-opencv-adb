import * as cv from "opencv4nodejs"
import tap from "./tap"
import find from "./find"

export default async function(pic, tpl) {

    const picMat = await cv.imreadAsync(pic)
    const tplMat = await cv.imreadAsync(tpl)

    let minMax = await picMat.matchTemplate(tplMat, 5).minMaxLoc()
    // const { maxLoc: { x, y } } = minMax
    //
    // console.log(minMax)
    //
    // console.log('x ' + (minMax.maxLoc.x + (tplMat.cols / 2)).toString())
    // console.log('y ' + (minMax.maxLoc.y + (tplMat.rows / 2)).toString())
    // console.log('touch ' + (minMax.maxVal >= 0.95))

    console.log('touch -> ' + tpl)
    console.log(minMax)

    if (minMax.maxVal >= 0.85) {
        tap(minMax.maxLoc.x + (tplMat.cols / 2), minMax.maxLoc.y + (tplMat.rows / 2))
        return true
    } else {
        return false
    }
    // picMat.drawRectangle(
    //     new cv.Rect(x, y, tplMat.cols, tplMat.rows),
    //     new cv.Vec(0, 255, 0),
    //     2,
    //     cv.LINE_8
    // );

    // cv.imshow('We\'ve found Waldo!', picMat);
    // cv.waitKey();


}