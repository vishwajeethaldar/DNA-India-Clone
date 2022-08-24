import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header/Header';
import { TopnewsSlider } from '../Components/Topnews/TopnewsSlider';
import { AppContext } from '../Context/AppContext';
import { ACTIONTYPES } from '../Context/actiontypes';
import { Footer } from '../Components/Footer/Footer';
import {Skeleton,Stack,Grid, GridItem, Box} from '@chakra-ui/react'
import { LeftNavbar } from '../Components/LeftNavbar/LeftNavbar';
import { BodyArea } from '../Components/Body/BodyArea';
export const Homepage = () => {
  const {state, dispatch} = useContext(AppContext);

  useEffect(()=>{
    dispatch({type:ACTIONTYPES.LOADING, payLoad:false})
  }, []);

  return (
    <Stack w="100%">
     
       <Skeleton isLoaded={!state.isLoading}>
          <Header />
      </Skeleton>
      
      <Skeleton isLoaded={!state.isLoading}>
      <TopnewsSlider />
      </Skeleton>

      <BodyArea  />
      <Box marginLeft={'50px'} w={['98%', '90%', '90%']}>
        
        {/* <Grid minH="500px"  border='1px solid red'>
            
        </Grid> */}
      </Box>
      

      <Footer />
    </Stack>
  )
}