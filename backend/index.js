import dotenv from 'dotenv'
dotenv.config();
const PORT=process.env.PORT || 8000;
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
app.get('/test', (req, res) => {
  res.send("Backend working ✅");
});
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
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))