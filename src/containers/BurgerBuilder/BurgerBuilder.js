import React,{ Component } from 'react';
import Aux from '../../components/HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 30,
    bacon: 50,
    meat: 80
}

class BurgerBuilder extends Component{

    // constructor(){
    //     super(this.props);
    //     this.state= {...}
    // }

    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 100,
        purchasable: false
    }
    
    updatePurchaseStateHandler = (ingredients)=>{
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce( (sum, el) => {
                return sum+el;
            }, 0);
            this.setState({purchasable: sum>0 });
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseStateHandler(updatedIngredients);
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){ return;}
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseStateHandler(updatedIngredients);
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div><BuildControls
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled = {disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        /> </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;