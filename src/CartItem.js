import React from "react";
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: "Mobile phone",
            qty: 1,
            img: "",
        };
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 2,
            };
        });
    };
    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1,
            };
        });
    };
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>Rs {price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/4315/premium/4315609.png?token=exp=1647361679~hmac=843cd5751a28d87612d24734bb90200f"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1647361614~hmac=bc3c9b07b21afdb5980457d3fe76e512"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/4442/premium/4442016.png?token=exp=1647361725~hmac=0afbfc49721821856e5006a0a5dc314d"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc",
    },
};

export default CartItem;
