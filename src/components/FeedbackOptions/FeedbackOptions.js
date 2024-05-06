import { Button } from "../Button/Button"
import { FeedbackOptionsList } from "./FeedbackOptions.styled"
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <FeedbackOptionsList>
        {options.map(option => {
        return <Button key={option} text={option} onLeaveFeedback={onLeaveFeedback} />
    })}
    </FeedbackOptionsList>
    
}