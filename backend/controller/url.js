import shortid from 'shortid'
import { URL} from './../models/url.js' 
export async function handleshorturl(req,res){
    try {
            const body=req.body
            if(!body || !body.url)   return res.status(400).json({error:'url is required'})
            
            let exists=true;
            let shortId;
            while (exists) {
                shortId=shortid.generate()
                const check = await URL.findOne({ shortId });
                if (!check) exists = false;
            }

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