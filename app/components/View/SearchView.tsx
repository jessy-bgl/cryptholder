import React from "react";
import { List, Searchbar } from "react-native-paper";
import ItemIonicon from "../Icon/ItemIonicon";

export type SearchViewItemProps = {
  id: number | string;
  title: string;
  isSelected?: boolean;
};

export type SearchViewProps = {
  array: SearchViewItemProps[];
  defaultKey?: string | number;
};

const SearchViewItem = ({ id, title, isSelected }: SearchViewItemProps) => {
  return (
    <List.Item
      key={id}
      title={title}
      right={() => (isSelected ? <ItemIonicon name="checkmark" /> : <></>)}
    />
  );
};

const SearchView = ({ array, defaultKey }: SearchViewProps) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <List.Section>
        {array.map(({ id, title }: SearchViewItemProps) =>
          title.toLowerCase().includes(searchQuery.toLowerCase()) ? (
            <SearchViewItem
              id={id}
              title={title}
              isSelected={defaultKey == id}
            />
          ) : (
            <></>
          )
        )}
      </List.Section>
    </>
  );
};

export default SearchView;
