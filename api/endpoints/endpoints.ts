export const endpoints ={
auth:{
    registration : "/users-api/register/",
    signIn : "/users-api/login/",
    otp:"/users-api/register/verify-otp/",
    
},

}
export const endpoint = [
    endpoints.auth.registration,
    endpoints.auth.signIn,
    endpoints.auth.otp,
    
]