import s from "./goods.module.sass";
import { useEffect, useState } from "react";
import goodsStore from "../stores/GoodsStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const Goods = observer(() => {
  const [data, setData] = useState(null);
  const goods = goodsStore.getGoods();

  useEffect(() => {
    console.log(toJS(goodsStore.getGoods().data));
    setData(goodsStore.getGoods().data);
  }, [goods]);

  return (
    <div className={s.good}>
      {data
        ? data.map((item, index) => {
            return (
              <div className={s.good__card} key={index}>
                <p>Имя: {item.name} </p>
                <p>Описание: {item.description} </p>
                <p>Номер: {item.id} </p>
                <p>Цена: {item.price} </p>
                <img
                  className={s.good__img}
                  src={`http://localhost:3000${item.photo}`}
                  alt="dasd"
                />{" "}
              </div>
            );
          })
        : "loading...."}
    </div>
  );
});

export default Goods;
