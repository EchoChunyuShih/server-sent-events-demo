import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { childSelector } from './store/selectors';
import * as ChildActions from './store/actions';
import { ActionButtons, ChildContainer, NavigateButton, TypingEffect } from '../../components/StyledComponents/Child';

export const Child: React.FC<any> = () => {
  const dispatch = useDispatch();

  const { content } = useSelector(childSelector);

  useEffect(() => {
    dispatch(ChildActions.subscribe());

    // unsubscribe to event source while component unmount.
    return () => {
      dispatch(ChildActions.unsubscribe());
    };
  }, [dispatch]);

  return (
    <ChildContainer>
      <TypingEffect>{content}</TypingEffect>
      <ActionButtons>
        <NavigateButton type="button" onClick={() => dispatch(ChildActions.unsubscribe())}>
          STOP
        </NavigateButton>
        <NavigateButton type="button" onClick={() => dispatch(ChildActions.navigateToHome())}>
          BACK
        </NavigateButton>
      </ActionButtons>
    </ChildContainer>
  );
};
