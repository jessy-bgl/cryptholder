import React from "react";
import { List, Searchbar } from "react-native-paper";
import ItemIonicon from "../Icon/ItemIonicon";

export type SearchViewArrayProps = {
  id: string;
  title: string;
};

export type SearchViewProps = {
  array: SearchViewArrayProps[];
  defaultKey?: string;
  onPress: (value: string) => void;
};

const SearchList = ({ array, defaultKey, onPress }: SearchViewProps) => {
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
        {array.map(({ id, title }: SearchViewArrayProps) =>
          title.toLowerCase().includes(searchQuery.toLowerCase()) ? (
            <List.Item
              key={id}
              title={title}
              right={() =>
                id == defaultKey ? <ItemIonicon name="checkmark" /> : <></>
              }
              onPress={() => onPress(id)}
            />
          ) : (
            <></>
          )
        )}
      </List.Section>
    </>
  );
};

export default SearchList;
