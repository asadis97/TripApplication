import React from "react";
import { func, object, string } from "prop-types";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";

const TripForm = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      to={ROUTES.CARDS}
    >
      <Input
        name="title"
        label="Title"
        value={data.title || ""}
        error={errors.title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="description"
        label="Description"
        value={data.description || ""}
        error={errors.description}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="country"
        label="Country"
        value={data.country || ""}
        error={errors.country}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="continent"
        label="Continent"
        value={data.continent || ""}
        error={errors.continent}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="imageUrl"
        label="Image URL"
        value={data.imageUrl || ""}
        error={errors.imageUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="imageAlt"
        label="Image Alt"
        value={data.imageAlt || ""}
        error={errors.imageAlt}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
    </Form>
  );
};

TripForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onFormChange: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
  setData: func.isRequired,
};

export default React.memo(TripForm);