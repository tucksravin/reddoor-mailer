import type { Response, Request } from "express";
import express from "express"

import mjml from 'mjml';
import nodemailer from 'nodemailer';
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

const app = express();

// Add error handling
app.use(express.json());

app.get('/', (request: Request, response: Response) => {

    try {
        response.json({ message: "Use post instead",
            
         });
    } catch (error) {
        console.error('Error in root route:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/', (request: Request, response: Response) => {
    let message = "no number ";
    

    if(request.body.call)
        message="I got her number on the wall"

    try {
        response.json({ message: message,
            requestheaders: request.headers,
            requestbody: request.body
            
         });
    } catch (error) {
        console.error('Error in root route:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
});

const emailDefaults = {
    headerImageUrl:"https://d3eq0h5l8sxf6t.cloudfront.net/maintenance-email/clients/erpfunds.jpg",
    siteUrl:"https://www.erpfunds.com/",
    performanceScore:90,
    readabilityScore:88,
    bpScore:95,
    seoScore:70,
    currentUsers:2112,
    previousUsers:2341,
    tested:false
}


const generateHTMLEmail = ( 
    headerImageUrl:string,
    siteUrl:string,
    performanceScore:number,
    readabilityScore:number,
    bpScore:number,
    seoScore:number,
    currentUsers:number,
    previousUsers:number,
    tested:boolean,
     ) =>{

    const MJML = `
        
    `

}


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});