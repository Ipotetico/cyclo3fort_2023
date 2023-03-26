import React, {useState} from 'react'
import Page01 from './components/Page01/Page01';
import Page02 from './components/Page02/Page02';
import Page03 from './components/Page03/Page03';
import Page04 from './components/Page04/Page04';
import Page05 from './components/Page05/Page05';
import Page06 from './components/Page06/Page06';
import Page07 from './components/Page07/Page07';

const App = () => {

  const [page, setPage] = useState(6)

  return (
    <>
{    page === 1 && <Page01 setPage={setPage}/>}
{    page === 2 && <Page02 setPage={setPage}/>}
{    page === 3 && <Page03 setPage={setPage}/>}
{    page === 4 && <Page04 setPage={setPage}/>}
{    page === 5 && <Page05 setPage={setPage}/>}
{    page === 6 && <Page06 setPage={setPage}/>}
{    page === 7 && <Page07 setPage={setPage}/>}
    </>
  );
}

export default App;