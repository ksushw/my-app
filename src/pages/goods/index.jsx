import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import CardsContainer from "../../components/cards-container/cards-container";
import { getIds, getItems } from "../../components/api";

function GoodsPage() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getGoodsData(0, 50);
  }, []);

  const getUniqueArray = (items) => {
    const uniqueArray = [];
    items.map((item) => {
      if (!uniqueArray.find((el) => el.id === item.id)) {
        uniqueArray.push(item);
      }
    });
    return uniqueArray;
  };

  const getGoodsData = async (offset, limit) => {
    setLoading(true);
    let goodsId = await getIds(offset, limit + 5);
    let goodsData = await getItems(goodsId);
    let uniqueArray = getUniqueArray(goodsData);
    setGoods(uniqueArray.slice(1, limit - offset + 1));
    setLoading(false);
  };

  return (
    <>
      <Header />
      <CardsContainer items={goods} IsLoading={loading} />
    </>
  );
}

export default GoodsPage;
