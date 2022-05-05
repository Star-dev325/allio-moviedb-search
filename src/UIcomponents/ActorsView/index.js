import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Card from '../ActorCard';
import Board from './styles';

import placeHolderMale from '../../assets/photos/male.png';
import placeHolderFemale from '../../assets/photos/female.png';

const ActorsView = ({ actors }) => (
  <Board>
    {
      actors
        && actors.map((actor, index) => <Card
          key={index}
          image={
            // eslint-disable-next-line no-nested-ternary
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              : (actor.gender === 2) ? placeHolderFemale : placeHolderMale
          }
          name={actor.name} />)
    }
  </Board>);

ActorsView.propTypes = {
  actors: propTypes.array
};

const mapStateToProps = (state) => ({ actors: state.display });

export default connect(mapStateToProps, undefined)(ActorsView);
