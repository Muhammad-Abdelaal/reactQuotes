import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  const itemId = props.id;
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link  to={`/all-quotes/${itemId}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
