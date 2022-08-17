import axios from 'axios'

if(process.env.NODE_ENV!='production')
    axios.defaults.baseURL = "https://gwsmartfarm.herokuapp.com";


export async function GetMega2560RealTimeData(){
   var ret = await axios.get("/api/data/Mega2560");
   console.info(ret.data);
   return ret.data;
}

export async function GetD1WIFIRealTimeData(){
    var ret = await axios.get("/api/data/D1WIFI");
    console.info(ret.data);
    return ret.data;
 }