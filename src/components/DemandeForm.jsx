import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import { CityLite } from 'country-state-city-js';

const DemandeForm = () => {
  console.log(CityLite('MA'));

  return (
    <Box
      w="200%"
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
    >
      <Stack spacing={4}>
        <FormControl id="motif">
          <FormLabel>Motif:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="frais">
          <FormLabel>Frais:</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1em"
              children="$"
            />
            <Input placeholder="Enter amount" />
          </InputGroup>
        </FormControl>
        <FormControl id="transport">
          <FormLabel>Moyen de transport:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="ville-dep">
          <FormLabel>Ville de départ:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="ville-ar">
          <FormLabel>Ville d'arrivé:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="date-dep">
          <FormLabel>Date de départ:</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl id="date-ar">
          <FormLabel>Date d'arrivé:</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description: </FormLabel>
          <Textarea />
        </FormControl>
        <Stack spacing={10}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500'
            }}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DemandeForm;
