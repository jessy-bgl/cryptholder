import React from "react";
import { List, Searchbar } from "react-native-paper";
import { ConfigParam, ConfigType } from "../../config/config";
import ItemIonicon from "../Icon/ItemIonicon";

export type SearchViewProps<T extends ConfigType> = {
  array: ConfigParam<T>[];
  defaultKey?: string;
  onPress: (value: string) => void;
};

const SearchList = <T extends ConfigType>({
  array,
  defaultKey,
  onPress,
}: SearchViewProps<T>) => {
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
        {array.map(
          ({ id, title }: ConfigParam<T>) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <List.Item
                key={id}
                title={title}
                right={() =>
                  id == defaultKey ? <ItemIonicon name="checkmark" /> : <></>
                }
                onPress={() => onPress(id)}
              />
            )
        )}
      </List.Section>
    </>
  );
};

export default SearchList;
