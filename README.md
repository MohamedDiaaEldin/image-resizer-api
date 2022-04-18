# Image Processing API

## installation

<pre>
   npm version  8.6.0 
   node version 16.14.2
</pre>
install project modulus
<pre>
   npm install 
</pre>

run express server
<pre>
   npm run start 
</pre>

## project start point 
[index.ts](./src/index.ts)


## End point

 http://localhost:5000/image?name=santamonica&width=600&height=400 
 
   - success request
      <pre>
        200 status code with resized image 
      </pre>
   - bad request params request
      <pre>
      json response 
         {
            status_code: 400,
            message: "bad request"
         }      
      </pre>
   - image not found 
      <pre>
      json response 
         {
            status_code: 404,
            message: "image not found"
        }      
      </pre>
   - server error for unexpected behavior
      <pre>
      json response 
         {
            status_code: 500,
            message: "server error"
        }      
      </pre>
