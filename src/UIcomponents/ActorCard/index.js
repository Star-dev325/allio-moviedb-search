import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import {
  NameBar, CardBody, OverLayer, DeleteButton
} from './styles';

const Img = lazy(() => import('./img'));

const Card = ({ image, name, deleteActor }) => {
  const handleDelete = (e, actorName) => {
    e.preventDefault();
    deleteActor(actorName);
  };
  return (
    <Suspense fallback={<h4>Just...</h4>}>
      <CardBody>
        <OverLayer>
          <DeleteButton onClick={(e) => { handleDelete(e, name); }}>Delete</DeleteButton>
        </OverLayer>
        <Img src={image} name={name}/>
        <NameBar>{name}</NameBar>
      </CardBody>
    </Suspense>
  );
};

Card.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  deleteActor: propTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  deleteActor: (actorName) => { dispatch({ type: 'DELETE_ACTOR', actorName }); }
});

export default connect(undefined, mapDispatchToProps)(Card);
