import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  color,
  useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { devNull } from "os";

interface NetworksGridProps {
  imagePaths: string[];
  title: string;
}

function sliceArrayWithPattern<T>(arr: T[]): T[][] {
  const result: T[][] = [];
  let currentIndex = 0;

  while (currentIndex < arr.length) {
    if (currentIndex + 5 <= arr.length) {
      // Slice 5 elements if there are at least 5 elements remaining
      result.push(arr.slice(currentIndex, currentIndex + 5));
      currentIndex += 5;
    } else {
      // Otherwise, slice the remaining elements (less than 5)
      result.push(arr.slice(currentIndex));
      currentIndex = arr.length; // Exit the loop
    }

    if (currentIndex < arr.length) {
      // Slice 4 elements if there are more elements remaining
      result.push(arr.slice(currentIndex, currentIndex + 4));
      currentIndex += 4;
    }
  }

  return result;
}

export default function NetworksGrid({ imagePaths, title }: NetworksGridProps) {
  const rowPaths = sliceArrayWithPattern(imagePaths);

  return (
    <>
      <Flex justifyContent={"center"} p={6}>
        <Heading>{title}</Heading>
      </Flex>
      <Box pl={"10%"}>
        {rowPaths.map((rowData, rowIndex) => (
          <Grid
            title="Networks"
            key={rowIndex}
            templateColumns="repeat(5, 1fr)"
          >
            {rowData.map((path, index) => (
              <GridItem key={index}>
                <Flex
                  p={2}
                  _hover={{ transform: "translateY(-10px)" }}
                  transition="transform 0.3s ease-in-out"
                  width={"full"}
                  style={{
                    justifyContent: rowIndex % 2 === 0 ? "left" : "right",
                  }}
                >
                  <Image src={path} width={"160px"} p={4} />
                </Flex>
              </GridItem>
            ))}
          </Grid>
        ))}
      </Box>
    </>
  );
}
