import { FC } from "react";

interface ShopItemFuncProps {
  item: {
    brand: string;
    title: string;
    description: string;
    descriptionFull: string;
    price: number;
    currency: string;
  };
}

type Props = Readonly<ShopItemFuncProps>;

const ShopItemFunc: FC<Props> = ({
  item = {
    brand: "brand",
    title: "title",
    description: "description",
    descriptionFull: "descriptionFull",
    price: 0,
    currency: "currency",
  },
}) => {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          {item.currency}
          {item.price.toFixed(2)}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItemFunc;
export type { ShopItemFuncProps };
