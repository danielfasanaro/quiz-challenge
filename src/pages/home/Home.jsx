import React from 'react';
import { useDispatch } from 'react-redux';

import Title from '../../components/Title';
import CenterText from '../../components/CenterText';
import TextInput from '../../components/TextInput';
import LinkButton from '../../components/LinkButton';
import { changeUser, getToken } from '../../redux/reducers';

function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <Title>!!!WELCOME TO QUIZ!!!</Title>
      <CenterText>
        <span>10 questions will be shown to you.</span>
        <span>Can you get maximum score?</span>
      </CenterText>
      <TextInput
        id="user"
        onChange={ ({ target }) => dispatch(changeUser(target.value)) }
      >
        Digite seu nome:
      </TextInput>
      <LinkButton
        path="/quiz"
        onClick={ () => dispatch(getToken()) }
      >
        START
      </LinkButton>
    </>
  );
}

export default Home;
