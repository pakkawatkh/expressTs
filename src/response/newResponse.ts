 
export class newResponse {
    
   ok(value:any){
        return {
            data: value,
            status: 200,
            timeStamp: new Date().getTime()
        }
    }

    error(msg:string){
        return {
            message: msg,
            status: 417,
            timeStamp: new Date().getTime()
        }
    }
} 
