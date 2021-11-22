const Service = require('egg').Service;

class CustomerService extends Service {
  async ReadJSONContext()
  {
    const fs = require('fs');    
    const result = fs.readFileSync('temp/CustomerData.txt', 'utf-8');
    const Jsondata =result.split("\n"); 
    return Jsondata;
  }
  async Post2DNA() {  
    const jsondata = await this.ReadJSONContext();
      const ctx = this.ctx;
    const posturl = 'http://localhost/AeroDNAWebAPI/api/customers';
    console.log('Total Customers:'+jsondata.length);
      for (var i = 0; i < jsondata.length; i++)
      {
        const customer = JSON.parse(jsondata[i]);
        console.log(customer.CustomerName+" "+ customer.AccountsCode);
        const result = await ctx.curl(posturl, {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data:customer ,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
              dataType: 'json',
              headers: {
                'ApiKey':'12345'
            },
            timeout: [ 1000, 30000 ],
          });
        if (!result.data.result)
          console.log("result:" + JSON.stringify(result.data));
        }
      
    return true;
  }
}

module.exports = CustomerService;