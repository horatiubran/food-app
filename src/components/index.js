import { List } from "./listComponents";
import { RenderedList } from "./menu-list";

export const Components = () => {
  return (
    <div>
      <h1>The FoodMenu</h1>
      <List>
        <RenderedList />
      </List>
    </div>
  );
};
