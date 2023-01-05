import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DemandeCard from '../components/DemandeCard';
import Navbar from '../components/Navbar';

const DemandeListPage = () => {
  const [demandes, setDemandes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8086/api/v1/demandes').then((d) => {
      console.log(d.data['_embedded'].demandes);
      setDemandes(d.data['_embedded'].demandes);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Container
        bg={useColorModeValue('gray.50', 'gray.800')}
        maxW={'100%'}
      >
        <Container
          maxW={'6xl'}
          p="12"
        >
          <Heading
            as="h1"
            margin={10}
          >
            List des demandes:
          </Heading>
          <hr />
          {demandes.map((demande) => {
            return (
              <>
                <DemandeCard data={demande} />
                <hr />
              </>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default DemandeListPage;
