import React from "react";
import { List, Searchbar } from "react-native-paper";
import ItemIonicon from "../Icon/ItemIonicon";

export type SearchViewItemProps = {
  id: number | string;
  title: string;
  isSelected?: boolean;
  onPress?: (value: string) => void;
};

export type SearchViewProps = {
  array: SearchViewItemProps[];
  defaultKey?: string | number;
  onPress?: (value: string) => void;
};

const SearchViewItem = ({
  id,
  title,
  isSelected,
  onPress,
}: SearchViewItemProps) => {
  return (
    <List.Item
      key={id}
      title={title}
      right={() => (isSelected ? <ItemIonicon name="checkmark" /> : <></>)}
      onPress={() => onPress(id.toString())}
    />
  );
};

const SearchView = ({ array, defaultKey, onPress }: SearchViewProps) => {
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
              onPress={onPress}
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
