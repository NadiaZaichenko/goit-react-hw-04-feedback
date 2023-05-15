import css from 'components/Feedback/FeedbackOptions.module.css'
import PropTypes from 'prop-types'

export const FeedbackOptions = ({options, onLeaveFeedBack}) => {
 return (<div className={css.btn__container}>
    {options.map(option => (
        <button type="button"
        className={css.button}
        key={option} 
        onClick={() => onLeaveFeedBack(option)}>
        {option}
        </button>
    ))}

 </div>)
}

FeedbackOptions.propTypes ={
    options : PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedBack: PropTypes.func.isRequired,
}
