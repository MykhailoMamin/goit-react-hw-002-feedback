export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        {options.map((option) => (
            <button key={option} name={option} onClick={() => (onLeaveFeedback(option)) }>{option}</button>    
        ))}      
    </div>   
    )
}