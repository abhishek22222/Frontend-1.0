class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",                     // i-case insensitive
            },
        }:{};


      //  console.log(keyword);
       
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}; // copying from original
        
        //Removing some feild for category which are not needed. 
        const removeFields = ["keyword"];
        removeFields.forEach((key) => delete queryCopy[key]);
        let queryStr = JSON.stringify(queryCopy); 

        this.query = this.query.find(JSON.parse(queryStr));
    
        return this;
        
    }

   

  
};
module.exports = ApiFeatures;