import AddVector from "../../assets/images/svg/AddVector.svg"



const HiredPurchaseBody = () => {
    return(
        <div className="hp-main-frame">
            <div className="hp-header-frame">
                <h1 className="hp-h1-tag">Hired Purchase</h1>
                <button id="hp-new-purchase-button">Add New Purchase
                    <img id="hp-new-purchase-button-add-vector-img" src={AddVector}/></button>
                <button id="hp-repay-purchase-button">Repay Hire Purchase</button>
            </div>
            <div className="hp-report-frame"></div>
            <div className="hp-activity-frame"></div>
        </div>
    )
}

export default HiredPurchaseBody;