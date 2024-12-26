"use client";

import { Box, Button, Fieldset, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { Field } from "../ui/field";
import SearchLens from "@/icons/SearchLens";

interface Props {
  placeholder: string;
  width?: {
    base?: string;
    md?: string;
    lg?: string;
  };
}

const SearchForm: React.FC<Props> = ({ placeholder, width }) => {
  return (
    <Box
      as={"form"}
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
                borderWidth={"2px"}
                borderColor={"aca_primary.400"}
                borderLeft={"none"}
                roundedLeft={"none"}
                roundedRight={"full"}
                paddingX={"10px"}
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
