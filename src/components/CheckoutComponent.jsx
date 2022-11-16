import {
  CheckoutContainer,
  CheckoutSubTitle,
  CheckoutTitle,
} from "./styles/Checkout.styled";
import { Formik } from "formik";

const checkoutSchema = {};

const CheckoutComponent = () => {
  return (
    <CheckoutContainer>
      <CheckoutTitle>CHECKOUT</CheckoutTitle>
      <CheckoutSubTitle>BILLING DETAILS</CheckoutSubTitle>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={checkoutSchema}
        // onSubmit={({values, actions})=>}
      ></Formik>
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
