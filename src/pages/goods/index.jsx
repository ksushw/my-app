import { useState, useEffect, useRef } from "react";
import Header from "../../components/header/header";
import CardsContainer from "../../components/cards-container/cards-container";
import { getIds, getItems, getFilteredIds } from "../../components/api";

function GoodsPage() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);

  const filter = (type, value) => {
    if (type === "unsorted") {
      getGoodsData(0, 50);
    } else {
      filteredData(type, value);
    }
  };

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
    setGoods(uniqueArray.slice(0, limit - offset));
    setLoading(false);
  };

  const filteredData = async (field, value) => {
    setLoading(true);
    let goodsId = await getFilteredIds(field, value);
    let goodsData = await getItems(goodsId);
    setGoods(goodsData);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <CardsContainer
        items={goods}
        IsLoading={loading}
        findFormSubmit={filter}
      />
    </>
  );
}

export default GoodsPage;
