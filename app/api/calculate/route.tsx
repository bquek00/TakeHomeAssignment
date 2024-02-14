export async function GET(request: Request) 
{
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const partner = searchParams.get('partner');
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {
            sname: name,
            fname: partner
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    
    try 
    {
        const response = await axios.request(options);
        console.log(response.data);
        return(Response.json(response.data));
    }
    catch (error) 
    {
        console.error(error);
        return(Response.json({data: 'error loading'}));
    }



}