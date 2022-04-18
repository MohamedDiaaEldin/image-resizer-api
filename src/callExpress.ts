import axios from 'axios'


// /// call local host express end point /api GET
// export  const get_api = async ()=>{
//     const response = await axios(`http://localhost:5000/api`);        
//     return response.data    
// }


axios.get('http://localhost:5000/image').then(response => {
    console.log(response.data)
    console.log(response.data.status_code)
})