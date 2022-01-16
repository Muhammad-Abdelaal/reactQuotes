import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quoteActions } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const quotesList = useSelector(state => state.quote.quotes);
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quotesArrLength = useSelector(state => state.quote.quotes.length);
  const rndmId = quotesArrLength+1;

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    dispatch(quoteActions.addQuote({ id:`q${rndmId}`,author: enteredAuthor, text: enteredText }));
    dispatch(quoteActions.triggerAction());
    navigate('/all-quotes');
    authorInputRef.current.value = '';
    textInputRef.current.value = '';
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button type='sumbit' className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
