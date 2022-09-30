import {onSubmit} from "./form-components/onSubmit";
import {FormContainer} from "./form-components/FormContainer";
import {Title} from "./form-components/Title";
import {Details} from "./form-components/Details";
import {Contact} from "./form-components/Contact";
import {AdditionalInformation} from "./form-components/AdditionalInformation";
import {Button} from "./form-components/Button";

export const CheckoutForm = () => {
    return <>
        <FormContainer>
            <Title/>
            <form onSubmit={onSubmit}>
                <Details/>
                <Contact/>
                <AdditionalInformation/>
                <Button/>
            </form>
        </FormContainer>
    </>
}

