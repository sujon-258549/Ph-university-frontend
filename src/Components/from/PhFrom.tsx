import { FormProvider, useForm } from "react-hook-form";

const PhFrom = ({ onSubmit, children }) => {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PhFrom;
