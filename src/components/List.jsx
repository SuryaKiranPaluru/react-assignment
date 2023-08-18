import PropTypes from 'prop-types';
import Item from './Item';
import { useEffect } from 'react';
import NoteService from '../services/ParticipantService';
import Loader from './Loader';

const List = ({ participants, getPart, setLoader}) => {

  useEffect(() => {
    // should not use async with useeffect so creating a new function
    const getAllPartp = async () => {

      try{
          setLoader(true)
          const data = await NoteService.getAll();
          getPart(data);
          setLoader(false)
      }
      catch (error){
        window.alert(`Error ${error.message}`);
      }

    }
    getAllPartp();
  } ,[]);

  return (
    <>
      {participants &&
        participants.map(participant => (
          <Item
            participant={participant}
            key={participant.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  participants: PropTypes.array,
};
