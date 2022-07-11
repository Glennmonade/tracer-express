import { useField } from "formik";
import {FormLabel, FormInput, StyledIcon, ErrorMsg} from './styles';



export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div style={{position: "relative"}}>
            <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            {props.type !== "password" && 
            (
                <FormInput 
                    invalid={meta.touched && meta.error}
                    {...field} {...props}
                />
            )}
            {
                props.type === "password" && (
                    <FormInput 
                        invalid={meta.touched && meta.error}
                        {...field} {...props}
                    />
                )
            }
            <StyledIcon>{icon}</StyledIcon>

            {
                meta.touched && meta.error ? (
                    <ErrorMsg>{meta.error}</ErrorMsg>
                ) : (
                    <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
                )
            }
        </div>
    )
}