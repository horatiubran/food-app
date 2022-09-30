import {useRef, useState} from "react";
import {Input} from "../../../../forms/Input/input";
import {FormComponents} from "./index";
import {submitHandler} from "../../hooks/submitHandler";


export const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    return <form onSubmit={(event) => {
        submitHandler(event, props, amountInputRef, setAmountIsValid)
    }}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        <FormComponents.Button/>
        <FormComponents.InfoParagraph/>
        <FormComponents.ErrorParagraph amountIsValid={amountIsValid}/>
    </form>
}