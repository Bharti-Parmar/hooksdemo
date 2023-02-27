import React, { useState } from "react";

function UserFormValueOnAlert() {
  const [formItems, setFormItems] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [cityState, setCState] = useState("");

  //   const handleChange = (name, value) => {
  //     console.log("values", name, value);
  //     let val = name;
  //     setFormItems({ val: value });
  //   };

  const handleSubmit = () => {
    console.log(name, city, gender, cityState);
    alert(
      "Name : " +
        name +
        " city : " +
        city +
        " gender : " +
        gender +
        " state: " +
        cityState
    );
    setFormItems([
      {
        ...formItems,
        name: name,
        city: city,
        gender: gender,
        state: cityState,
      },
    ]);
  };

  return (
    <div>
      <p>
        {name},{gender},{city},{cityState}
      </p>
      <form className="form-group mx-5 my-5">
        <input
          type="text"
          className="form-control"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          className="form-control"
          defaultValue={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="city"
        />
        <br />
        <input
          type="text"
          className="form-control"
          defaultValue={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="gender"
        />
        <br />
        <input
          type="text"
          className="form-control"
          defaultValue={cityState}
          onChange={(e) => setCState(e.target.value)}
          placeholder="state"
        />
        <br />
        <button
          type="submit"
          className="btn btn-success d-flex mx-auto"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </form>
      <table className="table responsive mx-5 my-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {formItems.map((item) => {
              <td>{item}</td>;
            })} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserFormValueOnAlert;
