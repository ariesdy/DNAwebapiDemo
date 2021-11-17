const Service = require('egg').Service;

class POService extends Service {
  async Post2DNA() {
      const POData1 = {
        "TaxCode": "V0",
        "PONumber": "0091137482",
        "SupplierAPILink2": "",
        "SupplierAPILink3": "",
        "SupplierName": "Praxair Surface Technologies",
        "QuoteRefNo": "0091137482",
        "QuoteRefDate": "0711006700",
        "StockAPILink1": "",
        "StockAPILink2": "",
        "StockAPILink3": "",
        "StockCode": "AMRMP01PM02",
        "POType": "MATERIAL",
        "APILink1": "0091137482",
        "APILink2": "00010",
        "APILink3": "",
        "Date": "20210920",
        "SupplierAPILink1": "",
        "PONote": "",
        "ExchangeRate": "",
        "HSNCode": "",
        "LineNo": "00010",
        "Quantity": "10.000",
        "RequiredDate": "",
        "ItemNotes": "",
        "Price": "53842.41",
        "PriceType": "",
        "ItemDiscount": "",
        "FAIR": "",
        "DeliveryCharge": "",
        "PromiseDate": "",
        "Unit": "KG",
        "PurchaseListID": ""
      };
      const POData2 = {
          "TaxCode": "V0",
          "PONumber": "0091137466",
          "SupplierAPILink2": "",
          "SupplierAPILink3": "",
          "SupplierName": "CIPET : SARP-ARSTPS",
          "QuoteRefNo": "0091137466",
          "QuoteRefDate": "0711006663",
          "StockAPILink1": "",
          "StockAPILink2": "",
          "StockAPILink3": "",
          "StockCode": "AMSA028",
          "POType": "MATERIAL",
          "APILink1": "0091137466",
          "APILink2": "00010",
          "APILink3": "",
          "Date": "20210918",
          "SupplierAPILink1": "",
          "PONote": "",
          "ExchangeRate": "",
          "HSNCode": "",
          "LineNo": "00010",
          "Quantity": "1.000",
          "RequiredDate": "",
          "ItemNotes": "",
          "Price": "66000.00",
          "PriceType": "",
          "ItemDiscount": "",
          "FAIR": "",
          "DeliveryCharge": "",
          "PromiseDate": "",
          "Unit": "EA",
          "PurchaseListID": ""
      };
      const poarrary = [POData1, POData2];
      const ctx = this.ctx;
      const posturl = 'http://192.168.1.48/DNAWebAPI/api/purchase_order';
      for (var i = 0; i < 2; i++)
      {
          var podata = poarrary[i];
         
        const result = await ctx.curl(posturl, {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data:podata ,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
              dataType: 'json',
              headers: {
                'ApiKey':'12345'
            },
            timeout: [ 3000, 30000 ],
          });
        if (!result.data.result)
          console.log("result:" + JSON.stringify(result.data));
        }
      
    return true;
  }
}

module.exports = POService;