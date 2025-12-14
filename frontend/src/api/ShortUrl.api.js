import axiosInstance from '../utils/axiosIntance'



export const  createShortUrl  = async(url , slug) => {
    const {data}  = await axiosInstance.post("/api/create",{url , slug})
    return data.shortUrl;
}