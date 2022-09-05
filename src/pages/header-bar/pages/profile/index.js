import React, { useContext } from "react";
import DataContext from "../../../../data-context";
import { updateProfileData } from "../../../../services";
import { useForm } from "react-hook-form";
import View from "./view";

function Index() {
  const { userData } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateProfileData({
      ...data,
      password: data.passwordNew,
      user_id: userData.id,
    })
      .then((res) => {})
      .catch((error) => {});
  };

  const validatePassword = () => {
    return watch("passwordNew") === watch("passwordNew_confirm");
  };

  const properties = {
    userData,
    onSubmit,
    handleSubmit,
    register,
    validatePassword,
  };

  return <View {...properties} />;
}

export default Index;
