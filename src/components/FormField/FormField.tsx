import { FC, ReactNode } from "react";
import './FormField.scss';
import classNames from "classnames";

export interface FormFieldProps {
  children: ReactNode;
  errorMessage?: string; 
}

export const FormField: FC<FormFieldProps> = ({children, errorMessage}) => {
  const fieldClass = classNames({
    'form-field': true,
    'form-field--error': errorMessage ? true : false 
  });

  return (
    <div className={fieldClass}>
      {children}
      {errorMessage && <span className="form-field__error-message">{errorMessage}</span>}
    </div>
  )
}