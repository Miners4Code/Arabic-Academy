"use client";

import { Box, Button, Flex, Input, Fieldset } from "@chakra-ui/react";
import React, { useState } from "react";
import { Field } from "../ui/field";
import SearchLens from "@/icons/SearchLens";

interface Props {
  placeholder: string;
  width?: {
    base?: string;
    md?: string;
    lg?: string;
  };
  onSearch: (query: string) => void;
  disabled?: boolean;
  defaultValue?: string
}

const SearchForm: React.FC<Props> = ({
  placeholder,
  width,
  onSearch,
  disabled,
  defaultValue
}) => {
  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query); // Trigger search when form is submitted
  };

  return (
    <Box
      as={"form"}
      onSubmit={handleSearchSubmit} // Bind form submission to handleSearchSubmit
      width={{
        base: width?.base ?? "300px",
        md: width?.md ?? "770px",
        lg: width?.lg ?? "720px",
      }}
    >
      <Fieldset.Root>
        <Fieldset.Content>
          <Field>
            <Flex
              width={{
                base: width?.base ?? "300px",
                md: width?.md ?? "770px",
                lg: width?.lg ?? "720px",
              }}
            >
              <Input
                height={{
                  base: "50px",
                  md: "75px",
                  lg: "65px",
                }}
                width={{
                  base: "82%",
                  md: "90%",
                }}
                placeholder={placeholder}
                defaultValue={defaultValue}
                borderWidth={"2px"}
                borderColor={"aca_primary.400"}
                borderLeft={"none"}
                roundedLeft={"none"}
                roundedRight={"full"}
                paddingX={"10px"}
                onChange={handleSearchChange} // Bind input to query state
                disabled={disabled}
              />
              <Flex
                height={{
                  base: "50px",
                  md: "75px",
                  lg: "65px",
                }}
                width={{
                  base: "18%",
                  md: "10%",
                }}
                justify={"center"}
                align={"center"}
                borderWidth={"2px"}
                borderColor={"aca_primary.400"}
                roundedLeft={"full"}
              >
                <Button
                  width={"inherit"}
                  height={"inherit"}
                  bgColor={"transparent"}
                  type="submit" // Trigger search on form submit
                >
                  <SearchLens />
                </Button>
              </Flex>
            </Flex>
          </Field>
        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  );
};

export default SearchForm;
