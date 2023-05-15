import PropTypes from 'prop-types'
import css from 'components/Feedback/Statistics.module.css'
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
                <div className={css.p__container}>
                <p id="good">Good: {good}</p>
                <p id="neutral">Neutral: {neutral}</p>
                <p id="bad">Bad: {bad} </p>
                <p id="total">Total:{total}</p>
                <p id="positive">Positive feedback:{positivePercentage}%</p>
                </div>
        </>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total:  PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}