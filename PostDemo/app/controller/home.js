'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.customer.Post2DNA();
    ctx.body = result?"Post customer success":"Post fail";
  }
  async index2() {
    const { ctx } = this;
    console.log(ctx.service.pO)
    const result = await ctx.service.pO.Post2DNA();
    ctx.body = result?"Post po success":"Post fail";
  }
  async index3()
  {
    const { ctx } = this;
    const result =  await ctx.service.supplier.Post2DNA();
    ctx.body = result?"Post supplier success":"Post fail";

  }
}

module.exports = HomeController;
