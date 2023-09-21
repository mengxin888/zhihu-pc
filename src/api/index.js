import axios from "./axios.js"
const phone=()=>{
    return axios({
        url:"/api/phone_code/list?app_id=rgihdrm0kslojqvm&app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09",
        method:"get"
    })
}

export {
    phone,
};