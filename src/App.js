import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './components/Main/Feed';
//import Video from './components/Video/Video';
import SearchFeed from './components/Search/SearchFeed';
import Channel from './components/Channel/Channel';
import NavBar from './components/Main/NavBar';

const Video = lazy(() => import('./components/Video/Video'));
const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#fff'}}>
            <NavBar/>
            <Routes>
                <Route path='/' exact element={<Feed />}/>
                <Route path='/video/:id' element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <Video />
                    </Suspense>
                }/>
                <Route path='/channel/:id' element={<Channel />}/>
                <Route path='/search/:searchTerm' element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App;