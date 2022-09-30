import {MealItemForm} from "./MealItemFormComponents/MealItemForm";
import {useAddCartItem} from "../hooks/useAddCartItem";
import {ItemContainer} from "./ItemContainer";
import {BodyContainer} from "./BodyContainer";
import {MealItemFormContainer} from "./MealItemFormComponents/MealItemFormContainer";
import {Food} from "./FoodData"


export const Item = ({id, foodName, description, price = 0}) => {
    const handle = useAddCartItem({id, foodName, price})

    return <ItemContainer id={id}>
        <Food.Image/>
        <BodyContainer>
            <Food.Title foodName={foodName}/>
            <Food.Description description={description}/>
            <Food.Price price={price}/>
            <MealItemFormContainer>
                <MealItemForm onAddToCart={handle}/>
            </MealItemFormContainer>
        </BodyContainer>
    </ItemContainer>
}