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
import axios from 'axios';
import { Select } from 'chakra-react-select';
import { State } from 'country-state-city';
import { useState } from 'react';

const DemandeForm = () => {
  const [transport, setTransport] = useState('');
  const [villeDep, setVilleDep] = useState('');
  const [villeAr, setVilleAr] = useState('');
  const [etat, setEtat] = useState('');

  let cities = State.getStatesOfCountry('MA').map((city) => {
    return {
      value: city.name,
      label: city.name
    };
  });

  const transports = ['Voiture', 'Bus', 'Train', 'Avion'].map((t) => {
    return {
      value: t,
      label: t
    };
  });

  const etats = ['EN_COURS', 'VALIDE', 'REFUSE', 'EN_ATTENTE'].map((t) => {
    return {
      value: t,
      label: t
    };
  });

  const addDemande = (event) => {
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const data = {
      motif: elements.motif.value,
      description: elements.description.value,
      moyenTransport: transport,
      frais: elements.frais.value,
      dateDebut: elements['date-dep'].value,
      dateFin: elements['date-ar'].value,
      villeDepart: villeDep,
      villeArrive: villeAr,
      etat: etat
    };

    console.log(data);

    axios
      .post('http://localhost:8086/api/v1/demandes', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((d) => console.log(d));
  };

  return (
    <Box
      w="200%"
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}
    >
      <form onSubmit={addDemande}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Motif:</FormLabel>
            <Input
              id="motif"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Frais:</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1em"
                children="$"
              />
              <Input
                id="frais"
                placeholder="Enter amount"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Moyen de transport:</FormLabel>
            <Select
              inputId="transport"
              options={transports}
              onChange={(v) => setTransport(v.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Ville de départ:</FormLabel>
            <Select
              inputId="ville-dep"
              options={cities}
              onChange={(v) => setVilleDep(v.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Ville d'arrivé:</FormLabel>
            <Select
              inputId="ville-ar"
              options={cities}
              onChange={(v) => setVilleAr(v.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date de départ:</FormLabel>
            <Input
              id="date-dep"
              type="date"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date d'arrivé:</FormLabel>
            <Input
              id="date-ar"
              type="date"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description: </FormLabel>
            <Textarea id="description" />
          </FormControl>
          <FormControl>
            <FormLabel>Etats: </FormLabel>
            <Select
              inputId="etats"
              options={etats}
              onChange={(v) => setEtat(v.value)}
            />
          </FormControl>
          <Stack spacing={10}>
            <Button
              type="submit"
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
      </form>
    </Box>
  );
};

export default DemandeForm;
