import products from './products.json';

export default class Server {
  get(page) {
    return {
      data: products.slice((page.pageKey - 1) * page.pageSize, page.pageSize*page.pageKey),
      total: products.length
    }
  }
}