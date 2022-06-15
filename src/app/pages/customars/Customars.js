import React from "react";
import { AsideBar, Input, TopBar, CustomarTable } from "../../components";
import "./customar.module.min.css";
import { memberData } from '../../dummy/memberData/memberData';

const headerData = ["ID", "JOINING DATE", "NAME", "EMAIL", "PHHONE", "ACTIONS"]


const Customars = () => {
  return (
    <>
      <TopBar />
      <AsideBar />
      <section className="customar">
        <div className="container">
          <div className="customar_container">
            <h3>Customers</h3>
            <div className="search_box">
              <Input type="text" placeholder="Search by name/email/phone" />
            </div>
            <div className="table_item">
            <table className="table_data">
              <thead>
                <tr>
                  {headerData.map((name, index) => (
                    <td key={index}>{name}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {memberData.map(
                  (
                    { id, joinDate, name, email, phone},
                    index
                  ) => (
                    <CustomarTable
                      key={index}
                      id={id}
                      joinDate={joinDate}
                      name={name}
                      email={email}
                      phone={phone}
                    />
                  )
                )}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customars;
