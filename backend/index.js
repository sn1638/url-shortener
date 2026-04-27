import express from 'express'
import dbconnect from './dbconnect.js'
import { URL } from './models/url.js';
const app=express();
app.use(express.json())
dbconnect();

import cors from 'cors'
import {router as urlroute} from './router/url.js'
app.use(cors())
app.use('/url',urlroute)
app.get('/:shortId',async (req,res)=>{
        const shortId=req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push:{
                    visithistory:{
                        timestamp:Date.now(),
                    }
                }
            }
        )
    res.redirect(entry.redirecturl);

})
app.listen(8000,()=>console.log('server is running on port 8000'))