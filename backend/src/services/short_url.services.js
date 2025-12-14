import { genrateNanoId } from "../utlits/helper.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js"
import UrlModel from '../models/shortUrl.model.js';

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = genrateNanoId(7)
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async (url,userId,slug=null) => {
    const shortUrl = slug || genrateNanoId(7)
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom url already exists")

    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}