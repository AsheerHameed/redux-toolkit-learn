import Chance from "chance";
const chance = new Chance();

export const fakeUserData = () => {
    console.log(chance.name({midde:true}))
    return chance.name({ midde: true }); 
}