import * as cv from "opencv4nodejs"

export default async function(pic, tpl) {
    const picMat = await cv.imreadAsync(pic)
    const tplMat = await cv.imreadAsync(tpl)

    return picMat.matchTemplate(tplMat, 5).minMaxLoc()
}