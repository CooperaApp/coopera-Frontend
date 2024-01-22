import AddVector from "../../assets/images/svg/AddVector.svg"
import { LuSearch } from "react-icons/lu";
import MoneyTime from "../../assets/images/svg/MoneyTime-hp.svg";
import ShoppingCart from "../../assets/images/svg/ShoppingCart-hp.svg";
import ArrowOptions from "../../assets/images/svg/Arrow-Options.svg";
import GreenArrow from "../../assets/images/svg/Green-Arrow.svg";
import RedArrow from "../../assets/images/svg/Red-Arrow.svg";
import CashIcon from "../../assets/images/svg/CashIcon-hp.svg"
import HpTable from "../molecule/HpTable.jsx";
import FilterIcon from "../../assets/images/svg/FilterIcon-hp.svg"

const HiredPurchaseBody = () => {
    return(
        <div className="hp-main-frame">
            <div className="hp-header-frame">
                <h1 className="hp-h1-tag">Hired Purchase</h1>
                <button id="hp-new-purchase-button">Add New Purchase
                    <img id="hp-new-purchase-button-add-vector-img" src={AddVector}/></button>
                <button id="hp-repay-purchase-button">Repay Hire Purchase</button>
            </div>
            <div className="hp-report-frame">
                <div className="t-active-hp-card">
                    <div className="h-32  p-0 ">
                            <div className="p-0 flex justify-between mb-2">
                                <div>
                                    <p className="hp-card-title">Total Active Hired Purchases</p>
                                    <p className="mt-3 w-full hp-number">13</p>
                                </div>
                                <div
                                    className="ml-4 h-7 rounded-md items-center"
                                    style={{ backgroundColor: "#F2EBFB" }}
                                >
                                    <img src={ShoppingCart} alt="No Img" />
                                </div>
                            </div>
                            <div className="justify-between mt-4 flex h-7">
                                <div
                                    className="flex rounded h-full w-20"
                                    style={{ backgroundColor: "#E7F8F0" }}
                                >
                                    <img src={GreenArrow} alt="No Img" className="" />
                                    <p
                                        className="percentage-figure pl-2 mt-0.5"
                                        style={{ color: "#12B76A" }}
                                    >
                                        17%
                                    </p>
                                </div>
                                <div className="items-center justify-center h-full flex border h-4 w-30">
                                    <p className="hp-previous-month-styling ml-2">
                                        vs previous month
                                    </p>
                                    <img
                                        src={ArrowOptions}
                                        alt="No Img"
                                        className="w-4 h-4 ml-1 mt-0"
                                    />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="t-value-hp-card">
                    <div className="h-32  p-0 ">
                        <div className="p-0 flex justify-between mb-2">
                            <div>
                                <p className="hp-value-card-title">Total Value of Hired Purchases</p>
                                <p className="mt-3 w-full hp-value-card-amount">₦405,607.00</p>
                            </div>
                            <div
                                className="ml-4 h-7 rounded-md items-center"
                                style={{ backgroundColor: "#E7F8F0" }}
                            >
                                <img src={CashIcon} alt="No Img" />
                            </div>
                        </div>
                        <div className="justify-between mt-4 flex h-7">
                            <div
                                className="flex rounded h-full w-20"
                                style={{ backgroundColor: "#FEECEB" }}
                            >
                                <img src={RedArrow} alt="No Img" className="" />
                                <p
                                    className="percentage-figure pl-2 mt-0.5"
                                    style={{ color: "#F04438" }}
                                >
                                    0.7%
                                </p>
                            </div>
                            <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                                <p className="hp-previous-month-styling ml-2">
                                    vs previous month
                                </p>
                                <img
                                    src={ArrowOptions}
                                    alt="No Img"
                                    className="w-4 h-4 ml-1 mt-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="t-remaining-balance-card">
                    <div className="h-32  p-0 ">
                        <div className="p-0 flex justify-between mb-2">
                            <div>
                                <p className="hp-balance-card-title">Total Remaining Balance</p>
                                <p className="mt-3 w-full hp-value-card-amount">₦120,432.00</p>
                            </div>
                            <div
                                className="ml-4 h-7 rounded-md items-center"
                                style={{ backgroundColor: "#E7F8F0" }}
                            >
                                <img src={MoneyTime} alt="No Img" />
                            </div>
                        </div>
                        <div className="justify-between mt-4 flex h-7">
                            <div
                                className="flex rounded h-full w-20"
                                style={{ backgroundColor: "#FEECEB" }}
                            >
                                <img src={RedArrow} alt="No Img" className="" />
                                <p
                                    className="percentage-figure pl-2 mt-0.5"
                                    style={{ color: "#F04438" }}
                                >
                                    0.7%
                                </p>
                            </div>
                            <div className="items-center justify-center h-full flex border h-4 w-30 ml-3">
                                <p className="hp-previous-month-styling ml-2">
                                    vs previous month
                                </p>
                                <img
                                    src={ArrowOptions}
                                    alt="No Img"
                                    className="w-4 h-4 ml-1 mt-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Value-Amount-P-Tag-frame"><p className="Value-Amount-P-Tag">Value Amount</p></div>
            <div className="hp-activity-frame">
                <div className="hp-activity-header">
                    <div className="hp-table-header"><p>Hire Purchase Activity</p></div>
                    <div className="border flex justify-between">
                        <div className=" max-w-md relative flex items-center text-gray-400 focus-within:text-gray-600">
                            <LuSearch className="w-4 h-5 absolute mr-6 pointer-events-none" />
                            <input
                                type="text"
                                name="search"
                                placeholder="Search members..."
                                autoComplete="off"
                                aria-label="Search"
                                className="hp-search-bar text-blue rounded-sm border-none ring-2 ring-gray-100 focus:ring-gray-500 focus:ring-2"
                                style={{ backgroundColor: "#FFFFFF" }}
                            />
                        </div>
                        <div className="border items-center justify-center flex ml-3">
                            <p className="hp-filter ng ml-2">Filter</p>
                            <img
                                src={FilterIcon}
                                alt="No Img"
                                className="hp-filter-icon w-4 h-4 ml-1 mt-0"
                            />
                        </div>
                    </div>
                </div>
                <HpTable/>
            </div>
        </div>
    )
}

export default HiredPurchaseBody;