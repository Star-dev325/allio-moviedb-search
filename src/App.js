import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { AppBody, SearchSector } from './AppStyles';
import Header from './UIcomponents/Header';
import ResultView from './UIcomponents/ResultView';
import SearchBox from './UIcomponents/SearchBox';
import getFetchData from './actions';

function App({
  setAppState, suggestedActors, addDisplayActor, displayActors
}) {
  const [text, setText] = useState('');
  const [actorList, setActorList] = useState([]);

  useEffect(async () => {
    getFetchData(text).then(
      (response) => {
        const { data } = response;
        if (data) setAppState(data.results);
      }
    );
  }, [text]);

  useEffect(() => {
    let tempActorList;
    if (suggestedActors.length >= 10) {
      tempActorList = [...suggestedActors.slice(0, 10)];
    } else if (suggestedActors.length < 10) {
      tempActorList = [...suggestedActors];
    } else return;
    setActorList(tempActorList);
  }, [suggestedActors]);

  const handleActorClick = (actor) => {
    if (displayActors.indexOf(actor) === -1) addDisplayActor(actor);
  };

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setText('');
      setActorList([]);
    } else setText(e.target.value);
  };
  return (
    <AppBody>
      <Header />
      <SearchSector>
        <SearchBox
          handleChange={handleChange}
          searchedActorList={actorList}
          handleActorClick={handleActorClick}
        />
        <ResultView/>
      </SearchSector>
    </AppBody>
  );
}

App.propTypes = {
  setAppState: propTypes.func,
  addDisplayActor: propTypes.func,
  suggestedActors: propTypes.array,
  displayActors: propTypes.array
};

const mapStateToProps = (state) => ({
  suggestedActors: state.actors,
  displayActors: state.display
});

const mapDispatchToProps = (dispatch) => ({
  setAppState: (data) => (dispatch({ type: 'UPDATE_DATA', payload: data })),
  addDisplayActor: (actors) => (dispatch({ type: 'UPDATE_DISPLAY', payload: actors }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
