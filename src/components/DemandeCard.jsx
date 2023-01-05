import {
  Box,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const BlogTags = (props) => {
  return (
    <HStack
      spacing={2}
      marginTop={props.marginTop}
    >
      {props.tags.map((tag) => {
        return (
          <Tag
            size={'md'}
            variant="solid"
            colorScheme="orange"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const DemandeCard = ({ data }) => {
  return (
    <Box
      margin={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}
      >
        <BlogTags tags={[data.etat]} />
        <Heading marginTop="1">
          <Link
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            {data.motif}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
        >
          {data.description}
        </Text>

        <HStack gap={20}>
          <div>
            <Text>
              Date depart - {new Date(data.dateDebut).toLocaleDateString()}
            </Text>
            <Text>
              Date arrivé - {new Date(data.dateFin).toLocaleDateString()}
            </Text>
          </div>
          <div>
            <Text>Ville depart - {data.villeDepart}</Text>
            <Text>Ville arrivé - {data.villeArrive}</Text>
          </div>
          <div>
            <Text>Frais - {data.frais}DH</Text>
            <Text>Moyen transport- {data.moyenTransport}</Text>
          </div>
        </HStack>
      </Box>
    </Box>
  );
};

export default DemandeCard;
