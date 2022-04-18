import { makeAutoObservable } from "mobx";
import GoodsService from "../services/GoodsService";

class GoodsStore {
  goodsService = new GoodsService();
  goods = [];
  constructor() {
    makeAutoObservable(this);

    this.loadGoods();
  }

  setGoods = (goods) => {
    this.goods = { ...goods };
  };

  getGoods = () => {
    return this.goods;
  };

  loadGoods =  () => {
    this.goodsService.get()
        .then(response => response.json())
        .then(data => {
            this.setGoods(data)
        })
        // .catch(err => {
        //     console.error("err")
        // })
  };
}

export default new GoodsStore();
