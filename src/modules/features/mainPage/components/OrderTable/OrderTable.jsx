import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {ordersActions} from "../../store/orders";
import {searchOrders} from "../../store/search";
import {Wrapper, Overlay, OrderForm} from "../../components";
import {Table, Thead, Tbody} from "../Table";
import {getOrdersPageNumber} from "../../store/pagination";

export const OrderTable = ({children}) => {
  const [sortOption, setSortOption] = useState({value: '', isAscending: false});
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [selectOrder, setSelectOrder] = useState({});

  const dispatch = useDispatch();
  const orders = useSelector((state) => getOrdersPageNumber(searchOrders(state)));

  const handleSort = useCallback((nameKey) => {
    const {isAscending} = sortOption;
    dispatch(ordersActions.sort({isAscending: !isAscending, nameKey}));
    setSortOption({
      value: nameKey,
      isAscending: !isAscending
    });
  }, [dispatch, sortOption]);

  const handleAllSelect = useCallback((status) => {
    dispatch(ordersActions.selectGroup({
      status,
      ordersIds: orders.map(({id}) => id),
    }));
  }, [orders, dispatch]);

  const handleSelect = useCallback((id, status) => {
    dispatch(ordersActions.select({id, status}));
  }, [dispatch]);

  const handleEditOrder = useCallback((order) => {
    setSelectOrder(order);
    setIsOpenForm(true);
  }, []);

  const handleCloseForm = useCallback(() => {
    setIsOpenForm(false);
    setTimeout(() => setSelectOrder({}), 400);
  }, []);

  return (
    <>
      <Wrapper>
        <Table>
          <Thead onAllSelect={handleAllSelect} onSort={handleSort} select={sortOption.value} isAscending={sortOption.isAscending} />
          <Tbody orders={orders} onSelect={handleSelect} onEdit={handleEditOrder} />
        </Table>
      </Wrapper>
      <OrderForm isOpen={isOpenForm} onClose={handleCloseForm} order={selectOrder} />
      <Overlay show={isOpenForm} onClick={handleCloseForm} />
    </>
  );
};
