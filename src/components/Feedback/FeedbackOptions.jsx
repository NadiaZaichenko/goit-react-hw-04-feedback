import css from 'components/Feedback/FeedbackOptions.module.css'
import PropTypes from 'prop-types'

export const FeedbackOptions = ({options, onLeaveFeedBack}) => {
 return (<div className={css.btn__container}>
    {options.map(name => (
        <button 
        className={css.button}
        key={name} 
        onClick={() => onLeaveFeedBack(name)}>
        {name}
        </button>
    ))}

 </div>)
}

FeedbackOptions.propTypes ={
    options : PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedBack: PropTypes.func.isRequired,
}
