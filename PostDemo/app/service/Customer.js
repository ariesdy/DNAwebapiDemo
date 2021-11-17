const Service = require('egg').Service;

class CustomerService extends Service {
  async Post2DNA() {
      const customer = {
        "EmailAddress": "sample string 1",
        "APILink1": "sample string 2",
        "APILink2": "sample string 3",
        "APILink3": "sample string 4",
        "AccountsCode": "test2",
        "CustomerName": "test2",
        "SiteName": "SiteName",
        "AddressLine1": "sample string 8",
        "AddressLine2": "sample string 9",
        "AddressLine3": "sample string 10",
        "AddressLine4": "sample string 11",
        "PostCode": "sample string 12",
        "Country": "sample string 13",
        "Phone": "sample string 14",
        "Fax": "sample string 15",
        "PaymentsTerms": "sample string 16",
        "CreditLimit": "sample string 17",
        "Currency": "USD",
        "VatGroup": "GST",
        "VatNo": "sample string 20"
      }; 
      const ctx = this.ctx;
      const posturl = 'http://192.168.1.48/DNAWebAPI/api/customers';
      for (var i = 0; i < 400; i++)
      {
          customer.CustomerName = "customer" + i;
          customer.AccountsCode = "customer" + i;
         
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