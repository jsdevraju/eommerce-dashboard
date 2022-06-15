import React from "react";
import "./home.module.min.css";
import { Revenue, OrderInfoCard, TopBar, AsideBar } from "../../components";
import { GiReceiveMoney } from "react-icons/gi";
import { BsCart2, BsCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineReload } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { VerticalBar } from "../../components/chart/verticalBar/VerticalBar";
import { PirChart } from "../../components/chart/pie/Pie";

const Home = () => {
  return (
    <>
      <TopBar />
      <AsideBar />
      <section className="home">
        <div className="container">
          <div className="home_dash">
            <h3>Dashboard Overview</h3>
            <div className="revenue_card_container">
              <Revenue
                title="Today Order"
                icon={<GiReceiveMoney size={30} />}
                price="300"
                color="#0694a2"
              />
              <Revenue
                title="This Month"
                icon={<BsCart2 size={30} />}
                price="5000"
                color="#3f83f8"
              />
              <Revenue
                title="Total Order"
                icon={<BsCreditCard2BackFill size={30} />}
                price="95000"
                color="#0e9f6e"
              />
            </div>
            <div className="productOrder_info">
              <OrderInfoCard
                number={188}
                color="#fcd9bd"
                title="Total Order"
                icon={<BsCart2 size={20} />}
              />
              <OrderInfoCard
                number={68}
                color="#c3ddfd"
                title="Order Pending"
                icon={<AiOutlineReload size={20} />}
              />
              <OrderInfoCard
                number={66}
                color="#afecef"
                title="Order Processing"
                icon={<TbTruckDelivery size={20} />}
              />
              <OrderInfoCard
                number={68}
                color="#bcf0da"
                title="Order Delivered"
                icon={<AiOutlineCheck size={20} />}
              />
            </div>
            <div className="charts">
              <div className="left">
                <VerticalBar />
              </div>
              <div className="right">
                <PirChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
