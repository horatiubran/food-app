export const ErrorParagraph = ({amountIsValid}) => {
    return<>
        {!amountIsValid && <p>Please insert a valid amount. (1-5)</p>}
    </>
}


