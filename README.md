# Image Processing API

## installation

<pre>
   npm version  8.6.0 
   node version 16.14.2
</pre>
to install project modulus
<pre>
   npm install 
</pre>


## End points

1. **/image?name=image_name&width=10&height=10**
   
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
