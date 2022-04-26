import React from 'react';
import Popup from 'reactjs-popup';
import '../styles.css';
import 'reactjs-popup/dist/index.css';
import Collections from '../collection.json';
import Images from '../img.json';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Box,
  Heading,
  Center,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiFolder } from 'react-icons/bi';
const View = () => {
  const collectionDetails = useSelector(state => state.collectionDetails);

  function disp(item) {
    const { name, desc, fileList } = item;
    return fileList.map((file, index) => {
      return (
        <div class="card" key={index}>
            <img src={file.thumbUrl} alt={file.name} />
        </div>
      );
    });
  }
  return (
    <div>
      <Container maxW="md" align="center" style={{ marginTop: '5%' }}>
        <Box h="100px" as={Heading}>
          All Collections
        </Box>
        <SimpleGrid columns={[2, null, 3]} spacing="100px">
          {collectionDetails.map((item, i) => (
            <Center key={i}>
              <Popup
                style={{ maxHeight: '300px', overflow: 'hidden' }}
                trigger={
                  <Button
                    style={{
                      minWidth: '10vw',
                      minHeight: '20vh',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <Box>
                      {' '}
                      <BiFolder
                        size={50}
                        style={{ align: 'center' }}
                        overflow="hidden"
                      />
                    </Box>
                    
                    <Box>{item.name}</Box>
                  </Button>
                }
                modal
                nested
              >
                <Box className="modal">
                  <Heading as="h4">{item.name}</Heading>
                  <p>{item.desc}</p>
                  <br />
                  <SimpleGrid columns={[3, null, 3]} spacing="20px">
                    <Box style={{margin:"20px"}} >
                    {disp(item)}

                    </Box>
                  </SimpleGrid>
                </Box>
              </Popup>
            </Center>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default View;
