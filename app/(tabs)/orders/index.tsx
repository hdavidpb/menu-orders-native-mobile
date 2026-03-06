import OrderCart from "@/presentation/orders/components/OrderCart";
import React from "react";
import { FlatList } from "react-native";

const OrdersScreen = () => {
  return (
    <FlatList
      data={[1, 2, 3]}
      keyExtractor={(item) => item.toString()}
      renderItem={() => <OrderCart />}
    />
  );
};

export default OrdersScreen;
