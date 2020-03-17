import React, { Component } from "react";
import ShopItem from "../ShopItem"
import "./style.css"

const dataSource = [
  {
    id: "s-1",
    url:
      "https://m.dianping.com/shop/513329?from=shoplist&shoplistqueryid=af807de1-9f6f-4a99-900b-5c7e13ebdfd0",
    pic:
      "https://img.meituan.net/msmerchant/fd1c444778ad80fb823a6d35f5cd3819391040.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20",
    shop: "Hainan Chiken",
    star: 45,
    price: 106,
    commentQuantity: 20305,
    region: "Melbourne",
    category: "Hotpot"
  },
  {
    id: "s-2",
    url:
      "https://m.dianping.com/shop/17677116?from=shoplist&shoplistqueryid=af807de1-9f6f-4a99-900b-5c7e13ebdfd0",
    pic:
      "https://img.meituan.net/msmerchant/4d572c74044624a05af25ef3e3fcdef5934234.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20",
    shop: "David Hotpot",
    star: 50,
    price: 92,
    quantity: 6715,
    region: "Melbourne",
    category: "Hotpot"
  },
  {
    id: "s-3",
    url:
      "https://m.dianping.com/shop/98576594?from=shoplist&shoplistqueryid=af807de1-9f6f-4a99-900b-5c7e13ebdfd0",
    pic:
      "https://img.meituan.net/msmerchant/18e8565c5128f990283c84fda52c66c0348452.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20",
    shop: "Yimayila",
    star: 50,
    price: 104,
    quantity: 200,
    region: "Melbourne",
    category: "Hotpot"
  },
  {
    id: "s-4",
    url:
      "https://m.dianping.com/shop/93465484?from=shoplist&shoplistqueryid=df10efdf-cc04-4e18-9bc6-17271fe4a96f",
    pic:
      "https://p0.meituan.net/mogu/775f92acf78ae7888a822ff5e46b47af30012.png.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20",
    shop: "Shudaxia",
    star: 50,
    price: 114,
    quantity: 4025,
    region: "Melbourne",
    category: "Hotpot"
  },
  {
    id: "s-5",
    url:
      "https://m.dianping.com/shop/21411786?from=shoplist&shoplistqueryid=df10efdf-cc04-4e18-9bc6-17271fe4a96f",
    pic:
      "https://img.meituan.net/msmerchant/4d572c74044624a05af25ef3e3fcdef5934234.jpg.webp@120w_120h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20",
    shop: "Damiao Hotpot",
    star: 50,
    price: 92,
    quantity: 6715,
    region: "Melbourne",
    category: "Hotpot"
  }
];

class ShopList extends Component {
  render() {
    return (
      <div className="shopList">
        <div className="shopList__filter">
          <span className="shopList__filterItem">All stores</span>
          <span className="shopList__filterItem">All categories</span>
          <span className="shopList__filterItem">Sort</span>
        </div>
        <div className="shopList__list">
          {dataSource.map((item, index) => {
            return (
              <div key={item.id}>
                <ShopItem data={item} />
                {index < dataSource.length - 1 ? (
                  <div className="shopList__divider" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopList;
