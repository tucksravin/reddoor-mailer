import type { Response, Request } from "express";
import express from "express"

const app = express();

// Add error handling
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    let message = "no number :(";
    



    try {
        response.json({ message: message,
            requestheaders: request.headers,
            requestbody: request.body||""
            
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




const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});