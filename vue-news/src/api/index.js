import axios from 'axios';

// 1. HTTP Reuqest & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList (){
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList (){
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    }catch (error){
        console.log(error);
    }
}

function fetchJobsList (){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchUserInfo (userName){
    try{
        const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
        return response;
    }catch(error){
        console.log(error);
    }
}

async function fetchItem (id){
    try{
        const response = await axios.get(`${config.baseUrl}item/${id}.json`);
        return response;
    }catch(error){
        console.log(error);
    }
}

async function fetchList (pageName){
    try {
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    }catch(error) {
        console.log(error);
    }
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItem,
    fetchList
}
   