"use client";

import { Box, Button, Flex, Input, Fieldset } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Field } from "../ui/field";
import SearchLens from "@/icons/SearchLens";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  placeholder: string;
  width?: {
    base?: string;
    md?: string;
    lg?: string;
  };
  disabled?: boolean;
}

const ServerSearchForm: React.FC<Props> = ({
  placeholder,
  width,
  disabled,
}) => {
  const [query, setQuery] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", query);
    params.set("page", "1");
    router.push(`?${params.toString()}`);
    inputRef.current?.blur();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const currentQuery = searchParams.get("q");
    setQuery(currentQuery || "");
  }, [searchParams]);

  return (
    <Box
      as={"form"}
      onSubmit={handleSearchSubmit}
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
                ref={inputRef}
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
                value={query}
                borderWidth={"2px"}
                borderColor={"aca_primary.400"}
                borderLeft={"none"}
                roundedLeft={"none"}
                roundedRight={"full"}
                paddingX={"10px"}
                onChange={(e) => setQuery(e.target.value)} // Bind input to query state
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

export default ServerSearchForm;
