import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { authOperations } from "redux/auth/auth-operations"; 
import {getUserName} from 'redux/auth/auth-selectors'
import { Button } from "../ContactForm/ContactForm.styled";
import { GreetText } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
     const userName = useSelector(getUserName);
    const navigate = useNavigate();

    return (
        <div>
            <GreetText>Welcome {userName}!</GreetText>
            <Button type="button" onClick={() => {
                dispatch(authOperations.logOut());
                navigate('/')
            }}>
                LogOut
            </Button>
        </div>
    )
}