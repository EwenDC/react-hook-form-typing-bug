import React, {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useContext
} from "react";
import {
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
  useFormContext,
  FieldValues,
  UseFormMethods
} from "react-hook-form";

interface CoolFormContextType {
  disabled: boolean;
}

const CoolFormContext = React.createContext<Partial<CoolFormContextType>>({});

export const useCoolFormContext = () => {
  const { disabled } = useContext(CoolFormContext);
  if (typeof disabled === "undefined") {
    throw Error("Missing Cool Form!");
  }
  return { ...useFormContext(), disabled };
};

interface CoolFormProps<TFieldValues extends FieldValues = FieldValues>
  extends CoolFormContextType {
  formMethods: UseFormMethods<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
}

const CoolForm: ForwardRefRenderFunction<
  HTMLFormElement,
  PropsWithChildren<CoolFormProps>
> = (props, ref) => {
  const { formMethods, onSubmit, onError, disabled, children } = props;

  return (
    <form ref={ref} onSubmit={formMethods.handleSubmit(onSubmit, onError)}>
      <FormProvider {...formMethods}>
        <CoolFormContext.Provider value={{ disabled }}>
          {children}
        </CoolFormContext.Provider>
      </FormProvider>
    </form>
  );
};

export default forwardRef(CoolForm);
