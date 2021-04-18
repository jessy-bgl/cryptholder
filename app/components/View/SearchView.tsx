import React from "react";
import { List, Searchbar } from "react-native-paper";

export type SearchViewItemProps = {
  id: number;
  title: string;
};

const SearchView = (props: { array: SearchViewItemProps[] }) => {
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
        {props.array.map((props: SearchViewItemProps) =>
          props.title.toLowerCase().includes(searchQuery.toLowerCase()) ? (
            <List.Item key={props.id} {...props} />
          ) : (
            <></>
          )
        )}
      </List.Section>
    </>
  );
};

export default SearchView;
