import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';
import { useState } from 'react';

const Participants = () => {

  const [participants, setParticipants] = useState();

  const getPart = (data) => { setParticipants(data) };

  const [loader,setLoader] = useState();

  const load_set = (status) => {
    setLoader (status)
  }


  return (
    <>
      <div className="row">
        <div className="col">
        {loader && <Loader />}
          <List participants={participants} getPart={getPart} setLoader={load_set}/>
          
          <Empty notes={[]} />
          {false && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
