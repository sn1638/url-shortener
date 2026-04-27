import shortid from 'shortid'
import { URL} from './../models/url.js' 
export async function handleshorturl(req,res){
try {
        const body=req.body
        if(!body || !body.url)   return res.status(400).json({error:'url is required'})
        const shortId=shortid.generate()
        await URL.create({
            shortId,
            redirecturl:body.url,
            visithistory:[],
        })
        return res.json({id:shortId})
} catch (error) {
    console.error(error.message,"error creating short url")
    res.status(500).json({error:'internal server error'})
}
}