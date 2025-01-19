import { Flex, Text } from "@chakra-ui/react";

export const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => {
  return (
    <Flex direction="column" width="full" gap="2">
      <Text display="block" color="#783BA2">
        {label}
      </Text>
      {children}

      <Text color="red" style={{ minHeight: "20px", lineHeight: "20px" }}>
        {error || ""}
      </Text>
    </Flex>
  );
};
