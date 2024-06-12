import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        text={showAdd ? 'Close' : 'Add'} 
        color={showAdd ? 'red' : ''} 
        onClick={onAdd} 
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'The To-Do Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
};

export default Header;
