import axios from 'axios';

const baseUrl = "http://localhost:3001/"

export default {

    zipList(url=baseUrl+'locality'){

        return{
            fetchAll: () => axios.get(url)
        }
    }
}