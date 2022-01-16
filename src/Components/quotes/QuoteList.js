import { Fragment } from 'react';
import { quoteActions } from '../../store/store';
import {useDispatch , useSelector} from 'react-redux';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const quotes = useSelector(state => state.quote.quotes)
  const dispatch = useDispatch();
  return (
    <Fragment>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
