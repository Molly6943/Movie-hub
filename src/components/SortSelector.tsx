import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "popularity.asc", label: "popularity.asc" },
    { value: "popularity.desc", label: "popularity.desc" },
    {value: "original_title.asc", label: 'original_title.asc'},
    { value: "original_title.desc", label: "original_title.desc" },
    { value: "revenue.asc", label: "revenue.asc" },
    { value: "revenue.desc", label: "revenue.desc" },
    { value: "primary_release_date.asc", label: "primary_release_date.asc" },
    { value: "primary_release_date.desc", label: "primary_release_date.desc" },
    { value: "vote_average.asc", label: "vote_average.asc" },
    { value: "vote_average.desc", label: "vote_average.desc" },
    { value: "vote_count.asc", label: "vote_count.asc" },
    { value: "vote_count.desc", label: "vote_count.desc" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
